"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import data from "@/data/why_choose_us.json";
const WhyChooseUs = () => {
    return (
        <div className="w-full">
            <StickyScroll content={data.items} />
        </div>
    );
};

export default WhyChooseUs;
