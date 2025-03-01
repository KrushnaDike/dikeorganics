import React, { useState } from "react";
import { Typography, Form, Input, Button, Row, Col, message, Steps, Divider, Radio, Checkbox, Select } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
import { motion } from "framer-motion";
import {
    UserOutlined,
    CreditCardOutlined,
    CheckCircleOutlined,
    LockOutlined,
    // ShieldOutlined,
    SafetyOutlined,
    CreditCardFilled,
    BankOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        // Here you would typically send the order to your backend
        setIsOrderPlaced(true);
        message.success("Order placed successfully!");
        dispatch(clearCart());
        // Redirect to a thank you page or back to the home page
    };

    const nextStep = () => {
        form.validateFields().then(() => {
            setCurrentStep(currentStep + 1);
        });
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

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

    const steps = [
        {
            title: 'Shipping',
            icon: <UserOutlined />,
            content: (
                <div>
                    <Title level={4} className="mb-6 text-amber-800">Shipping Information</Title>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[{ required: true, message: "Please input your first name!" }]}
                            >
                                <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[{ required: true, message: "Please input your last name!" }]}
                            >
                                <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please enter a valid email!" }
                        ]}
                    >
                        <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: "Please input your phone number!" }]}
                    >
                        <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[{ required: true, message: "Please input your address!" }]}
                    >
                        <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[{ required: true, message: "Please input your city!" }]}
                            >
                                <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="state"
                                label="State"
                                rules={[{ required: true, message: "Please select your state!" }]}
                            >
                                <Select className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500">
                                    <Option value="AL">Alabama</Option>
                                    <Option value="AK">Alaska</Option>
                                    <Option value="AZ">Arizona</Option>
                                    <Option value="CA">California</Option>
                                    <Option value="CO">Colorado</Option>
                                    <Option value="NY">New York</Option>
                                    <Option value="TX">Texas</Option>
                                    {/* Add more states as needed */}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="zipCode"
                                label="ZIP Code"
                                rules={[{ required: true, message: "Please input your ZIP code!" }]}
                            >
                                <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="shippingNotes" label="Delivery Notes (Optional)">
                        <Input.TextArea
                            rows={3}
                            placeholder="Special instructions for delivery"
                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                        />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: 'Payment',
            icon: <CreditCardOutlined />,
            content: (
                <div>
                    <Title level={4} className="mb-6 text-amber-800">Payment Information</Title>

                    <Form.Item name="paymentMethod" className="mb-6">
                        <Radio.Group
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            value={paymentMethod}
                            className="w-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Radio.Button
                                    value="credit-card"
                                    className={`h-auto p-4 flex items-center rounded-lg border ${paymentMethod === 'credit-card' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}
                                >
                                    <div className="flex items-center">
                                        <CreditCardFilled className="text-2xl mr-3 text-amber-500" />
                                        <div>
                                            <div className="font-medium">Credit Card</div>
                                            <div className="text-xs text-gray-500">Visa, Mastercard, Amex</div>
                                        </div>
                                    </div>
                                </Radio.Button>

                                <Radio.Button
                                    value="paypal"
                                    className={`h-auto p-4 flex items-center rounded-lg border ${paymentMethod === 'paypal' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}
                                >
                                    <div className="flex items-center">
                                        <BankOutlined className="text-2xl mr-3 text-amber-500" />
                                        <div>
                                            <div className="font-medium">PayPal</div>
                                            <div className="text-xs text-gray-500">Pay with your PayPal account</div>
                                        </div>
                                    </div>
                                </Radio.Button>
                            </div>
                        </Radio.Group>
                    </Form.Item>

                    {paymentMethod === 'credit-card' && (
                        <>
                            <Form.Item
                                name="cardholderName"
                                label="Cardholder Name"
                                rules={[{ required: true, message: "Please input the cardholder name!" }]}
                            >
                                <Input className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500" />
                            </Form.Item>

                            <Form.Item
                                name="cardNumber"
                                label="Card Number"
                                rules={[{ required: true, message: "Please input your card number!" }]}
                            >
                                <Input
                                    className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                    prefix={<LockOutlined className="text-gray-400" />}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                />
                            </Form.Item>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="expirationDate"
                                        label="Expiration Date"
                                        rules={[{ required: true, message: "Please input the expiration date!" }]}
                                    >
                                        <Input
                                            placeholder="MM/YY"
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="cvv"
                                        label="CVV"
                                        rules={[{ required: true, message: "Please input the CVV!" }]}
                                    >
                                        <Input
                                            className="rounded-lg border-amber-200 hover:border-amber-400 focus:border-amber-500"
                                            prefix={<LockOutlined className="text-gray-400" />}
                                            placeholder="XXX"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center">
                                {/* <ShieldOutlined className="text-xl text-amber-500 mr-3" /> */}
                                <div className="text-sm text-amber-700">
                                    Your payment information is encrypted and secure. We never store your full card details.
                                </div>
                            </div>
                        </>
                    )}

                    {paymentMethod === 'paypal' && (
                        <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg text-center">
                            <p className="mb-4 text-amber-700">You will be redirected to PayPal to complete your payment.</p>
                            <img
                                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                                alt="PayPal"
                                className="h-12 mx-auto"
                            />
                        </div>
                    )}

                    <Form.Item name="savePaymentInfo" valuePropName="checked" className="mt-6">
                        <Checkbox>Save payment information for future purchases</Checkbox>
                    </Form.Item>
                </div>
            ),
        },
        {
            title: 'Review',
            icon: <CheckCircleOutlined />,
            content: (
                <div>
                    <Title level={4} className="mb-6 text-amber-800">Review Your Order</Title>

                    <div className="mb-8">
                        <div className="font-semibold text-lg mb-2 text-amber-800">Order Items</div>
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                                    <div className="flex items-center">
                                        <img
                                            src={item.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-md mr-3"
                                        />
                                        <div>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                                        </div>
                                    </div>
                                    <div className="font-semibold text-amber-700">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Row gutter={24}>
                        <Col span={12}>
                            <div className="font-semibold text-lg mb-2 text-amber-800">Shipping Address</div>
                            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 h-full">
                                <Form.Item noStyle shouldUpdate>
                                    {() => (
                                        <>
                                            <p className="font-medium">
                                                {form.getFieldValue('firstName')} {form.getFieldValue('lastName')}
                                            </p>
                                            <p>{form.getFieldValue('address')}</p>
                                            <p>
                                                {form.getFieldValue('city')}, {form.getFieldValue('state')} {form.getFieldValue('zipCode')}
                                            </p>
                                            <p>{form.getFieldValue('phone')}</p>
                                            <p>{form.getFieldValue('email')}</p>
                                        </>
                                    )}
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="font-semibold text-lg mb-2 text-amber-800">Payment Method</div>
                            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 h-full">
                                {paymentMethod === 'credit-card' ? (
                                    <Form.Item noStyle shouldUpdate>
                                        {() => (
                                            <>
                                                <div className="flex items-center mb-2">
                                                    <CreditCardFilled className="text-xl mr-2 text-amber-500" />
                                                    <span className="font-medium">Credit Card</span>
                                                </div>
                                                <p>Cardholder: {form.getFieldValue('cardholderName')}</p>
                                                <p>Card Number: **** **** **** {form.getFieldValue('cardNumber')?.slice(-4)}</p>
                                                <p>Expires: {form.getFieldValue('expirationDate')}</p>
                                            </>
                                        )}
                                    </Form.Item>
                                ) : (
                                    <div className="flex items-center">
                                        <BankOutlined className="text-xl mr-2 text-amber-500" />
                                        <span className="font-medium">PayPal</span>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>

                    <div className="mt-8">
                        <Form.Item name="termsAndConditions" valuePropName="checked" rules={[
                            { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Please accept the terms and conditions') }
                        ]}>
                            <Checkbox>
                                I agree to the <a href="#" className="text-amber-600 hover:text-amber-700">Terms and Conditions</a> and <a href="#" className="text-amber-600 hover:text-amber-700">Privacy Policy</a>
                            </Checkbox>
                        </Form.Item>
                    </div>
                </div>
            ),
        },
    ];

    if (isOrderPlaced) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-24 pb-16 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,226,130,0.2)_0%,rgba(255,226,130,0)_50%)] pointer-events-none"></div>
                <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-amber-100 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircleOutlined className="text-4xl text-green-500" />
                        </div>

                        <Title level={2} className="text-amber-800 mb-4">Thank You for Your Order!</Title>

                        <Paragraph className="text-gray-600 mb-6">
                            Your order has been placed successfully. We've sent a confirmation email to your inbox.
                        </Paragraph>

                        <div className="bg-amber-50 p-4 rounded-lg mb-6 inline-block">
                            <Text strong>Order Number:</Text> <Text className="text-amber-700">ORD-{Math.floor(100000 + Math.random() * 900000)}</Text>
                        </div>

                        <Paragraph className="mb-8">
                            We'll process your order right away. You can track your order status in your account.
                        </Paragraph>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-gradient-to-r from-amber-500 to-amber-600 border-none rounded-lg shadow-md hover:shadow-amber-300/50"
                                href="/"
                            >
                                Return to Home
                            </Button>

                            <Button
                                size="large"
                                className="border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50"
                                href="/account/orders"
                            >
                                View Order
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

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
                        Checkout
                    </Title>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div variants={itemVariants} className="mb-8">
                            <Steps
                                current={currentStep}
                                items={steps.map(item => ({
                                    title: item.title,
                                    icon: item.icon,
                                }))}
                                className="checkout-steps"
                            />
                        </motion.div>

                        <Row gutter={[32, 32]}>
                            <Col xs={24} lg={16}>
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl shadow-md border border-amber-100 perspective-1000"
                                >
                                    <Form
                                        form={form}
                                        name="checkout"
                                        onFinish={onFinish}
                                        layout="vertical"
                                        initialValues={{
                                            paymentMethod: 'credit-card',
                                        }}
                                    >
                                        {steps[currentStep].content}

                                        <div className="flex justify-between mt-8">
                                            {currentStep > 0 && (
                                                <Button
                                                    onClick={prevStep}
                                                    size="large"
                                                    className="border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50"
                                                >
                                                    Back
                                                </Button>
                                            )}

                                            {currentStep < steps.length - 1 && (
                                                <Button
                                                    onClick={nextStep}
                                                    type="primary"
                                                    size="large"
                                                    className="ml-auto bg-gradient-to-r from-amber-500 to-amber-600 border-none rounded-lg shadow-md hover:shadow-amber-300/50"
                                                >
                                                    Continue
                                                </Button>
                                            )}

                                            {currentStep === steps.length - 1 && (
                                                <motion.div
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="ml-auto"
                                                >
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        size="large"
                                                        className="bg-gradient-to-r from-amber-500 to-amber-600 border-none rounded-lg shadow-md hover:shadow-amber-300/50 animated-gradient"
                                                    >
                                                        Place Order
                                                    </Button>
                                                </motion.div>
                                            )}
                                        </div>
                                    </Form>
                                </motion.div>
                            </Col>

                            <Col xs={24} lg={8}>
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl shadow-md border border-amber-100 sticky top-24"
                                >
                                    <Title level={4} className="mb-6 text-amber-800">Order Summary</Title>

                                    <div className="max-h-60 overflow-y-auto mb-4 pr-2 checkout-items-scroll">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex justify-between items-center py-3 border-b border-amber-100 last:border-0">
                                                <div className="flex items-center">
                                                    <div className="relative w-12 h-12 mr-3 perspective-1000">
                                                        <img
                                                            src={item.image || "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9pbHxlbnwwfHwwfHx8MA%3D%3D"}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover rounded-md product-image-mini"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-sm">{item.name}</div>
                                                        <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                                                    </div>
                                                </div>
                                                <div className="font-semibold text-amber-700">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Divider className="my-4 border-amber-100" />

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Shipping</span>
                                            <span>${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Tax</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <Divider className="my-4 border-amber-100" />

                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-semibold text-lg">Total</span>
                                        <span className="font-bold text-xl text-amber-700">${grandTotal.toFixed(2)}</span>
                                    </div>

                                    <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                                        <SafetyOutlined className="text-lg text-amber-500 mr-2" />
                                        <span className="text-xs text-amber-700">Secure checkout powered by industry-leading encryption</span>
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </div>
                </motion.div>
            </div>

            {/* Custom styles for the checkout page */}
            <style jsx>{`
                .checkout-steps .ant-steps-item-process .ant-steps-item-icon {
                    background-color: #f59e0b;
                    border-color: #f59e0b;
                }
                
                .checkout-steps .ant-steps-item-finish .ant-steps-item-icon {
                    background-color: #fff;
                    border-color: #f59e0b;
                }
                
                .checkout-steps .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
                    color: #f59e0b;
                }
                
                .checkout-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
                    background-color: #f59e0b;
                }
                
                .checkout-items-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                
                .checkout-items-scroll::-webkit-scrollbar-track {
                    background: #fef3c7;
                    border-radius: 10px;
                }
                
                .checkout-items-scroll::-webkit-scrollbar-thumb {
                    background: #f59e0b;
                    border-radius: 10px;
                }
                
                .product-image-mini {
                    transition: transform 0.3s ease;
                }
                
                .product-image-mini:hover {
                    transform: scale(1.1) rotateY(10deg);
                }
                
                .animated-gradient {
                    background-size: 200% 200%;
                    animation: gradientShift 3s ease infinite;
                }
                
                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Checkout;