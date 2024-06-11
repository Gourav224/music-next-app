"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
        title: "Understanding Music Theory",
        description:
            "Explore the foundations of music theory and take your musical knowledge to the next level. Perfect for beginners and advanced musicians alike.",
        slug: "understanding-music-theory",
        isFeatured: true,
    },
    {
        title: "The Art of Songwriting",
        description:
            "Uncover the secrets of successful songwriting with guidance from experienced musicians and industry professionals.",
        slug: "the-art-of-songwriting",
        isFeatured: true,
    },
    {
        title: "Mastering Your Instrument",
        description:
            "Elevate your skills with advanced techniques tailored to your instrument of choice. Achieve mastery and play like a pro.",
        slug: "mastering-your-instrument",
        isFeatured: true,
    },
    {
        title: "Music Production Essentials",
        description:
            "Start your journey into music production with a comprehensive overview of the tools and techniques used by professionals.",
        slug: "music-production-essentials",
        isFeatured: true,
    },
    {
        title: "Live Performance Techniques",
        description:
            "Boost your stage presence and performance skills with expert advice and practical tips for live shows.",
        slug: "live-performance-techniques",
        isFeatured: true,
    },
    {
        title: "Digital Music Marketing",
        description:
            "Learn effective strategies to promote your music in the digital world and reach a wider audience.",
        slug: "digital-music-marketing",
        isFeatured: true,
    },
];

const UpcomingWebinars = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        Featured Webinars
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map((webinar) => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: `/${webinar.slug}`,
                        }))}
                    />
                </div>
                <div className="mt-10 text-center">
                    <Link
                        href="/webinars"
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingWebinars;
