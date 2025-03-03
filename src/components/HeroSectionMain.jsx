import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import oilBottleAnimation from "./oilBottle.json";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,226,130,0.2)_0%,rgba(255,226,130,0)_50%)] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%)] pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/20 to-amber-300/10 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100/20 to-amber-200/10 blur-3xl animate-float pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center gap-8 py-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-bold leading-tight md:text-6xl lg:leading-[1.1]"
            >
              Premium Organic
              <span className="relative block">
                <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Cold-Pressed Oils
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 md:text-xl"
            >
              Experience the pure, natural goodness of traditionally extracted oils.
              Healthier. Tastier. Better for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4"
            >
              <Link to="/products">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="primary"
                    size="large"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 border-none shadow-md hover:shadow-amber-300/50 h-12 px-8"
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </Link>
              <Link to="/why-cold-pressed">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="large"
                    className="border-amber-500 text-amber-600 hover:text-amber-700 hover:border-amber-600 h-12 px-8"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {["100% Organic", "No Chemicals", "Traditional Process", "Rich in Nutrients"].map((badge, index) => (
                <motion.span
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(251, 191, 36, 0.2)" }}
                  className="px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-medium border border-amber-200 shadow-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Lottie Animation with 3D effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="hidden lg:flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full h-[500px] transform-style-3d">
              {/* Floating oil drops */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 shadow-lg opacity-80 z-10"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg opacity-70 z-10"
              ></motion.div>

              {/* Main animation with 3D effect */}
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-full h-full flex justify-center items-center"
              >
                <div className="relative w-[350px] h-[350px] rounded-full bg-gradient-to-br from-amber-100 to-amber-200 shadow-xl flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100/50 to-amber-200/50 blur-md"></div>
                  <div className="relative z-10 w-[300px] h-[300px]">
                    <Lottie
                      animationData={oilBottleAnimation}
                      loop={true}
                      className="w-full h-full drop-shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles for 3D effects */}
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
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;