import axios from "axios"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [products, setProducts] = useState([])
    const fetchAllData = async () => {
        const response = await axios.get("https://66e31cae494df9a478e44f01.mockapi.io/products")
        setProducts(response.data)
    }
    useEffect(() => {
        fetchAllData()
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center align-middle">
                {
                    products.map((product) => {
                        return (
                            <Link to={`/products/${product.id}`}>
                                <div key={product.id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                                    <img className="w-full h-48 object-cover rounded-xl" src={product.productImage} alt="Product Image" />
                                    <div className="mt-4">
                                        <h2 className="text-xl font-semibold text-gray-800">{product.productName}</h2>
                                        <p className="mt-2 text-gray-600 text-sm">
                                            {product.productDescription}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home
