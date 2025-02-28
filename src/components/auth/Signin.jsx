import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaEnvelope, FaSignInAlt, FaPhone } from 'react-icons/fa';
import "./auth.css"

const SignIn = ({ onTogglePage }) => {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login with:', { phone: formData.phone, password: formData.password });
        // Handle login logic here
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="w-full h-screen mt-32 max-w-4xl m-auto txt-clr">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Decorative */}
                <motion.div
                    className="hidden md:flex flex-col items-center justify-center p-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-full h-full rounded-full border-2 border-gold-400 border-opacity-30"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-3/4 h-3/4 rounded-full border-2 border-gold-300 border-opacity-40"></div>
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="text-6xl gold-text font-bold floating"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Login
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold gold-text mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-400 max-w-xs mx-auto">
                            Sign in to access your account and continue your shopping journey.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right side - Form */}
                <motion.div
                    className="bg-gray-800 p-8 rounded-2xl shadow-xl gold-border perspective-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Welcome Back</h2>
                            <p className="text-gray-400">Sign in to continue shopping</p>
                        </motion.div>

                        <form onSubmit={handleSubmit}>
                            <motion.div variants={itemVariants} className="mb-6 relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                    <FaPhone />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="           Phone Number"
                                    className="input-field pl-10"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-6 relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                    <FaLock />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="           Password"
                                    className="input-field pl-10"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-4 text-right">
                                <a href="#" className="text-gold-300 hover:text-gold-200 text-sm">Forgot Password?</a>
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                className="gold-button w-full flex items-center justify-center gap-2"
                            >
                                <span>Sign In</span>
                                <FaSignInAlt />
                            </motion.button>
                        </form>

                        {/* Toggle to signup */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-400">
                                Don't have an account?
                                <button
                                    type="button"
                                    onClick={onTogglePage}
                                    className="ml-2 text-gold-300 hover:text-gold-200 font-medium"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignIn;