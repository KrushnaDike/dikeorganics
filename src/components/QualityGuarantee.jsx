import React from 'react';
import { Award, Leaf, ShieldCheck, Droplets } from 'lucide-react';

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
    return (
        <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Quality Guarantee</h2>
                    <p className="text-gray-600">
                        We take pride in delivering the highest quality cold-pressed oils,
                        backed by our commitment to excellence and purity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guarantees.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-4 inline-block bg-amber-100 p-3 rounded-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QualityGuarantee;