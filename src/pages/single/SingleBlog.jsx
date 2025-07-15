import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SingleBlog = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const fetchSingleBlog = async () => {
        const response = await axios.get("https://66e31cae494df9a478e44f01.mockapi.io/products/" + id)
        setProduct(response.data)
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])

    const deleteSingleBlog = async () => {
        alert("Do you want to delete?")
        const response = await axios.delete("https://66e31cae494df9a478e44f01.mockapi.io/products/" + id)
        if (response.status === 200) {

            navigate("/")
        }
    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
                <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6">
                    {/* Product Image */}
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-64 object-cover rounded-md mb-6"
                    />

                    {/* Product Name */}
                    <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>

                    {/* Product Description */}
                    <p className="text-lg leading-relaxed text-gray-700">
                        {product.productDescription}
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => navigate(`/edit/${id}`)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Edit
                        </button>
                        <button onClick={deleteSingleBlog} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleBlog
