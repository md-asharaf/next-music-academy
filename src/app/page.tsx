import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Hero />
            <FeaturedCourses />
            <WhyChooseUs />
            <MovingCards />
            <UpcomingWebinars />
            <Instructors />
        </main>
    );
}
