"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri"
import Sidebar from "./Sidebar"

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Groundnut Oil", price: 29.99, category: "Cooking" },
        { id: 2, name: "Coconut Oil", price: 24.99, category: "Multi-purpose" },
        { id: 3, name: "Mustard Oil", price: 19.99, category: "Cooking" },
    ])

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    return (
        <div className="p-6 mt-20">
            <Sidebar />
            <h1 className="text-3xl text-white font-semibold mb-4">Products</h1>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/admin/edit-product/${product.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        <RiEditLine className="inline-block" /> Edit
                                    </Link>
                                    <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-900">
                                        <RiDeleteBinLine className="inline-block" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products

