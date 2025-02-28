import React from 'react';
import { Typography, Form, Input, Button, Row, Col } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

function Contact() {
    const [form] = Form.useForm();

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refLeft, inViewLeft] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refRight, inViewRight] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refContactItems, inViewContactItems] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        // Here you would typically send the form data to your backend

        // Show success animation
        form.resetFields();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
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

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const formItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-24 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,226,130,0.2)_0%,rgba(255,226,130,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={refTitle}
                    initial="hidden"
                    animate={inViewTitle ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="mb-16"
                >
                    <Title level={1} className="text-center mb-2 text-amber-800">
                        Contact Us
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                </motion.div>

                <Row gutter={[48, 48]} className="items-stretch">
                    <Col xs={24} md={12}>
                        <motion.div
                            ref={refLeft}
                            initial="hidden"
                            animate={inViewLeft ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="h-full bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100"
                        >
                            <motion.div variants={itemVariants}>
                                <Title level={3} className="mb-6 text-amber-700">
                                    Get in Touch
                                </Title>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Paragraph className="mb-8 text-amber-900/80">
                                    We'd love to hear from you! Whether you have a question about our products,
                                    need assistance with an order, or want to learn more about our cold-pressed oils,
                                    our team is here to help.
                                </Paragraph>
                            </motion.div>

                            <motion.ul
                                ref={refContactItems}
                                initial="hidden"
                                animate={inViewContactItems ? "visible" : "hidden"}
                                variants={containerVariants}
                                className="space-y-6"
                            >
                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center group"
                                >
                                    <div className="mr-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full shadow-md group-hover:shadow-amber-300/50 transition-all duration-300">
                                        <MailOutlined className="text-xl" />
                                    </div>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-amber-800 group-hover:text-amber-600 transition-colors duration-300"
                                    >
                                        info@dikeorganics.com
                                    </motion.span>
                                </motion.li>

                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center group"
                                >
                                    <div className="mr-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full shadow-md group-hover:shadow-amber-300/50 transition-all duration-300">
                                        <PhoneOutlined className="text-xl" />
                                    </div>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-amber-800 group-hover:text-amber-600 transition-colors duration-300"
                                    >
                                        +1 (555) 123-4567
                                    </motion.span>
                                </motion.li>

                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center group"
                                >
                                    <div className="mr-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full shadow-md group-hover:shadow-amber-300/50 transition-all duration-300">
                                        <EnvironmentOutlined className="text-xl" />
                                    </div>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-amber-800 group-hover:text-amber-600 transition-colors duration-300"
                                    >
                                        123 Organic Lane, Healthy City, 12345
                                    </motion.span>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </Col>

                    <Col xs={24} md={12}>
                        <motion.div
                            ref={refRight}
                            initial="hidden"
                            animate={inViewRight ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="h-full bg-white p-8 rounded-2xl shadow-lg border border-amber-100"
                        >
                            <Form
                                form={form}
                                name="contact"
                                onFinish={onFinish}
                                layout="vertical"
                                className="h-full flex flex-col"
                            >
                                <motion.div custom={0} variants={formItemVariants}>
                                    <Form.Item
                                        name="name"
                                        label={<span className="text-amber-700">Name</span>}
                                        rules={[{ required: true, message: "Please input your name!" }]}
                                    >
                                        <Input
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                            placeholder="Your name"
                                        />
                                    </Form.Item>
                                </motion.div>

                                <motion.div custom={1} variants={formItemVariants}>
                                    <Form.Item
                                        name="email"
                                        label={<span className="text-amber-700">Email</span>}
                                        rules={[
                                            { required: true, message: "Please input your email!" },
                                            { type: "email", message: "Please enter a valid email!" },
                                        ]}
                                    >
                                        <Input
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                            placeholder="Your email address"
                                        />
                                    </Form.Item>
                                </motion.div>

                                <motion.div custom={2} variants={formItemVariants}>
                                    <Form.Item
                                        name="subject"
                                        label={<span className="text-amber-700">Subject</span>}
                                        rules={[{ required: true, message: "Please input a subject!" }]}
                                    >
                                        <Input
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                            placeholder="What is this regarding?"
                                        />
                                    </Form.Item>
                                </motion.div>

                                <motion.div custom={3} variants={formItemVariants} className="flex-grow">
                                    <Form.Item
                                        name="message"
                                        label={<span className="text-amber-700">Message</span>}
                                        rules={[{ required: true, message: "Please input your message!" }]}
                                        className="flex-grow"
                                    >
                                        <Input.TextArea
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500 h-full min-h-[120px]"
                                            rows={4}
                                            placeholder="How can we help you?"
                                        />
                                    </Form.Item>
                                </motion.div>

                                <motion.div custom={4} variants={formItemVariants}>
                                    <Form.Item>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                size="large"
                                                className="w-full h-12 bg-gradient-to-r from-amber-500 to-amber-600 border-none rounded-lg shadow-md hover:shadow-amber-300/50"
                                            >
                                                Send Message
                                            </Button>
                                        </motion.div>
                                    </Form.Item>
                                </motion.div>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-amber-700/70">
                        We typically respond to all inquiries within 24 hours.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;