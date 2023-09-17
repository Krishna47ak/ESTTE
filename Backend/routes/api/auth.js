const express = require('express')
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator');
const User = require('../../models/User')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        if (user == null) {
            return res.status(401).send({ errors: 'User does not exist' })
        } res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.post('/signin', [
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body

        try {
            let user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ errors: 'Invalid Credentials' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ errors: 'Invalid Credentials' })
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
                if (err) throw err
                res.json({ token })
            })

        } catch (err) {
            console.error(err)
            res.status(500).send('Server error')
        }

    })

router.post('/signup', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('mobile', 'Please include valid mobile number').not().isEmpty(),
    check('website', 'Website is required').not().isEmpty(),
    check('status', 'Status is required').not().isEmpty(),
    check('designation', 'Designation is required').not().isEmpty(),
    check('expertise', 'Expertise is required').not().isEmpty(),
    check('address', 'Please include valid Address').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('password', 'Please enter password with 8 or more characters').isLength({ min: 8 })
],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { img, name, email, mobile, website, status, designation, address, expertise, description, password } = req.body

        try {
            let user = await User.findOne({ email })

            if (user) {
                return res.status(400).json({ errors: 'User already exists' })
            }

            user = new User({
                img,
                name,
                email,
                mobile,
                website,
                status,
                designation,
                address,
                expertise,
                description,
                password
            })

            const salt = await bcrypt.genSalt(10)

            user.password = await bcrypt.hash(password, salt)

            await user.save()

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
                if (err) throw err
                res.json({ token })
            })

        } catch (err) {
            console.error(err)
            res.status(500).send('Server error')
        }

    })

module.exports = router