"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cards } from "@/data/testimonial_cards.json";
const MovingCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">
                Hear our harmony: voices of success
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <InfiniteMovingCards
                        items={cards}
                        speed="slow"
                        direction="right"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovingCards;
