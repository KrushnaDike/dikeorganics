import React, { useState, useEffect } from 'react';
import { Droplet, Leaf, Heart, ThermometerSun, Sprout, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
    {
        icon: <Droplet className="w-8 h-8 text-amber-600" />,
        title: "Nutrient Retention",
        description: "Cold-pressing preserves essential nutrients, vitamins, and antioxidants."
    },
    {
        icon: <Leaf className="w-8 h-8 text-amber-600" />,
        title: "No Chemicals",
        description: "Our oils are extracted without using any chemical solvents."
    },
    {
        icon: <Heart className="w-8 h-8 text-amber-600" />,
        title: "Better Taste",
        description: "Cold-pressed oils retain their natural flavors for a richer taste."
    },
    {
        icon: <ThermometerSun className="w-8 h-8 text-amber-600" />,
        title: "Heart Healthy",
        description: "Our process maintains the natural omega fatty acids beneficial for heart health."
    }
];

function WhyColdPressed() {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    // Animation effect for the 3D oil press
    useEffect(() => {
        let animationFrame;

        const animate = () => {
            if (isAnimating) {
                setRotationY(prev => (prev + 0.5) % 360);
                setRotationX(prev => {
                    // Create a gentle rocking motion on the X axis
                    const newValue = prev + Math.sin(Date.now() / 1000) * 0.5;
                    return newValue % 360;
                });
            }
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isAnimating]);

    // Toggle animation
    const toggleAnimation = () => {
        setIsAnimating(prev => !prev);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Why Choose Cold-Pressed Oils?
                </h1>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* 3D-like Oil Press Visualization */}
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md overflow-hidden flex items-center justify-center perspective-800">
                            <div
                                className="w-3/4 h-3/4 relative transition-transform duration-300 ease-out preserve-3d"
                                style={{
                                    transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
                                }}
                            >
                                {/* Front face - traditional wooden oil press */}
                                <div className="absolute inset-0 backface-hidden">
                                    <div className="w-full h-full bg-amber-800 rounded-lg flex flex-col items-center justify-center p-4">
                                        <div className="w-full h-2/3 bg-amber-900 rounded-t-lg relative">
                                            {/* Wooden press details */}
                                            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-700 rounded-lg"></div>
                                            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-amber-600 rounded-lg"></div>

                                            {/* Oil droplets */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                                <div className="w-2 h-2 bg-amber-300 rounded-full mb-1 animate-bounce"></div>
                                                <div className="w-2 h-2 bg-amber-300 rounded-full mb-1 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                            </div>
                                        </div>
                                        <div className="w-full h-1/3 bg-amber-700 rounded-b-lg relative">
                                            {/* Collection basin */}
                                            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-500 rounded-lg">
                                                <div className="absolute inset-0 m-1 bg-amber-300 rounded-lg opacity-70"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back face */}
                                <div
                                    className="absolute inset-0 backface-hidden"
                                    style={{ transform: 'rotateY(180deg)' }}
                                >
                                    <div className="w-full h-full bg-amber-700 rounded-lg flex items-center justify-center p-4">
                                        <div className="text-center text-white">
                                            <h3 className="text-xl font-bold mb-2">Traditional Ghani Method</h3>
                                            <p>Our cold-pressed oils are extracted using time-honored techniques that preserve all natural goodness</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Left face */}
                                <div
                                    className="absolute inset-0 backface-hidden"
                                    style={{ transform: 'rotateY(-90deg) translateZ(150px)' }}
                                >
                                    <div className="w-full h-full bg-amber-600 rounded-lg flex items-center justify-center p-4">
                                        <div className="text-center text-white">
                                            <h3 className="text-xl font-bold mb-2">No Heat Process</h3>
                                            <p>Cold-pressing keeps temperatures below 27°C to preserve nutrients</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right face */}
                                <div
                                    className="absolute inset-0 backface-hidden"
                                    style={{ transform: 'rotateY(90deg) translateZ(150px)' }}
                                >
                                    <div className="w-full h-full bg-amber-600 rounded-lg flex items-center justify-center p-4">
                                        <div className="text-center text-white">
                                            <h3 className="text-xl font-bold mb-2">Pure Extraction</h3>
                                            <p>No chemicals or solvents are used in our extraction process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Animation control */}
                            <button
                                onClick={toggleAnimation}
                                className={`absolute bottom-4 right-4 p-3 rounded-full ${isAnimating ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-amber-500 hover:text-white transition-colors`}
                                title={isAnimating ? "Pause animation" : "Resume animation"}
                            >
                                {isAnimating ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="6" y="4" width="4" height="16"></rect>
                                        <rect x="14" y="4" width="4" height="16"></rect>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col justify-center">
                        <p className="text-lg mb-6">
                            Cold-pressed oils are extracted using a method that maintains low temperatures throughout the process.
                            This gentle approach preserves the oil's natural flavors, aromas, and nutritional benefits, resulting in a
                            superior product compared to oils extracted using high heat or chemical processes.
                        </p>
                        <p className="text-lg mb-6">
                            When you choose cold-pressed oils from Pure Pressed, you're not just selecting a cooking oil – you're
                            choosing a healthier lifestyle. Our oils retain more of their natural color, flavor, and nutritional
                            value, making them perfect for both cooking and as finishing oils for your favorite dishes.
                        </p>
                        <p className="text-lg">
                            Our traditional cold-pressing techniques have been passed down through generations, ensuring that every
                            bottle of oil delivers the authentic taste and health benefits that nature intended.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-8">
                    The Cold-Pressed Difference
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="mb-4 inline-block bg-amber-100 p-3 rounded-lg">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Cold-Pressed vs. Refined Oils
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-amber-50">
                                    <th className="p-4 text-left border-b border-amber-200">Characteristics</th>
                                    <th className="p-4 text-left border-b border-amber-200">Cold-Pressed Oils</th>
                                    <th className="p-4 text-left border-b border-amber-200">Refined Oils</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Extraction Method</td>
                                    <td className="p-4 border-b border-amber-100">Mechanical pressing at low temperatures</td>
                                    <td className="p-4 border-b border-amber-100">Chemical solvents and high heat</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Nutrient Content</td>
                                    <td className="p-4 border-b border-amber-100">High retention of natural nutrients</td>
                                    <td className="p-4 border-b border-amber-100">Significant loss of nutrients</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Flavor</td>
                                    <td className="p-4 border-b border-amber-100">Rich, natural flavor</td>
                                    <td className="p-4 border-b border-amber-100">Neutral, bland taste</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Color</td>
                                    <td className="p-4 border-b border-amber-100">Natural, vibrant color</td>
                                    <td className="p-4 border-b border-amber-100">Pale, colorless</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Processing</td>
                                    <td className="p-4 border-b border-amber-100">Minimal processing</td>
                                    <td className="p-4 border-b border-amber-100">Extensive processing</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Shelf Life</td>
                                    <td className="p-4 border-b border-amber-100">Shorter (6-8 months)</td>
                                    <td className="p-4 border-b border-amber-100">Longer (1-2 years)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-amber-100 font-medium">Health Benefits</td>
                                    <td className="p-4 border-b border-amber-100">Maximum health benefits preserved</td>
                                    <td className="p-4 border-b border-amber-100">Reduced health benefits</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Environmental Impact</td>
                                    <td className="p-4">Lower environmental footprint</td>
                                    <td className="p-4">Higher environmental impact</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Traditional Methods Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="order-2 md:order-1">
                        <h2 className="text-2xl font-bold mb-6">Traditional Extraction Methods</h2>
                        <p className="text-lg mb-4">
                            In Maharashtra, cold-pressed oils have been produced for centuries using traditional wooden presses called "Ghani."
                            This time-honored method involves crushing seeds or nuts between wooden or stone grinders to extract oil without
                            generating excessive heat.
                        </p>
                        <p className="text-lg mb-4">
                            The slow, gentle rotation of the Ghani ensures that temperatures remain low throughout the extraction process,
                            preserving the oil's natural properties. This method stands in stark contrast to modern industrial processes
                            that use chemical solvents and high heat.
                        </p>
                        <p className="text-lg mb-6">
                            At Pure Pressed, we honor these traditional methods while incorporating modern standards of hygiene and quality control.
                            The result is an authentic, pure oil that connects you to centuries of culinary tradition.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="bg-amber-50 px-4 py-2 rounded-full text-amber-800 font-medium">
                                <Sprout className="inline-block w-5 h-5 mr-2" />
                                Sustainable
                            </div>
                            <div className="bg-amber-50 px-4 py-2 rounded-full text-amber-800 font-medium">
                                <Shield className="inline-block w-5 h-5 mr-2" />
                                Authentic
                            </div>
                            <div className="bg-amber-50 px-4 py-2 rounded-full text-amber-800 font-medium">
                                <Heart className="inline-block w-5 h-5 mr-2" />
                                Nutritious
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1605493725784-56d8e6c8f836?auto=format&fit=crop&q=80&w=1000"
                                alt="Traditional oil extraction"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Health Benefits Section */}
                <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl p-8 mb-16">
                    <h2 className="text-2xl font-bold text-center mb-8">Health Benefits of Cold-Pressed Oils</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Heart className="w-6 h-6 text-amber-600 mr-2" />
                                Heart Health
                            </h3>
                            <p className="text-gray-700">
                                Cold-pressed oils retain their natural omega-3 and omega-6 fatty acids, which can help reduce bad cholesterol
                                levels and improve heart health.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Shield className="w-6 h-6 text-amber-600 mr-2" />
                                Antioxidant Properties
                            </h3>
                            <p className="text-gray-700">
                                The gentle extraction process preserves natural antioxidants that help fight free radicals and reduce
                                oxidative stress in the body.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Sprout className="w-6 h-6 text-amber-600 mr-2" />
                                Nutrient Absorption
                            </h3>
                            <p className="text-gray-700">
                                Cold-pressed oils help your body absorb fat-soluble vitamins (A, D, E, and K) from other foods, enhancing
                                the nutritional value of your entire meal.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Leaf className="w-6 h-6 text-amber-600 mr-2" />
                                Anti-inflammatory
                            </h3>
                            <p className="text-gray-700">
                                Many cold-pressed oils contain compounds with anti-inflammatory properties that may help reduce chronic
                                inflammation in the body.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <ThermometerSun className="w-6 h-6 text-amber-600 mr-2" />
                                Digestive Health
                            </h3>
                            <p className="text-gray-700">
                                The natural properties of cold-pressed oils can support digestive health and help maintain a balanced gut microbiome.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Droplet className="w-6 h-6 text-amber-600 mr-2" />
                                Skin & Hair Benefits
                            </h3>
                            <p className="text-gray-700">
                                The nutrients in cold-pressed oils nourish skin and hair when used topically, promoting natural beauty from the outside in.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Experience the Pure Pressed Difference</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                        Ready to transform your cooking and health with premium cold-pressed oils? Explore our collection of
                        traditionally extracted oils and taste the difference that proper extraction makes.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-lg font-medium"
                    >
                        Shop Our Collection
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="border-b border-amber-100 pb-6">
                            <h3 className="text-xl font-semibold mb-2">What makes an oil "cold-pressed"?</h3>
                            <p className="text-gray-700">
                                Cold-pressed oils are extracted using mechanical pressure without applying external heat. The temperature
                                during extraction typically stays below 27°C (80°F), preserving the oil's natural properties.
                            </p>
                        </div>

                        <div className="border-b border-amber-100 pb-6">
                            <h3 className="text-xl font-semibold mb-2">How should I store cold-pressed oils?</h3>
                            <p className="text-gray-700">
                                Store cold-pressed oils in a cool, dark place away from direct sunlight and heat sources. For best quality,
                                use within 6-8 months of opening. Some oils, like flaxseed oil, may benefit from refrigeration.
                            </p>
                        </div>

                        <div className="border-b border-amber-100 pb-6">
                            <h3 className="text-xl font-semibold mb-2">Are cold-pressed oils suitable for high-heat cooking?</h3>
                            <p className="text-gray-700">
                                Some cold-pressed oils have higher smoke points than others. Oils like cold-pressed avocado, mustard, and
                                groundnut oil can handle moderate to high heat, while others like flaxseed and walnut oil are best used for
                                low-heat cooking or as finishing oils.
                            </p>
                        </div>

                        <div className="border-b border-amber-100 pb-6">
                            <h3 className="text-xl font-semibold mb-2">Why do cold-pressed oils cost more than refined oils?</h3>
                            <p className="text-gray-700">
                                Cold-pressing is a time-intensive process that yields less oil per batch compared to industrial extraction
                                methods. The higher quality, better nutritional profile, and traditional production methods justify the
                                premium price.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">How can I tell if my oil is truly cold-pressed?</h3>
                            <p className="text-gray-700">
                                Authentic cold-pressed oils typically have a rich color, distinctive aroma, and natural flavor characteristic
                                of their source. At Pure Pressed, we provide detailed information about our extraction methods and quality
                                control processes to ensure transparency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyColdPressed;