import React from 'react';
import { Star } from 'lucide-react';

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
    return (
        <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
                    <h2 className="text-3xl font-bold mb-4">महाराष्ट्रीय ग्राहकांचे अनुभव</h2>
                    <p className="text-xl mb-2">Testimonials from Maharashtra</p>
                    <p className="text-gray-600">
                        Authentic experiences from valued customers cold pressed oil across Maharashtra
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-800 font-marathi mb-2">{testimonial.content}</p>
                                <p className="text-gray-600 italic">{testimonial.translation}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-100"
                                />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;