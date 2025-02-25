import { Link } from "react-router-dom"
import { Card, Button, Row, Col, Typography } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
// import { useCart } from "../contexts/CartContext"

const { Title, Paragraph } = Typography

const products = [
    {
        id: 1,
        name: "Groundnut Oil",
        price: 29.99,
        description: "Pure cold-pressed groundnut oil with rich, nutty flavor",
        image: "https://picsum.photos/seed/groundnut/400/400",
    },
    {
        id: 2,
        name: "Coconut Oil",
        price: 24.99,
        description: "Virgin cold-pressed coconut oil for cooking and beauty",
        image: "https://picsum.photos/seed/coconut/400/400",
    },
    {
        id: 3,
        name: "Mustard Oil",
        price: 19.99,
        description: "Traditional cold-pressed mustard oil with intense aroma",
        image: "https://picsum.photos/seed/mustard/400/400",
    },
    {
        id: 4,
        name: "Sesame Oil",
        price: 34.99,
        description: "Aromatic cold-pressed sesame oil for authentic Asian cuisine",
        image: "https://picsum.photos/seed/sesame/400/400",
    },
    {
        id: 5,
        name: "Sunflower Oil",
        price: 22.99,
        description: "Light and healthy cold-pressed sunflower oil",
        image: "https://picsum.photos/seed/sunflower/400/400",
    },
    {
        id: 6,
        name: "Almond Oil",
        price: 39.99,
        description: "Luxurious cold-pressed almond oil for culinary and cosmetic use",
        image: "https://picsum.photos/seed/almond/400/400",
    },
]

function Products() {
    // const { addToCart } = useCart()

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
                                    <Button key="add" type="primary" icon={<ShoppingCartOutlined />} onClick={() => addToCart(product)}>
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

