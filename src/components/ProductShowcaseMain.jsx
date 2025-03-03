import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Meta } = Card;

const products = [
    {
        id: 1,
        name: "Groundnut Oil",
        description: "Pure cold-pressed groundnut oil with rich, nutty flavor",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 29.99,
        badge: "Bestseller",
        badgeColor: "#f59e0b"
    },
    {
        id: 2,
        name: "Coconut Oil",
        description: "Virgin cold-pressed coconut oil for cooking and beauty",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 24.99,
        badge: "New",
        badgeColor: "#10b981"
    },
    {
        id: 3,
        name: "Mustard Oil",
        description: "Traditional cold-pressed mustard oil with intense aroma",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 19.99,
        badge: "Popular",
        badgeColor: "#3b82f6"
    },
];

function ProductShowcase() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, type: "spring", stiffness: 50 }
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-white to-amber-50/50"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Our Premium Products</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-amber-700/80">
                        Discover our collection of high-quality, organic cold-pressed oils. Each bottle contains pure,
                        nutrient-rich oil extracted using traditional methods.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="perspective-1000"
                        >
                            <div className="product-card h-full transform-style-3d">
                                <Card
                                    hoverable
                                    className="h-full border border-amber-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                                    cover={
                                        <div className="relative overflow-hidden group">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}
                                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Overlay gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Quick view button */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Link to={`/products/${product.id}`}>
                                                    <Button
                                                        icon={<EyeOutlined />}
                                                        shape="circle"
                                                        size="large"
                                                        className="bg-white/90 hover:bg-amber-500 hover:text-white border-none shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                    />
                                                </Link>
                                            </div>

                                            {/* Badge */}
                                            {product.badge && (
                                                <Badge.Ribbon
                                                    text={product.badge}
                                                    color={product.badgeColor}
                                                    className="absolute top-0 left-0"
                                                />
                                            )}
                                        </div>
                                    }
                                    actions={[
                                        <Link key="view" to={`/products/${product.id}`}>
                                            <Button
                                                type="primary"
                                                className="bg-gradient-to-r from-amber-500 to-amber-600 border-none shadow-sm hover:shadow-md"
                                            >
                                                View Details
                                            </Button>
                                        </Link>,
                                        <Button
                                            key="cart"
                                            icon={<ShoppingCartOutlined />}
                                            className="border-amber-500 text-amber-600 hover:text-amber-700 hover:border-amber-600"
                                        >
                                            Add to Cart
                                        </Button>
                                    ]}
                                >
                                    <Meta
                                        title={
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-gray-800">{product.name}</span>
                                                <span className="text-xl font-semibold text-amber-700">${product.price}</span>
                                            </div>
                                        }
                                        description={
                                            <p className="text-gray-600 mt-2">{product.description}</p>
                                        }
                                    />
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <Link to="/products">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="large"
                                className="px-8 py-6 h-auto border-amber-500 text-amber-600 hover:text-amber-700 hover:border-amber-600 rounded-lg shadow-sm hover:shadow-md"
                            >
                                View All Products
                            </Button>
                        </motion.div>
                    </Link>
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
                    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                .product-card:hover {
                    transform: rotateY(5deg) rotateX(5deg);
                }
            `}</style>
        </section>
    );
}

export default ProductShowcase;