import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, RotateCw } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';

function ProductDetails() {
    const { id } = useParams();
    const [rotationDegree, setRotationDegree] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    // Find the product based on the ID from the URL
    const product = products.find((p) => p.id === Number.parseInt(id))

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

    // Auto-rotation effect
    useEffect(() => {
        let rotationInterval;

        if (isRotating) {
            rotationInterval = window.setInterval(() => {
                setRotationDegree(prev => (prev + 1) % 360);
            }, 30);
        }

        return () => {
            if (rotationInterval) clearInterval(rotationInterval);
        };
    }, [isRotating]);

    // Toggle rotation
    const toggleRotation = () => {
        setIsRotating(prev => !prev);
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success(`${product.name} has been added to your cart!`);
    };

    const incrementQuantity = (id, currentQuantity) => {
        dispatch(updateQuantity(id, currentQuantity + 1));
    };

    const decrementQuantity = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch(updateQuantity(id, currentQuantity - 1));
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                    <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-16 pb-24">
            <div className="container mx-auto px-4 mt-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Products
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Product Image with 3D-like effect */}
                    <div className="relative">
                        <div className="aspect-square bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center p-8">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out"
                                style={{ transform: `rotate(${rotationDegree}deg)` }}
                            />

                            {/* Rotation control */}
                            <button
                                onClick={toggleRotation}
                                className={`absolute bottom-4 right-4 p-3 rounded-full ${isRotating ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-amber-500 hover:text-white transition-colors`}
                                title={isRotating ? "Stop rotation" : "Start rotation"}
                            >
                                <RotateCw size={20} className={isRotating ? 'animate-spin' : ''} />
                            </button>
                        </div>

                        {/* Product badges */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                        <p className="text-xl text-amber-700 font-bold mb-4">${product.price}</p>
                        <p className="text-gray-600 mb-6">{product.description}</p>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3">Description</h3>
                            <p className="text-gray-700">{product.longDescription}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {product.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => decrementQuantity(product.id, product.quantity)}
                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">
                                    {product.quantity}
                                </span>
                                <button
                                    onClick={() => incrementQuantity(product.id, product.quantity)}
                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to cart button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full md:w-auto px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{relatedProduct.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-amber-700">${relatedProduct.price}</span>
                                        <Link
                                            to={`/products/${relatedProduct.id}`}
                                            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;