import { Typography, Row, Col, Card, Avatar } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const teamMembers = [
    { name: "Krushna Dike", role: "Founder", image: "/founder.jpg" },
    { name: "Sanket Dike", role: "CEO", image: "/ceo.jpeg" },
    { name: "Arvind Dike", role: "Co-Founder", image: "/cofounder.jpeg" },
];

function About() {
    // Smoother animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.8
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                duration: 0.8
            }
        }
    };

    const cardHoverVariants = {
        rest: { 
            scale: 1, 
            rotateY: 0, 
            rotateX: 0,
            boxShadow: "0 8px 32px rgba(31, 38, 135, 0.3)"
        },
        hover: { 
            scale: 1.05, 
            rotateY: 5, 
            rotateX: -5,
            boxShadow: "0 15px 40px rgba(31, 38, 135, 0.4)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Decorative elements */}
                <motion.div 
                    className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ 
                        duration: 15, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                />
                
                <motion.div 
                    className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-amber-300 opacity-10 blur-3xl"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ 
                        duration: 18, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
                    className="relative z-10"
                >
                    <Title level={1} className="text-center mb-12">
                        About <span className="bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text">Dike Organics</span>
                    </Title>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.8,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
                    className="relative z-10"
                >
                    <Paragraph className="text-lg mb-8 text-center max-w-4xl mx-auto">
                        Dike Organics was founded with a passion for bringing the purest, most nutritious oils to your table.
                        Our journey began in the heart of organic farms, where we discovered the incredible difference that cold-pressing
                        makes in preserving the natural goodness of oils.
                    </Paragraph>
                    <Paragraph className="text-lg mb-12 text-center max-w-4xl mx-auto">
                        Today, we're proud to offer a range of premium cold-pressed oils that not only enhance your culinary experiences
                        but also contribute to your overall well-being. Our commitment to quality, sustainability, and health drives
                        everything we do.
                    </Paragraph>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
                    className="relative z-10"
                >
                    <Title level={2} className="text-center mb-8">
                        Meet Our Team
                    </Title>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10"
                >
                    <Row gutter={[24, 24]} className="pb-12">
                        {teamMembers.map((member, index) => (
                            <Col xs={24} sm={8} key={index}>
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover="hover"
                                    initial="rest"
                                    animate="rest"
                                    className="h-full"
                                >
                                    <motion.div
                                        variants={cardHoverVariants}
                                        className="h-full rounded-2xl overflow-hidden"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            perspective: "1000px"
                                        }}
                                    >
                                        <Card
                                            className="text-center h-full border-0 rounded-2xl"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.2)",
                                                backdropFilter: "blur(10px)",
                                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.3)",
                                                borderRadius: "20px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            >
                                                <Avatar
                                                    src={member.image}
                                                    size={200}
                                                    className="mb-4 shadow-lg border-4 border-amber-300"
                                                />
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ 
                                                    delay: 0.5 + index * 0.2,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15
                                                }}
                                            >
                                                <Title
                                                    level={4}
                                                    className="bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text"
                                                >
                                                    {member.name}
                                                </Title>
                                                <Paragraph className="text-amber-700">{member.role}</Paragraph>
                                            </motion.div>
                                            
                                            {/* Decorative elements inside card */}
                                            <motion.div 
                                                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-amber-200 opacity-20 blur-xl"
                                                animate={{ 
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 10, 0]
                                                }}
                                                transition={{ 
                                                    duration: 8, 
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 1.5
                                                }}
                                            />
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
                
                {/* Mission statement */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 0.8,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                    }}
                    className="mt-12 mb-24 max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-xl blur-xl transform -rotate-1"></div>
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-amber-100 relative"
                        >
                            <Title level={3} className="text-amber-800 mb-4">Our Mission</Title>
                            <Paragraph className="text-lg text-amber-700">
                                "To preserve the ancient tradition of cold-pressing while embracing modern sustainability practices, 
                                bringing the purest, most nutritious oils to health-conscious consumers worldwide."
                            </Paragraph>
                            <div className="mt-4 text-amber-600 font-semibold">— The Dike Family</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;