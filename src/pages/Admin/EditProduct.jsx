"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Sidebar from "./Sidebar"

const EditProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: null,
    })

    useEffect(() => {
        // Here you would typically fetch the product data from your backend
        // For now, we'll just simulate it with some dummy data
        setProduct({
            name: "Groundnut Oil",
            price: "29.99",
            category: "Cooking",
            description: "Pure cold-pressed groundnut oil with rich, nutty flavor",
            image: null,
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleImageChange = (e) => {
        setProduct((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the updated product data to your backend
        console.log(product)
    }

    return (
        <div className="p-6 mt-20">
            <Sidebar />
            <h1 className="text-3xl text-white font-semibold mb-4">Edit Product</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Product Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        type="text"
                        placeholder="Category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Product Image
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct

