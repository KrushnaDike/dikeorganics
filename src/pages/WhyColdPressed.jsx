import { Typography, Row, Col, Card, Image } from "antd"

const { Title, Paragraph } = Typography

const benefits = [
  {
    title: "Nutrient Retention",
    description: "Cold-pressing preserves essential nutrients, vitamins, and antioxidants.",
  },
  { title: "No Chemicals", description: "Our oils are extracted without using any chemical solvents." },
  { title: "Better Taste", description: "Cold-pressed oils retain their natural flavors for a richer taste." },
  {
    title: "Heart Healthy",
    description: "Our process maintains the natural omega fatty acids beneficial for heart health.",
  },
]

function WhyColdPressed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-12">
          Why Choose Cold-Pressed Oils?
        </Title>
        <Row gutter={[48, 24]} className="mb-12">
          <Col xs={24} md={12}>
            <Image
              src="https://picsum.photos/seed/oilpress/800/600"
              alt="Cold-pressed oil extraction"
              width="100%"
              height="auto"
              className="rounded-lg shadow-lg"
            />
          </Col>
          <Col xs={24} md={12}>
            <Paragraph className="text-lg mb-6">
              Cold-pressed oils are extracted using a method that maintains low temperatures throughout the process.
              This gentle approach preserves the oil's natural flavors, aromas, and nutritional benefits, resulting in a
              superior product compared to oils extracted using high heat or chemical processes.
            </Paragraph>
            <Paragraph className="text-lg">
              When you choose cold-pressed oils from Dike Organics, you're not just selecting a cooking oil – you're
              choosing a healthier lifestyle. Our oils retain more of their natural color, flavor, and nutritional
              value, making them perfect for both cooking and as finishing oils for your favorite dishes.
            </Paragraph>
          </Col>
        </Row>
        <Title level={2} className="text-center mb-8">
          The Cold-Pressed Difference
        </Title>
        <Row gutter={[24, 24]} className="mb-12">
          {benefits.map((benefit, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card hoverable className="h-full">
                <Title level={4} className="mb-4">
                  {benefit.title}
                </Title>
                <Paragraph>{benefit.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default WhyColdPressed

