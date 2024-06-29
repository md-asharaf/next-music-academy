"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { items } from "@/data/why_choose_us.json";
const WhyChooseUs = () => {
    return (
        <div className="w-full">
            <StickyScroll content={items} />
        </div>
    );
};

export default WhyChooseUs;
