import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, RotateCw, Heart, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function ProductDetails() {
    const { id } = useParams();
    const [rotationDegree, setRotationDegree] = useState(0);
    const [isRotating, setIsRotating] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isFavorite, setIsFavorite] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const productImageRef = useRef(null);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    // Find the product based on the ID from the URL
    const product = products.find((p) => p.id === Number.parseInt(id));

    const relatedProducts = products.filter((p) => p.id !== product?.id).slice(0, 3);

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

    // Handle mouse move for 3D effect
    const handleMouseMove = (e) => {
        if (!productImageRef.current) return;

        const rect = productImageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        setMousePosition({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ rotateX: 0, rotateY: 0 });
    };

    // Toggle rotation
    const toggleRotation = () => {
        setIsRotating(prev => !prev);
    };

    // Toggle favorite
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
        if (!isFavorite) {
            toast.success(`${product.name} added to favorites!`);
        }
    };

    // Handle Add to Cart
    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }));
        toast.success(`${product.name} (x${quantity}) added to cart!`);
    };

    // Handle quantity change
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
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
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-16 pb-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,226,130,0.2)_0%,rgba(255,226,130,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 mt-8 relative z-10">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="relative">
                            Back to Products
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-12"
                >
                    {/* Product Image with 3D-like effect */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div
                            ref={productImageRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="perspective-1000 aspect-square bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg overflow-hidden flex items-center justify-center p-8 border border-amber-100"
                        >
                            <div
                                className="product-3d-container w-full h-full flex items-center justify-center transform-style-3d transition-transform duration-200"
                                style={{
                                    transform: `rotateX(${mousePosition.rotateX}deg) rotateY(${mousePosition.rotateY}deg)`,
                                }}
                            >
                                <img
                                    src={product.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out drop-shadow-xl"
                                    style={{ transform: `rotate(${rotationDegree}deg)` }}
                                />
                            </div>

                            {/* Rotation control */}
                            <button
                                onClick={toggleRotation}
                                className={`absolute bottom-4 right-4 p-3 rounded-full ${isRotating ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' : 'bg-white text-amber-700 border border-amber-200'} hover:shadow-lg transition-all duration-300 z-10`}
                                title={isRotating ? "Stop rotation" : "Start rotation"}
                            >
                                <RotateCw size={20} className={isRotating ? 'animate-spin' : ''} />
                            </button>

                            {/* Favorite button */}
                            <button
                                onClick={toggleFavorite}
                                className={`absolute top-4 right-4 p-3 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-500 border border-amber-200'} hover:shadow-lg transition-all duration-300 z-10`}
                            >
                                <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
                            </button>
                        </div>

                        {/* Product badges */}
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                            {product.category && (
                                <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full text-sm font-medium shadow-md">
                                    {product.category}
                                </span>
                            )}
                            {product.isNew && (
                                <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-sm font-medium shadow-md">
                                    NEW
                                </span>
                            )}
                            {product.discount && (
                                <span className="px-3 py-1 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full text-sm font-medium shadow-md">
                                    {product.discount}% OFF
                                </span>
                            )}
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 opacity-50 blur-xl"></div>
                        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 opacity-40 blur-xl"></div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className={`${i < (product.rating || 5) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                />
                            ))}
                            <span className="text-sm text-gray-500 ml-2">
                                ({product.reviews || 42} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            {product.oldPrice ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-lg text-gray-400 line-through">${product.oldPrice}</span>
                                    <span className="text-2xl text-amber-700 font-bold">${product.price}</span>
                                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-sm font-medium">
                                        Save ${(product.oldPrice - product.price).toFixed(2)}
                                    </span>
                                </div>
                            ) : (
                                <p className="text-2xl text-amber-700 font-bold">${product.price}</p>
                            )}
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                        {/* Tabs */}
                        <div className="mb-8">
                            <div className="flex border-b border-amber-200">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-amber-700 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-600'}`}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab('benefits')}
                                    className={`px-4 py-2 font-medium ${activeTab === 'benefits' ? 'text-amber-700 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-600'}`}
                                >
                                    Benefits
                                </button>
                                <button
                                    onClick={() => setActiveTab('usage')}
                                    className={`px-4 py-2 font-medium ${activeTab === 'usage' ? 'text-amber-700 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-600'}`}
                                >
                                    How to Use
                                </button>
                            </div>

                            <div className="py-4">
                                {activeTab === 'description' && (
                                    <div className="text-gray-700 leading-relaxed">
                                        <p>{product.longDescription || "Our premium cold-pressed oil is extracted using traditional methods that preserve all the natural nutrients and flavors. Unlike refined oils, our cold-pressed oil retains its original color, aroma, and nutritional value, making it a healthier choice for cooking and dietary needs."}</p>
                                    </div>
                                )}

                                {activeTab === 'benefits' && (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {(product.benefits || [
                                            "Rich in essential nutrients",
                                            "Contains natural antioxidants",
                                            "Supports heart health",
                                            "Promotes healthy skin",
                                            "Enhances immune function",
                                            "Improves digestion"
                                        ]).map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="mt-1 min-w-[8px] h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {activeTab === 'usage' && (
                                    <div className="text-gray-700 leading-relaxed">
                                        <p>For culinary use, add to salads, use for light sautéing, or drizzle over cooked dishes. For skincare, apply a small amount to damp skin and massage gently. Store in a cool, dark place to maintain freshness.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-medium text-gray-700">Quantity:</span>
                            <div className="flex border border-amber-200 rounded-lg overflow-hidden shadow-sm">
                                <button
                                    onClick={decrementQuantity}
                                    className="px-3 py-2 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 hover:from-amber-100 hover:to-amber-200 transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-6 py-2 min-w-[50px] text-center font-medium bg-white">{quantity}</span>
                                <button
                                    onClick={incrementQuantity}
                                    className="px-3 py-2 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 hover:from-amber-100 hover:to-amber-200 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to cart button */}
                        <motion.button
                            onClick={handleAddToCart}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </motion.button>

                        {/* Additional product info */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Size", value: product.size || "250ml" },
                                { label: "Origin", value: product.origin || "Organic Farms" },
                                { label: "SKU", value: product.sku || `SKU-${product.id}` },
                                { label: "Shipping", value: "Free" }
                            ].map((info, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                    <p className="text-xs text-gray-500">{info.label}</p>
                                    <p className="font-medium text-amber-800">{info.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Related Products */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-24"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-amber-800">You May Also Like</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="p-2 rounded-full bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="group perspective-1000"
                            >
                                <div className="product-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-amber-100">
                                    <div className="aspect-square overflow-hidden relative">
                                        <img
                                            src={relatedProduct.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Quick view button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Link
                                                to={`/products/${relatedProduct.id}`}
                                                className="px-4 py-2 bg-white text-amber-700 rounded-lg shadow-md hover:bg-amber-50 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{relatedProduct.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-amber-700">${relatedProduct.price}</span>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className={`${i < (relatedProduct.rating || 5) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CSS for 3D effects */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                
                .product-card {
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                }
                
                .product-card:hover {
                    transform: rotateY(5deg) rotateX(5deg);
                    box-shadow: 
                        -5px 5px 15px rgba(251, 191, 36, 0.1),
                        10px 10px 20px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
}

export default ProductDetails;