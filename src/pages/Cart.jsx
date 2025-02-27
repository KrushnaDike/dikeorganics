import { Link } from "react-router-dom";
import { Typography, Table, Button, InputNumber, Image } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions";

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

    const columns = [
        {
            title: "Product",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                        src={record.image}
                        alt={text}
                        width={50}
                        height={50}
                        style={{ objectFit: "cover", marginRight: 16 }}
                    />
                    {text}
                </div>
            ),
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
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                        icon={<MinusOutlined />}
                        onClick={() => decrementQuantity(record.id, record.quantity)}
                    />
                    <InputNumber
                        min={1}
                        value={record.quantity}
                        onChange={(value) => handleQuantityChange(record.id, value)}
                        style={{ margin: "0 8px" }}
                    />
                    <Button
                        icon={<PlusOutlined />}
                        onClick={() => incrementQuantity(record.id, record.quantity)}
                    />
                </div>
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
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => dispatch(removeFromCart(record.id))}
                >
                    Remove
                </Button>
            ),
        },
    ];

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    Your Cart
                </Title>
                {cart.items.length > 0 ? (
                    <>
                        <Table
                            dataSource={cart.items}
                            columns={columns}
                            rowKey="id"
                            pagination={false}
                        />
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
    );
}

export default Cart;
