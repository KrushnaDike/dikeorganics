import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Priya Patil',
        role: 'Home Chef & Food Blogger',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        content: 'मी गेल्या 15 वर्षांपासून घाणी तेल वापरत आहे. त्याचा दर्जा आणि चव अतुलनीय आहे. Cold Pressed ची तेले नैसर्गिक आणि शुद्ध आहेत.',
        translation: 'I\'ve been using Ghani oil for 15 years. Its quality and taste are incomparable. Cold Pressed oils are natural and pure.',
        rating: 5
    },
    {
        name: 'Madhuri Joshi',
        role: 'Wellness Coach & Nutritionist',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=200',
        content: 'माझ्या क्लायंट्सना मी नेहमी Cold Pressed चे तेल वापरण्याचा सल्ला देते. त्यांच्या आरोग्यात लक्षणीय सुधारणा दिसून आली आहे.',
        translation: 'I always recommend Cold Pressed oils to my clients. They have noticed significant improvements in their health.',
        rating: 5
    },
    {
        name: 'Anjali Kulkarni',
        role: 'Ayurvedic Practitioner',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
        content: 'आयुर्वेदिक दृष्टीने, कोल्ड प्रेस्ड तेल सर्वोत्तम आहे. Cold Pressed चे तेल औषधी गुणधर्मांनी समृद्ध आहे.',
        translation: 'From an Ayurvedic perspective, cold-pressed oil is the best. Cold Pressed oil is rich in medicinal properties.',
        rating: 5
    }
];

function Testimonials() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, type: "spring", stiffness: 50 }
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            {/* Decorative shapes */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear"
                }}
                className="absolute top-40 left-20 w-64 h-64 rounded-full border border-amber-200/20"
                style={{ pointerEvents: 'none' }}
            ></motion.div>

            <motion.div
                animate={{
                    rotate: [360, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 50,
                    ease: "linear"
                }}
                className="absolute bottom-40 right-20 w-80 h-80 rounded-full border border-amber-200/20"
                style={{ pointerEvents: 'none' }}
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">महाराष्ट्रीय ग्राहकांचे अनुभव</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl mb-2 text-amber-700">Testimonials from Maharashtra</p>
                    <p className="text-amber-700/80">
                        Authentic experiences from valued customers using our cold pressed oil across Maharashtra
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="perspective-1000"
                        >
                            <motion.div
                                whileHover={{ rotateY: 5, rotateX: -5 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="h-full bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-amber-100 transition-all duration-500 transform-style-3d relative overflow-hidden"
                            >
                                {/* Decorative quote mark */}
                                <div className="absolute -top-4 -left-4 text-9xl text-amber-100 opacity-50 font-serif">
                                    "
                                </div>

                                <div className="relative">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-gray-800 font-marathi mb-2 relative z-10">{testimonial.content}</p>
                                        <p className="text-gray-600 italic relative z-10">{testimonial.translation}</p>
                                    </div>

                                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-amber-100 relative z-10">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-sm opacity-30"></div>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="relative w-12 h-12 rounded-full object-cover ring-2 ring-amber-100"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-amber-800">{testimonial.name}</h4>
                                            <p className="text-sm text-amber-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-r from-amber-200 to-amber-300 transform rotate-45 translate-x-5 -translate-y-5 opacity-30"></div>
                                </div>

                                {/* Decorative bottom accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/30 to-amber-600/30"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-100 shadow-sm">
                        <p className="text-amber-800 font-medium">
                            Join thousands of satisfied customers who have made our cold-pressed oils a part of their healthy lifestyle.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* CSS for 3D effects */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .font-marathi {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
            `}</style>
        </section>
    );
}

export default Testimonials;