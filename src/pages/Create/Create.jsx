import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    //First approach - most used
    const [data, setData] = useState({
        productName: "",
        productDescription: "",
        productImage: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        await axios.post("https://66e31cae494df9a478e44f01.mockapi.io/products", data)
        navigate("/")
    }

    //Second Approach - short
    const addProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        await axios.post("https://66e31cae494df9a478e44f01.mockapi.io/products", data)
        navigate("/")
    }
    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Product</h2>
                <form onSubmit={addProduct}>
                    {/* Product Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Product Name</label>
                        <input onChange={handleChange} type="text" id="name" name="productName" placeholder="Enter product name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    {/* Product Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="description">Description</label>
                        <textarea onChange={handleChange} id="description" name="productDescription" rows={3} placeholder="Enter product description" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={""} />
                    </div>
                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="image">Image URL</label>
                        <input onChange={handleChange} type="url" id="image" name="productImage" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">Create
                        Product</button>
                </form>
            </div>

        </>
    )
}

export default Create
