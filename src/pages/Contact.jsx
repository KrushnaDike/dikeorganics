import { Typography, Form, Input, Button, Row, Col } from "antd"
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

function Contact() {
    const onFinish = (values) => {
        console.log("Received values of form: ", values)
        // Here you would typically send the form data to your backend
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    Contact Us
                </Title>
                <Row gutter={[48, 48]}>
                    <Col xs={24} md={12}>
                        <Title level={3} className="mb-6">
                            Get in Touch
                        </Title>
                        <Paragraph className="mb-8">
                            We'd love to hear from you! Whether you have a question about our products, need assistance with an order,
                            or want to learn more about our cold-pressed oils, our team is here to help.
                        </Paragraph>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <MailOutlined className="mr-4 text-2xl text-amber-700" />
                                <span>info@dikeorganics.com</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneOutlined className="mr-4 text-2xl text-amber-700" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <EnvironmentOutlined className="mr-4 text-2xl text-amber-700" />
                                <span>123 Organic Lane, Healthy City, 12345</span>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form name="contact" onFinish={onFinish} layout="vertical">
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: "Please input your email!" },
                                    { type: "email", message: "Please enter a valid email!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: "Please input your message!" }]}
                            >
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large">
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact

