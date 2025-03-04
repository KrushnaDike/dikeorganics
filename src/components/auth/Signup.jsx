import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaHome, FaPhone, FaCreditCard, FaArrowRight, FaArrowLeft, FaUserPlus } from 'react-icons/fa';

const SignUp = ({ onTogglePage }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        otp: ['', '', '', ''],
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    });

    // Refs for OTP inputs
    const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const totalSteps = 5;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle OTP input
    const handleOtpChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d*$/.test(value)) return;

        const newOtp = [...formData.otp];
        newOtp[index] = value;

        setFormData(prev => ({
            ...prev,
            otp: newOtp
        }));

        // Auto-focus next input if value is entered
        if (value && index < 3) {
            otpRefs[index + 1].current.focus();
        }
    };

    // Handle backspace in OTP inputs
    const handleOtpKeyDown = (index, e) => {
        // If backspace is pressed and current field is empty, focus previous field
        if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
            otpRefs[index - 1].current.focus();
        }
    };

    // Handle pasting OTP
    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');

        // Check if pasted content is a 4-digit number
        if (/^\d{4}$/.test(pastedData)) {
            const digits = pastedData.split('');
            const newOtp = [...formData.otp];

            digits.forEach((digit, index) => {
                if (index < 4) {
                    newOtp[index] = digit;
                }
            });

            setFormData(prev => ({
                ...prev,
                otp: newOtp
            }));

            // Focus the last input
            otpRefs[3].current.focus();
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentStep === totalSteps - 1) {
            // Combine OTP digits into a single string for submission
            const otpString = formData.otp.join('');
            const submissionData = {
                ...formData,
                otp: otpString
            };
            console.log('Register with:', submissionData);
            // Handle registration logic here
        } else {
            nextStep();
        }
    };

    // Simulate sending OTP
    const sendOTP = () => {
        console.log('Sending OTP to:', formData.mobileNumber);
        // In a real app, you would call an API to send OTP
        alert(`OTP sent to ${formData.mobileNumber}`);

        // Focus the first OTP input after sending
        if (otpRefs[0].current) {
            otpRefs[0].current.focus();
        }
    };

    // Focus first OTP input when reaching the OTP step
    useEffect(() => {
        if (currentStep === 1 && otpRefs[0].current) {
            setTimeout(() => {
                otpRefs[0].current.focus();
            }, 300);
        }
    }, [currentStep]);

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

    const renderSignupStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <motion.div
                        className="w-full mt-32"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key="step1"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Create Account</h2>
                            <p className="text-gray-300">Step 1: Mobile Number & Password</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaPhone />
                            </div>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="           Mobile Number"
                                className="input-field pl-10 w-full"
                                required
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
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

                        <motion.div variants={itemVariants} className="mb-6 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaLock />
                            </div>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="           Confirm Password"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>
                    </motion.div>
                );
            case 1:
                return (
                    <motion.div
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key="step2"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Verify Your Number</h2>
                            <p className="text-gray-300">Step 2: Enter the OTP sent to your mobile</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gold-300 text-sm">OTP sent to: {formData.mobileNumber}</span>
                                <button
                                    type="button"
                                    onClick={sendOTP}
                                    className="text-gold-300 hover:text-gold-200 text-sm underline"
                                >
                                    Resend OTP
                                </button>
                            </div>

                            {/* Modern OTP Input with 4 separate boxes */}
                            <div className="flex justify-center items-center gap-3 my-6">
                                {[0, 1, 2, 3].map((index) => (
                                    <div key={index} className="w-14 h-14 relative">
                                        <input
                                            ref={otpRefs[index]}
                                            type="text"
                                            maxLength={1}
                                            value={formData.otp[index]}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                            onPaste={index === 0 ? handleOtpPaste : undefined}
                                            className="w-full h-full text-center text-2xl font-bold bg-gray-900 border-2 border-gold-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent"
                                        />
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-300 text-sm mt-2">
                                Didn't receive the code? <button onClick={sendOTP} className="text-gold-300 hover:text-gold-200">Resend</button>
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-6 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaEnvelope />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="           Email Address (Optional)"
                                className="input-field pl-10 w-full"
                            />
                        </motion.div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key="step2"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Personal Details</h2>
                            <p className="text-gray-300">Step 2: Tell us about yourself</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="           First Name"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="           Last Name"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key="step3"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Shipping Address</h2>
                            <p className="text-gray-300">Step 3: Where should we deliver?</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaHome />
                            </div>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="           Street Address"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative grid grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="           City"
                                    className="input-field"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    placeholder="           Zip Code"
                                    className="input-field"
                                    required
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-6 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaHome />
                            </div>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="           Country"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key="step4"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <h2 className="text-3xl font-bold gold-text mb-2">Payment Details</h2>
                            <p className="text-gray-300">Step 4: Secure payment information</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaCreditCard />
                            </div>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="           Card Number"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400">
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                                placeholder="           Name on Card"
                                className="input-field pl-10"
                                required
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-6 relative grid grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="           MM/YY"
                                    className="input-field"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    placeholder="           CVV"
                                    className="input-field"
                                    required
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-4xl h-screen mt-32 m-auto txt-clr">
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
                                Join
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
                            Join Our Community
                        </h2>
                        <p className="text-gray-300 max-w-xs mx-auto">
                            Create an account to enjoy exclusive deals and a personalized shopping experience.
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
                    {renderSignupStep()}

                    {/* Progress bar */}
                    <div className="mt-6 mb-4">
                        <div className="flex justify-between text-xs text-gray-300 mb-1">
                            <span>Step {currentStep + 1} of {totalSteps}</span>
                            <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={prevStep}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-all ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={currentStep === 0}
                        >
                            <FaArrowLeft />
                            <span>Back</span>
                        </button>

                        <button
                            type="button"
                            onClick={currentStep === totalSteps - 1 ? handleSubmit : nextStep}
                            className="gold-button flex items-center gap-2"
                        >
                            <span>{currentStep === totalSteps - 1 ? 'Complete' : 'Next'}</span>
                            {currentStep === totalSteps - 1 ? <FaUserPlus /> : <FaArrowRight />}
                        </button>
                    </div>

                    {/* Toggle to signin */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-200">
                            Already have an account?
                            <button
                                type="button"
                                onClick={onTogglePage}
                                className="ml-2 text-gold-300 hover:text-gold-200 font-medium"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignUp;