import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine, RiOilLine, RiUserLine, RiAddCircleLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Menu Button for Small Screens */}
            <button
                className="fixed top-5 right-6 z-50 mt-20 bg-amber-800 text-white p-2 rounded-md"
                onClick={toggleSidebar}
            >
                {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`bg-amber-800 pt-20 text-white w-64 min-h-screen fixed left-0 top-0 transform ${isOpen ? "translate-x-0" : "hidden"
                    } translate-x-0 transition-transform duration-300 ease-in-out z-40`}
            >
                {/* Close Button inside Sidebar */}
                <button
                    className="md:hidden absolute top-4 right-4 bg-amber-800 text-white p-2 rounded-md"
                    onClick={toggleSidebar}
                >
                    <RiCloseLine size={24} />
                </button>

                <h2 className="text-3xl font-semibold text-center py-4">Admin Panel</h2>
                <nav className="space-y-2 px-2">
                    <Link
                        to="/admin/dashboard"
                        className={`block py-2.5 px-4 rounded transition duration-200 ${isActive("/admin/dashboard") ? "bg-amber-900" : "hover:bg-amber-700"
                            }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <RiDashboardLine className="inline-block mr-2" /> Dashboard
                    </Link>
                    <Link
                        to="/admin/products"
                        className={`block py-2.5 px-4 rounded transition duration-200 ${isActive("/admin/products") ? "bg-amber-900" : "hover:bg-amber-700"
                            }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <RiOilLine className="inline-block mr-2" /> Products
                    </Link>
                    <Link
                        to="/admin/users"
                        className={`block py-2.5 px-4 rounded transition duration-200 ${isActive("/admin/users") ? "bg-amber-900" : "hover:bg-amber-700"
                            }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <RiUserLine className="inline-block mr-2" /> Users
                    </Link>
                    <Link
                        to="/admin/add-product"
                        className={`block py-2.5 px-4 rounded transition duration-200 ${isActive("/admin/add-product") ? "bg-amber-900" : "hover:bg-amber-700"
                            }`}
                        onClick={() => setIsOpen(false)}
                    >
                        <RiAddCircleLine className="inline-block mr-2" /> Add Product
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
