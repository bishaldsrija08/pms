import Navbar from "../../components/navbar/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <img className="w-full h-48 object-cover rounded-xl" src="https://rocktechshop.com/wp-content/uploads/2023/03/1-2.jpg" alt="Product Image" />
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
                    <p className="mt-2 text-gray-600 text-sm">
                        This is a short description of the product. Highlight features or key benefits here.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Home
