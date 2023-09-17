const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')
const User = require('../../models/User')

// To create property
router.post('/', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('price', 'Price are required').not().isEmpty(),
    check('bedrooms', 'Bedrooms are required').not().isEmpty(),
    check('bathrooms', 'Bathrooms are required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')

        if (user.status !== 'owner') {
            return res.status(400).json({ errors: 'You have to be a owner' })
        }

        const { img, name, category, price, bedrooms, bathrooms } = req.body

        const newProperty = {
            img,
            name,
            category,
            price,
            bedrooms,
            bathrooms
        }

        user.property.unshift(newProperty)

        await user.save()
        res.json(user.property)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})


module.exports = router