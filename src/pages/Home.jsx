import HeroSection from "../components/HeroSectionMain"
import ProductShowcase from "../components/ProductShowcaseMain"
import ColdPressedBenefits from "../components/ColdPressedBenefitsMain"
import QualityGuarantee from "../components/QualityGuarantee"
import Testimonials from "../components/Testimonials"

function Home() {
    return (
        <div className="bg-gradient-to-b from-amber-50 via-white to-amber-50">
            <HeroSection />
            <ProductShowcase />
            <ColdPressedBenefits />
            <QualityGuarantee />
            <Testimonials />
        </div>
    )
}

export default Home

