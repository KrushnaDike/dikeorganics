import HeroSection from "../components/HeroSectionMain"
import ProductShowcase from "../components/ProductShowcaseMain"
import ColdPressedBenefits from "../components/ColdPressedBenefitsMain"
import QualityGuarantee from "../components/QualityGuarantee"
import Testimonials from "../components/Testimonials"

function Home() {
    return (
        <>
            <HeroSection />
            <ProductShowcase />
            <ColdPressedBenefits />
            <QualityGuarantee />
            <Testimonials />
        </>
    )
}

export default Home

