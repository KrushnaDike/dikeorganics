import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Typography, Badge } from "antd";
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [favorites, setFavorites] = useState({});

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} has been added to your cart!`);
    };

    const toggleFavorite = (productId) => {
        setFavorites(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));

        const product = products.find(p => p.id === productId);
        if (!favorites[productId]) {
            toast.success(`${product.name} added to favorites!`);
        }
    };

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

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-24 pb-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,226,130,0.2)_0%,rgba(255,226,130,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.8
                    }}
                    className="mb-16 text-center"
                >
                    <Title level={1} className="text-center mb-2 text-amber-800">
                        Our Premium Cold-Pressed Oils
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                    <Paragraph className="mt-4 text-amber-700/80 max-w-2xl mx-auto">
                        Discover our collection of high-quality, organic cold-pressed oils. Each bottle contains pure, nutrient-rich oil extracted using traditional methods to preserve all natural benefits.
                    </Paragraph>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row gutter={[24, 36]}>
                        {products.map((product) => (
                            <Col xs={24} sm={12} md={8} key={product.id}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="h-full"
                                >
                                    <div className="product-card-wrapper h-full perspective-1000">
                                        <Card
                                            hoverable
                                            className="h-full product-card border border-amber-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                            cover={
                                                <div className="relative overflow-hidden group">
                                                    <img
                                                        alt={product.name}
                                                        src={product.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />

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

                                                    {/* Favorite button */}
                                                    <Button
                                                        shape="circle"
                                                        icon={favorites[product.id] ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
                                                        className="absolute top-3 right-3 bg-white/80 hover:bg-white border-none shadow-md z-10"
                                                        onClick={() => toggleFavorite(product.id)}
                                                    />

                                                    {/* Badge for special products */}
                                                    {product.isNew && (
                                                        <Badge.Ribbon
                                                            text="NEW"
                                                            color="#f59e0b"
                                                            className="absolute top-0 left-0"
                                                        />
                                                    )}
                                                    {product.discount && (
                                                        <Badge.Ribbon
                                                            text={`${product.discount}% OFF`}
                                                            color="#ef4444"
                                                            className="absolute top-0 left-0"
                                                        />
                                                    )}
                                                </div>
                                            }
                                            bodyStyle={{ padding: '16px' }}
                                        >
                                            <div className="mb-2">
                                                {product.category && (
                                                    <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                )}
                                            </div>

                                            <Card.Meta
                                                title={
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-lg font-bold text-gray-800">{product.name}</span>
                                                        <div className="text-xl font-semibold text-amber-700">
                                                            {product.oldPrice ? (
                                                                <div className="flex flex-col items-end">
                                                                    <span className="text-sm line-through text-gray-400">${product.oldPrice}</span>
                                                                    <span>${product.price}</span>
                                                                </div>
                                                            ) : (
                                                                <span>${product.price}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                }
                                                description={
                                                    <div className="mt-2">
                                                        <Paragraph className="text-gray-600 line-clamp-2 h-12">
                                                            {product.description}
                                                        </Paragraph>

                                                        {/* Rating stars */}
                                                        <div className="flex items-center mt-2 mb-3">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i} className={`text-lg ${i < (product.rating || 5) ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
                                                            ))}
                                                            <span className="text-xs text-gray-500 ml-2">
                                                                ({product.reviews || 0} reviews)
                                                            </span>
                                                        </div>

                                                        <Button
                                                            type="primary"
                                                            icon={<ShoppingCartOutlined />}
                                                            onClick={() => handleAddToCart(product)}
                                                            block
                                                            size="large"
                                                            className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 border-none rounded-lg shadow-md hover:shadow-amber-300/50 hover:from-amber-600 hover:to-amber-700"
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </div>
                                                }
                                            />
                                        </Card>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </div>

            {/* CSS for 3D effects */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
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
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

export default Products;