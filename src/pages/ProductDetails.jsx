"use client"
import { useParams } from "react-router-dom"
import { Typography, Button, Row, Col, Image } from "antd"
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
        longDescription:
            "Our premium groundnut oil is cold-pressed to preserve its natural nutrients and rich flavor. Perfect for cooking, frying, and as a flavor enhancer in various dishes.",
    },
    {
        id: 2,
        name: "Coconut Oil",
        price: 24.99,
        description: "Virgin cold-pressed coconut oil for cooking and beauty",
        image: "https://picsum.photos/seed/coconut/400/400",
        longDescription:
            "Our virgin coconut oil is cold-pressed from fresh coconuts, retaining all its natural benefits. It's versatile for cooking, baking, and even as a natural beauty product.",
    },
    {
        id: 3,
        name: "Mustard Oil",
        price: 19.99,
        description: "Traditional cold-pressed mustard oil with intense aroma",
        image: "https://picsum.photos/seed/mustard/400/400",
        longDescription:
            "Our cold-pressed mustard oil offers a pungent flavor and numerous health benefits. It's a staple in Indian and Bengali cuisine, known for its distinctive taste and aroma.",
    },
    {
        id: 4,
        name: "Sesame Oil",
        price: 34.99,
        description: "Aromatic cold-pressed sesame oil for authentic Asian cuisine",
        image: "https://picsum.photos/seed/sesame/400/400",
        longDescription:
            "Our cold-pressed sesame oil is rich in flavor and aroma, perfect for adding authentic taste to Asian dishes. It's also great for marinades and dressings.",
    },
    {
        id: 5,
        name: "Sunflower Oil",
        price: 22.99,
        description: "Light and healthy cold-pressed sunflower oil",
        image: "https://picsum.photos/seed/sunflower/400/400",
        longDescription:
            "Our cold-pressed sunflower oil is light, healthy, and versatile. It's perfect for everyday cooking and is rich in Vitamin E and heart-healthy fats.",
    },
    {
        id: 6,
        name: "Almond Oil",
        price: 39.99,
        description: "Luxurious cold-pressed almond oil for culinary and cosmetic use",
        image: "https://picsum.photos/seed/almond/400/400",
        longDescription:
            "Our cold-pressed almond oil is a luxurious, multipurpose oil. Use it in cooking for a subtle nutty flavor, or as a natural moisturizer for skin and hair.",
    },
]

function ProductDetails() {
    const { id } = useParams()
    // const { addToCart } = useCart()
    const product = products.find((p) => p.id === Number.parseInt(id))

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Row gutter={[48, 24]}>
                    <Col xs={24} md={12}>
                        <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width="100%"
                            height="auto"
                            className="rounded-lg shadow-lg"
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Title level={1}>{product.name}</Title>
                        <Title level={3} className="text-amber-700">
                            ${product.price}
                        </Title>
                        <Paragraph className="text-lg mb-8">{product.description}</Paragraph>
                        <Paragraph className="mb-8">{product.longDescription}</Paragraph>
                        <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={() => addToCart(product)}>
                            Add to Cart
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetails

