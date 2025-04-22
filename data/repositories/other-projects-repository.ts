import { OtherProject } from '../models/other_projects';

export class OtherProjectsRepository {
    /**
     * Returns the other projects data for the portfolio
     */
    getOtherProjects(): OtherProject[] {
        return [
            new OtherProject(
                "Elite Hearts – Healthcare Experience",
                "Elite Hearts is a web-based platform designed to simplify healthcare access for patients. From instant doctor consultations to quick appointment bookings, the platform eliminates typical hospital wait-time frustration through clean UI and thoughtful flows.",
                "assets/otherprojects/Elitefinal.png",
                "Elite Hearts Healthcare App",
                [
                    "Direct Doctor Consultations",
                    "One-Click Appointments",
                    "User-First Design"
                ],
                "https://medium.com/@Gangadevi12/elite-hearts-a-seamless-healthcare-experience-79f215fb23a8"
            ),
            new OtherProject(
                "UX Strategy Breakdown – Zepto",
                "This case study explores how Zepto crafts an ultra-fast, intuitive grocery delivery experience. I deep-dived into the product's UX strategies — from their location-first approach to the seamless cart flow — analyzing how micro-decisions create a sense of urgency, trust, and convenience for the user.",
                "assets/otherprojects/zepto.png",
                "Zepto UX Case Study",
                [
                    "Location-First Approach",
                    "Speed-Driven UX",
                    "Trust Through Microcopy"
                ],
                "https://medium.com/@Gangadevi12/heres-my-observation-on-zepto-s-ux-strategyical-decisions-1cd23fe04bb3"
            ),
            new OtherProject(
                "Sudha Boat Tour – Travel Booking Platform",
                "Sudha Boat Tour is an intuitive travel booking platform designed to simplify boat trip planning around scenic locations like Papikondalu and Bhadrachalam. With a streamlined booking form, real-time trip pricing, and night-stay packages, it ensures a smooth and informative user experience — even for first-time travelers.",
                "assets/otherprojects/Boat travelsfinal.png",
                "Sudha Boat Tour App",
                [
                    "Easy Booking Form",
                    "Transparent Pricing",
                    "Destination Packages"
                ],
                "https://www.figma.com"
            ),
            new OtherProject(
                "MechanoHub – One Stop for Mechanical Engineers",
                "MechanoHub is a community-based mobile application tailored for mechanical engineering students. Designed to bring everything under one roof — from academic resources to career opportunities — it bridges the gap between classroom learning and real-world growth.",
                "assets/otherprojects/Mechanofinal.png",
                "MechanoHub App",
                [
                    "Department-Centric Platform",
                    "Centralized Learning",
                    "Community Driven"
                ],
                "https://medium.com/@Gangadevi12/mechanohub-5d15dac6f0b2"
            ),
            new OtherProject(
                "Tour Booking Web UI – My First Design Exploration",
                "This single-page design was one of my earliest steps into UI/UX. Built to simplify tour bookings, it features clean form structures, structured pricing sections, and engaging visuals — all inspired by real-world use cases. It marked the beginning of my journey toward meaningful and user-friendly design.",
                "assets/otherprojects/bike dark 2.jpg",
                "Tour Booking Web UI",
                [
                    "Early Learning",
                    "Real-World Inspiration",
                    "Growth Journey"
                ],
                "https://medium.com/@Gangadevi12/its-a-short-story-because-i-haven-t-completed-the-whole-design-for-this-web-application-677b5e6baa2b"
            )
        ];
    }
}
