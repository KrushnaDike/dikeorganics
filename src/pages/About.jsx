import { Typography, Row, Col, Card, Avatar } from "antd"

const { Title, Paragraph } = Typography

const teamMembers = [
    { name: "Krushna Dike", role: "Founder", image: "/founder.jpg" },
    { name: "Sanket Dike", role: "CEO", image: "/ceo.jpeg" },
    { name: "Arvind Dike", role: "Co-Founder", image: "/cofounder.jpeg" },
]

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24">
            <div className="container mx-auto px-4">
                <Title level={1} className="text-center mb-12">
                    About Dike Organics
                </Title>
                <Paragraph className="text-lg mb-8">
                    Dike Organics was founded with a passion for bringing the purest, most nutritious oils to your table. Our
                    journey began in the heart of organic farms, where we discovered the incredible difference that cold-pressing
                    makes in preserving the natural goodness of oils.
                </Paragraph>
                <Paragraph className="text-lg mb-12">
                    Today, we're proud to offer a range of premium cold-pressed oils that not only enhance your culinary
                    experiences but also contribute to your overall well-being. Our commitment to quality, sustainability, and
                    health drives everything we do.
                </Paragraph>
                <Title level={2} className="text-center mb-8">
                    Meet Our Team
                </Title>
                <Row gutter={[24, 24]} className="mb-12">
                    {teamMembers.map((member, index) => (
                        <Col xs={24} sm={8} key={index}>
                            <Card className="text-center">
                                <Avatar src={member.image} size={200} className="mb-4" />
                                <Title level={4}>{member.name}</Title>
                                <Paragraph className="text-amber-700">{member.role}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default About

