import { Typography, Form, Input, Button, Row, Col, message } from "antd"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

const { Title } = Typography

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const onFinish = (values) => {
        console.log("Received values of form: ", values)
        // Here you would typically send the order to your backend
        message.success("Order placed successfully!")
        dispatch(clearCart());
        // Redirect to a thank you page or back to the home page
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    Checkout
                </Title>
                <Row gutter={48}>
                    <Col xs={24} md={16}>
                        <Form name="checkout" onFinish={onFinish} layout="vertical">
                            <Title level={3}>Shipping Information</Title>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="firstName"
                                        label="First Name"
                                        rules={[{ required: true, message: "Please input your first name!" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="lastName"
                                        label="Last Name"
                                        rules={[{ required: true, message: "Please input your last name!" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[{ required: true, message: "Please input your address!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item name="city" label="City" rules={[{ required: true, message: "Please input your city!" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="zipCode"
                                        label="ZIP Code"
                                        rules={[{ required: true, message: "Please input your ZIP code!" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Title level={3} className="mt-8">
                                Payment Information
                            </Title>
                            <Form.Item
                                name="cardNumber"
                                label="Card Number"
                                rules={[{ required: true, message: "Please input your card number!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="expirationDate"
                                        label="Expiration Date"
                                        rules={[{ required: true, message: "Please input the expiration date!" }]}
                                    >
                                        <Input placeholder="MM/YY" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="cvv" label="CVV" rules={[{ required: true, message: "Please input the CVV!" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large">
                                    Place Order
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col xs={24} md={8}>
                        <Title level={3}>Order Summary</Title>
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between mb-2">
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="border-t pt-4 mt-4">
                            <Title level={4} className="flex justify-between">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </Title>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Checkout

