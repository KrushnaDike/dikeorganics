import { Link } from "react-router-dom"
import { Card, Button, Row, Col, Typography } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addToCart } from "../redux/actions/cartActions"
import { toast } from 'react-toastify';

const { Title, Paragraph } = Typography

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    Our Premium Cold-Pressed Oils
                </Title>
                <Row gutter={[24, 24]}>
                    {products.map((product) => (
                        <Col xs={24} sm={12} md={8} key={product.id}>
                            <Card
                                hoverable
                                cover={
                                    <img alt={product.name} src={product.image || "/placeholder.svg"} className="h-64 object-cover" />
                                }
                                actions={[
                                    <Button key="add" type="primary" icon={<ShoppingCartOutlined />} onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>,
                                    <Link key="view" to={`/products/${product.id}`}>
                                        <Button>View Details</Button>
                                    </Link>,
                                ]}
                            >
                                <Card.Meta
                                    title={<span className="text-lg font-bold">{product.name}</span>}
                                    description={
                                        <>
                                            <Paragraph className="text-gray-600">{product.description}</Paragraph>
                                            <Paragraph className="text-xl font-semibold text-amber-700">${product.price}</Paragraph>
                                        </>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Products

