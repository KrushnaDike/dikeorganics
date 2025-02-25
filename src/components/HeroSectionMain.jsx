import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Lottie from "lottie-react";
import oilBottleAnimation from "./oilBottle.json"; 

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center gap-8 py-12">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:leading-[1.1]">
              Premium Organic
              <span className="block bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Cold-Pressed Oils
              </span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Experience the pure, natural goodness of traditionally extracted oils. Healthier. Tastier. Better for you.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button type="primary" size="large">
                  Shop Now
                </Button>
              </Link>
              <Link to="/why-cold-pressed">
                <Button size="large">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* Replacing 3D Canvas with Lottie Animation */}
          <div className="hidden lg:block">
            <div className="h-[500px] w-full flex justify-center">
              <Lottie animationData={oilBottleAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
