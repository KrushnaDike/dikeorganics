import { Link } from "react-router-dom"
import { Card, Button } from "antd"

const { Meta } = Card

const products = [
    {
        id: 1,
        name: "Groundnut Oil",
        description: "Pure cold-pressed groundnut oil with rich, nutty flavor",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 29.99,
    },
    {
        id: 2,
        name: "Coconut Oil",
        description: "Virgin cold-pressed coconut oil for cooking and beauty",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 24.99,
    },
    {
        id: 3,
        name: "Mustard Oil",
        description: "Traditional cold-pressed mustard oil with intense aroma",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BcSFnv1bXOF0Af4ImlhQJhGXT3NhP.png",
        price: 19.99,
    },
]

function ProductShowcase() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            hoverable
                            cover={
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            }
                            actions={[
                                <Link key="view" to={`/products/${product.id}`}>
                                    <Button type="primary">View Details</Button>
                                </Link>,
                            ]}
                        >
                            <Meta
                                title={
                                    <div className="flex justify-between">
                                        <span>{product.name}</span>
                                        <span className="text-amber-700">${product.price}</span>
                                    </div>
                                }
                                description={product.description}
                            />
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/products">
                        <Button size="large">View All Products</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase

