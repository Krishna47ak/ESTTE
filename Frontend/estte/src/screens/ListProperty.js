import { useState, useRef } from "react"
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { listProperty } from "../store/actions/property";
import { useNavigate } from "react-router-dom";
import PropertyImg from "../assets/images/property.png";
import Spinner from "../components/Spinner";

const ListProperty = () => {
    const inputRef = useRef("");
    const history = useNavigate()
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    const [errorImg, setErrorImg] = useState(false);
    const [formData, setFormData] = useState({
        img: '',
        name: '',
        price: '',
        category: '',
        bedrooms: '',
        bathrooms: ''
    });

    const handleImageChange = (e) => {
        var reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFormData({ ...formData, img: reader.result });
        };
    };

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const { img, name, price, category, bedrooms, bathrooms } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        img?.length == 0 ? setErrorImg(true) : setErrorImg(false)

        if (!errorImg) dispatch(listProperty(formData, history))
        setLoading(true)
    }

    return loading ? <Spinner /> : (
        <section className="flex flex-col  items-center p-5 min-h-screen ">
            <p className="text-black text-xl">
                List Your Property
            </p>
            <form className='flex flex-col gap-6 mt-5 border border-[#C0C0C0] bg-gray-300 shadow-xl rounded-xl p-10' onSubmit={onSubmit} >
                <div className="relative w-48 mx-auto" onClick={handleImageClick}>
                    <img
                        src={img ? img : PropertyImg}
                        alt="dp"
                        className="h-44 w-44 rounded-full mx-auto overflow-hidden object-cover border-2 "
                    />
                    <div className="absolute right-0 bottom-2 bg-white rounded-full p-1 border-2">
                        <BiSolidPencil style={{ fontSize: 35 }} />
                    </div>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        ref={inputRef}
                        accept="image/png, image/jpeg"
                        style={{ display: "none" }}
                    />
                </div>
                {errorImg && <span className='ml-1 text-xs text-center text-red-600 font-semibold' >Please select an image</span>}
                <div className='flex mt-5' >
                    <select className='rounded-2xl h-11 px-4 w-40 mr-2 bg-white outline-none' value={category} onChange={onChange} name="category" required>
                        <option value="">Category</option>
                        <option value="sale">Sale</option>
                        <option value="rent">rent</option>
                    </select>
                </div>
                <div>
                    <input name='name' value={name} onChange={onChange} type="text" placeholder='Name of the property' className='bg-white pr-5 pl-5 py-2 rounded-lg mr-3' required />
                    <input name='price' value={price} onChange={onChange} type="number" placeholder='Price of the property' className='bg-white pr-5 pl-5 py-2 rounded-lg' required />
                </div>

                <div>
                    <input name='bedrooms' value={bedrooms} onChange={onChange} type="number" placeholder='No. of bedrooms' className='bg-white pr-5 pl-5 py-2 rounded-lg mr-3' required />
                    <input name='bathrooms' value={bathrooms} onChange={onChange} type="number" placeholder='No. of bathrooms' className='bg-white pr-5 pl-5 py-2 rounded-lg mr-3' required />
                </div>
                <input type='submit' className='btn btn-primary bg-[#340E62] text-white py-2 mt-5 rounded-lg active:scale-95 duration-500' />
            </form>
        </section>
    )
}

export default ListProperty