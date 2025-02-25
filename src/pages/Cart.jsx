import { Link } from "react-router-dom"
import { Typography, Table, Button, InputNumber } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useCart } from "../contexts/CartContext"

const { Title } = Typography

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart()

    const columns = [
        {
            title: "Product",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price.toFixed(2)}`,
        },
        {
            title: "Quantity",
            key: "quantity",
            render: (_, record) => (
                <InputNumber min={1} value={record.quantity} onChange={(value) => updateQuantity(record.id, value)} />
            ),
        },
        {
            title: "Total",
            key: "total",
            render: (_, record) => `$${(record.price * record.quantity).toFixed(2)}`,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeFromCart(record.id)}>
                    Remove
                </Button>
            ),
        },
    ]

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    Your Cart
                </Title>
                {cart.length > 0 ? (
                    <>
                        <Table dataSource={cart} columns={columns} rowKey="id" pagination={false} />
                        <div className="mt-8 text-right">
                            <Title level={3}>Total: ${total.toFixed(2)}</Title>
                            <Link to="/checkout">
                                <Button type="primary" size="large">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <Title level={3}>Your cart is empty</Title>
                        <Link to="/products">
                            <Button type="primary" size="large">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart

