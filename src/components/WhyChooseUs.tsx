"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
    const content = [
        {
            title: "Experienced Instructors",
            description:
                "Our instructors are highly qualified professionals with years of experience in both teaching and performing.",
        },
        {
            title: "Diverse Instrument Options",
            description:
                "We offer lessons for a wide range of instruments, including piano, guitar, violin, drums, and more.",
        },
        {
            title: "Flexible Scheduling",
            description:
                "We understand that our students have busy lives, so we offer flexible scheduling options to fit your needs.",
        },
        {
            title: "Affordable Rates",
            description:
                "We provide top-quality music education at competitive and affordable rates.",
        },
        {
            title: "Performance Opportunities",
            description:
                "Students have regular opportunities to perform in recitals, competitions, and community events.",
        },
        {
            title: "Modern Facilities",
            description:
                "Our school is equipped with modern facilities and the latest technology to enhance your learning experience.",
        },
        {
            title: "Customized Learning Plans",
            description:
                "Each student receives a customized learning plan tailored to their individual needs and goals.",
        },
    ];

    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
};

export default WhyChooseUs;
