import { Card, Row, Col } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const benefits = [
    {
        title: "Nutrient Retention",
        description:
            "Cold-pressing preserves essential nutrients, vitamins, and antioxidants that are often destroyed by heat in conventional processing.",
    },
    {
        title: "No Chemicals",
        description: "Our oils are extracted without using any chemical solvents, ensuring you get pure, natural goodness.",
    },
    {
        title: "Better Taste",
        description:
            "Cold-pressed oils retain their natural flavors, providing a richer, more authentic taste to your cooking.",
    },
    {
        title: "Heart Healthy",
        description: "Our process maintains the natural omega fatty acids that are beneficial for heart health.",
    },
]

function ColdPressedBenefits() {
    return (
        <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Cold-Pressed Oils?</h2>
                    <p className="text-lg text-gray-600">
                        Cold-pressed oils are extracted without using heat or chemicals, preserving their natural goodness and
                        nutritional value.
                    </p>
                </div>
                <Row gutter={[24, 24]}>
                    {benefits.map((benefit, index) => (
                        <Col key={index} xs={24} md={12}>
                            <Card>
                                <div className="flex gap-4">
                                    <CheckCircleOutlined className="text-2xl text-green-600" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}

export default ColdPressedBenefits

