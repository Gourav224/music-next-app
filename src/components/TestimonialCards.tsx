"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
        quote: "Joining this music school was a game-changer for me. The guidance I received helped me find my unique sound and improve my guitar skills dramatically. The instructors are top-notch!",
        name: "Alex Johnson",
        title: "Guitar Student",
    },
    {
        quote: "The support and community here are unparalleled. Not only have I become a better pianist, but I've also grown as a performer, thanks to their holistic teaching approach.",
        name: "Samantha Lee",
        title: "Piano Student",
    },
    {
        quote: "This school provided me with the tools and confidence to elevate my singing. The personalized coaching has been invaluable. I'm forever grateful.",
        name: "Michael Chen",
        title: "Vocal Student",
    },
    {
        quote: "As a violinist, finding the right mentor is crucial. This school paired me with a teacher who truly understands my aspirations and challenges. It's been an incredible experience.",
        name: "Emily Taylor",
        title: "Violin Student",
    },
    {
        quote: "The music production courses here opened my eyes to the complexities of the field. I highly recommend this school to anyone aspiring to become a producer!",
        name: "Chris Morales",
        title: "Music Production Student",
    },
];

const TestimonialCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.3]  relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">
                Hear our Harmony: Voices of success
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCards;
