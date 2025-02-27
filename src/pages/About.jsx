import { Typography, Row, Col, Card, Avatar } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const teamMembers = [
    { name: "Krushna Dike", role: "Founder", image: "/founder.jpg" },
    { name: "Sanket Dike", role: "CEO", image: "/ceo.jpeg" },
    { name: "Arvind Dike", role: "Co-Founder", image: "/cofounder.jpeg" },
];

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Title level={1} className="text-center mb-12">
                        About <span className="bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text">Dike Organics</span>
                    </Title>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Paragraph className="text-lg mb-8 text-center">
                        Dike Organics was founded with a passion for bringing the purest, most nutritious oils to your table.
                        Our journey began in the heart of organic farms, where we discovered the incredible difference that cold-pressing
                        makes in preserving the natural goodness of oils.
                    </Paragraph>
                    <Paragraph className="text-lg mb-12 text-center">
                        Today, we're proud to offer a range of premium cold-pressed oils that not only enhance your culinary experiences
                        but also contribute to your overall well-being. Our commitment to quality, sustainability, and health drives
                        everything we do.
                    </Paragraph>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Title level={2} className="text-center mb-8">
                        Meet Our Team
                    </Title>
                </motion.div>

                <Row gutter={[24, 24]} className="pb-12">
                    {teamMembers.map((member, index) => (
                        <Col xs={24} sm={8} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card
                                    className="text-center bg-opacity-30 backdrop-blur-xl shadow-xl border-0 rounded-2xl"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.2)",
                                        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.3)",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Avatar
                                        src={member.image}
                                        size={200}
                                        className="mb-4 shadow-lg border-4 border-amber-300"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.2 }}
                                    >
                                        <Title
                                            level={4}
                                            className="bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text"
                                        >
                                            {member.name}
                                        </Title>
                                        <Paragraph className="text-amber-700">{member.role}</Paragraph>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default About;
