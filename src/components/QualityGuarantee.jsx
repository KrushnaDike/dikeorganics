import React from 'react';
import { Award, Leaf, ShieldCheck, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
        title: '100% Pure & Natural',
        description: 'No additives, no chemicals, just pure cold-pressed goodness from nature'
    },
    {
        icon: <Award className="w-8 h-8 text-amber-600" />,
        title: 'Quality Certified',
        description: 'Meeting the highest standards of quality and safety in the industry'
    },
    {
        icon: <Leaf className="w-8 h-8 text-amber-600" />,
        title: 'Organic Sourced',
        description: 'Made from carefully selected organic ingredients from trusted farmers'
    },
    {
        icon: <Droplets className="w-8 h-8 text-amber-600" />,
        title: 'Fresh Pressed',
        description: 'Small batch processing ensures maximum freshness and quality'
    }
];

function QualityGuarantee() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-amber-100/30 to-amber-50/50"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.15)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.15)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

            {/* Decorative shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-4 border-amber-200/20 transform rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border-4 border-amber-200/20 transform -rotate-12"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Our Quality Guarantee</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-amber-700/80">
                        We take pride in delivering the highest quality cold-pressed oils,
                        backed by our commitment to excellence and purity.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {guarantees.map((item, index) => (
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
                                className="h-full bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-amber-100 transition-all duration-500 transform-style-3d"
                            >
                                <div className="mb-6 relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-sm opacity-30"></div>
                                    <div className="relative bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg inline-block">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-800">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-amber-200 to-amber-300 transform rotate-45 translate-x-4 -translate-y-4 opacity-50"></div>
                                </div>
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
                    <div className="inline-block max-w-2xl mx-auto">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-sm opacity-30"></div>
                            <div className="relative p-6 bg-white rounded-xl border border-amber-100">
                                <p className="text-amber-800 font-medium">
                                    "Our commitment to quality is unwavering. We believe in transparency and integrity in every step of our process."
                                </p>
                                <p className="mt-2 text-amber-600 font-semibold">— Founder, Dike Organics</p>
                            </div>
                        </div>
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
            `}</style>
        </section>
    );
}

export default QualityGuarantee;