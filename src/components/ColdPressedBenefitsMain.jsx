import React from "react";
import { Card, Row, Col } from "antd";
import { CheckCircleOutlined, FireOutlined, ExperimentOutlined, HeartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const benefits = [
    {
        title: "Nutrient Retention",
        description:
            "Cold-pressing preserves essential nutrients, vitamins, and antioxidants that are often destroyed by heat in conventional processing.",
        icon: <ExperimentOutlined />,
        color: "#10b981"
    },
    {
        title: "No Chemicals",
        description: "Our oils are extracted without using any chemical solvents, ensuring you get pure, natural goodness.",
        icon: <CheckCircleOutlined />,
        color: "#3b82f6"
    },
    {
        title: "Better Taste",
        description:
            "Cold-pressed oils retain their natural flavors, providing a richer, more authentic taste to your cooking.",
        icon: <FireOutlined />,
        color: "#f59e0b"
    },
    {
        title: "Heart Healthy",
        description: "Our process maintains the natural omega fatty acids that are beneficial for heart health.",
        icon: <HeartOutlined />,
        color: "#ef4444"
    },
];

function ColdPressedBenefits() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/50 to-white"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            {/* Floating oil drops */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/5 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300/30 to-amber-400/20 blur-md"
            ></motion.div>

            <motion.div
                animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 right-1/5 w-16 h-16 rounded-full bg-gradient-to-br from-amber-200/30 to-amber-300/20 blur-md"
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Why Choose Cold-Pressed Oils?</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-amber-700/80">
                        Cold-pressed oils are extracted without using heat or chemicals, preserving their natural goodness and
                        nutritional value.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Row gutter={[24, 24]}>
                        {benefits.map((benefit, index) => (
                            <Col key={index} xs={24} md={12}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="h-full perspective-1000"
                                >
                                    <div className="benefit-card h-full transform-style-3d">
                                        <Card
                                            className="h-full border border-amber-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                                            bodyStyle={{ padding: '24px' }}
                                        >
                                            <div className="flex gap-6">
                                                <div
                                                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}40)`,
                                                        border: `1px solid ${benefit.color}30`
                                                    }}
                                                >
                                                    <span className="text-2xl" style={{ color: benefit.color }}>
                                                        {benefit.icon}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                                                    <p className="text-gray-600">{benefit.description}</p>
                                                </div>
                                            </div>

                                            {/* Decorative corner accent */}
                                            <div
                                                className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                                                style={{ pointerEvents: 'none' }}
                                            >
                                                <div
                                                    className="absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-4 -translate-y-4"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}40)`,
                                                        border: `1px solid ${benefit.color}30`
                                                    }}
                                                ></div>
                                            </div>
                                        </Card>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-100 shadow-sm">
                        <p className="text-amber-800 font-medium">
                            Our cold-pressed oils are made using traditional wooden presses called "Ghani"
                            that have been used for centuries in India.
                        </p>
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
                
                .benefit-card {
                    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                .benefit-card:hover {
                    transform: rotateY(-5deg) rotateX(5deg);
                }
            `}</style>
        </section>
    );
}

export default ColdPressedBenefits;