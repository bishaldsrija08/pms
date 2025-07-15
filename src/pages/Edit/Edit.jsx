import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        productName: "",
        productDescription: "",
        productImage: ""
    });

    const fetchSingleBlog = async () => {
        const response = await axios.get(
            "https://66e31cae494df9a478e44f01.mockapi.io/products/" + id
        );
        setData(response.data);
    };

    useEffect(() => {
        fetchSingleBlog();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(
            "https://66e31cae494df9a478e44f01.mockapi.io/products/" + id,
            data
        );
        navigate("/");
    };

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    {/* Product Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Product Name</label>
                        <input value={data.productName} onChange={handleChange} type="text" id="name" name="productName" placeholder="Enter product name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    {/* Product Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="description">Description</label>
                        <textarea value={data.productDescription} onChange={handleChange} id="description" name="productDescription" rows={3} placeholder="Enter product description" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={""} />
                    </div>
                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="image">Image URL</label>
                        <input value={data.productImage} onChange={handleChange} type="url" id="image" name="productImage" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">Edit
                        Product</button>
                </form>
            </div>

        </>
    )
}

export default Edit
