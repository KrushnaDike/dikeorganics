import React from "react";
import { Link } from "react-router-dom";
import { Typography, Table, Button, InputNumber, Image, Empty, Badge } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined, ShoppingOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions";
import { motion } from "framer-motion";

const { Title } = Typography;

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(updateQuantity(id, quantity));
        }
    };

    const incrementQuantity = (id, currentQuantity) => {
        dispatch(updateQuantity(id, currentQuantity + 1));
    };

    const decrementQuantity = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch(updateQuantity(id, currentQuantity - 1));
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

    const columns = [
        {
            title: "Product",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div className="flex items-center">
                    <div className="relative mr-4 perspective-1000">
                        <div className="product-image-container overflow-hidden rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <Image
                                src={record.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                alt={text}
                                width={80}
                                height={80}
                                className="object-cover"
                                preview={false}
                            />
                        </div>
                        {record.discount && (
                            <Badge
                                count={`${record.discount}% OFF`}
                                className="absolute -top-2 -right-2"
                                style={{ backgroundColor: '#ef4444' }}
                            />
                        )}
                    </div>
                    <div>
                        <Link to={`/products/${record.id}`} className="text-lg font-medium text-gray-800 hover:text-amber-600 transition-colors">
                            {text}
                        </Link>
                        {record.category && (
                            <div className="mt-1">
                                <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                                    {record.category}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price, record) => (
                <div>
                    {record.oldPrice ? (
                        <div className="flex flex-col">
                            <span className="text-sm line-through text-gray-400">${record.oldPrice.toFixed(2)}</span>
                            <span className="text-lg font-semibold text-amber-700">${price.toFixed(2)}</span>
                        </div>
                    ) : (
                        <span className="text-lg font-semibold text-amber-700">${price.toFixed(2)}</span>
                    )}
                </div>
            ),
        },
        {
            title: "Quantity",
            key: "quantity",
            render: (_, record) => (
                <div className="flex items-center">
                    <div className="flex border border-amber-200 rounded-lg overflow-hidden shadow-sm">
                        <Button
                            icon={<MinusOutlined />}
                            onClick={() => decrementQuantity(record.id, record.quantity)}
                            className="border-0 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 hover:from-amber-100 hover:to-amber-200"
                        />
                        <InputNumber
                            min={1}
                            value={record.quantity}
                            onChange={(value) => handleQuantityChange(record.id, value)}
                            className="border-0 w-16 text-center"
                            controls={false}
                        />
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() => incrementQuantity(record.id, record.quantity)}
                            className="border-0 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 hover:from-amber-100 hover:to-amber-200"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Total",
            key: "total",
            render: (_, record) => (
                <span className="text-lg font-bold text-amber-700">
                    ${(record.price * record.quantity).toFixed(2)}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => dispatch(removeFromCart(record.id))}
                    className="hover:bg-red-50 transition-colors"
                >
                    Remove
                </Button>
            ),
        },
    ];

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                    className="mb-12 text-center"
                >
                    <Title level={1} className="text-center mb-2 text-amber-800">
                        Your Cart
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {cart.items.length > 0 ? (
                        <motion.div variants={itemVariants}>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
                                <Table
                                    dataSource={cart.items}
                                    columns={columns}
                                    rowKey="id"
                                    pagination={false}
                                    className="cart-table"
                                />
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-8 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-md border border-amber-100"
                            >
                                <div className="mb-4 md:mb-0">
                                    <p className="text-gray-500">Need help with your order?</p>
                                    <p className="text-amber-700">Call us at: <span className="font-semibold">+1 (555) 123-4567</span></p>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-gray-500">Subtotal:</span>
                                        <span className="text-xl font-bold text-amber-700">${total.toFixed(2)}</span>
                                    </div>

                                    <Link to="/checkout">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                        >
                                            Proceed to Checkout
                                            <ArrowRightOutlined />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={itemVariants}
                            className="text-center py-16 bg-white rounded-xl shadow-md border border-amber-100"
                        >
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={
                                    <span className="text-lg text-gray-500">Your cart is empty</span>
                                }
                            >
                                <Link to="/products">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
                                    >
                                        <ShoppingOutlined />
                                        Continue Shopping
                                    </motion.button>
                                </Link>
                            </Empty>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Custom styles for the cart page */}
            <style jsx>{`
                .cart-table .ant-table {
                    background: transparent;
                }
                
                .cart-table .ant-table-thead > tr > th {
                    background: linear-gradient(to right, #fef3c7, #fde68a);
                    color: #92400e;
                    font-weight: 600;
                    border-bottom: 1px solid #fbbf24;
                }
                
                .cart-table .ant-table-tbody > tr > td {
                    border-bottom: 1px solid #fef3c7;
                }
                
                .cart-table .ant-table-tbody > tr:hover > td {
                    background-color: #fffbeb;
                }
                
                .product-image-container {
                    transition: transform 0.3s ease;
                }
                
                .product-image-container:hover {
                    transform: scale(1.05) rotateY(5deg);
                }
            `}</style>
        </div>
    );
}

export default Cart;