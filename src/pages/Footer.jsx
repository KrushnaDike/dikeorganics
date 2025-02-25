import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-amber-900 text-amber-50">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Dike Organics</h3>
                        <p className="text-amber-200 mb-4">
                            Delivering premium quality cold-pressed oils straight from nature to your kitchen.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" className="hover:text-amber-300 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-amber-300 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com" className="hover:text-amber-300 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/products" className="hover:text-amber-300 transition-colors">
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-amber-300 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/why-cold-pressed" className="hover:text-amber-300 transition-colors">
                                    Why Cold-Pressed?
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-amber-300 transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                <a href="mailto:info@purepressed.com" className="hover:text-amber-300 transition-colors">
                                    info@purepressed.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1" />
                                <span>123 Nature Valley,<br />Organic City, OC 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-amber-200 mb-4">
                            Subscribe to get updates on new products and special offers.
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 focus:outline-none focus:border-amber-500 text-amber-50 placeholder-amber-300"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-500 transition-colors rounded font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-amber-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-amber-300">
                            © {new Date().getFullYear()} Dike Organics. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-amber-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-amber-300 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer