import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold text-blue-600">MyApp</div>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
                        <li><Link to="/create" className="hover:text-blue-600 transition">Create</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
