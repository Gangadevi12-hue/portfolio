import { WorkExperience, Achievement, ExperienceData } from '../models/work_experience';

export class WorkExperienceRepository {
    /**
     * Returns the work experience data for the portfolio
     */
    getWorkExperienceData(): ExperienceData {
        return {
            summary: "With 8+ months of hands-on experience, I specialize in creating user-centric designs across AI, healthcare, and educational domains. My work has consistently delivered measurable results, including a 35% increase in user satisfaction and 40% reduction in development time through systematic design approaches.",
            experiences: [
                new WorkExperience(
                    "Product Designer",
                    "Geekbull Consulting",
                    "Current Role",
                    "fas fa-laptop-code",
                    [
                        new Achievement(
                            "HRMS Platform",
                            "Spearheaded the end-to-end design of an innovative HR platform, incorporating AI features that streamlined workflows and reduced processing time by 60%"
                        ),
                        new Achievement(
                            "AI Chat Interface",
                            "Led the design of an AI-powered chat interface, implementing structured response formats that improved user engagement by 35% and reduced user error rates by 45%"
                        )
                    ]
                ),
                new WorkExperience(
                    "UI/UX Design Intern",
                    "ADM Educational",
                    "3 Months",
                    "fas fa-graduation-cap",
                    [
                        new Achievement(
                            "Social Media Growth",
                            "Redesigned social media strategy and UI components, resulting in 40% increased engagement and 25% higher user retention across platforms"
                        ),
                        new Achievement(
                            "Healthcare UX",
                            "Developed accessible medical interfaces following WCAG guidelines, improving usability scores by 50% among diverse user groups"
                        )
                    ]
                ),
                new WorkExperience(
                    "Design Lead",
                    "College Design Team",
                    "4 Months",
                    "fas fa-paint-brush",
                    [
                        new Achievement(
                            "App Design Lead",
                            "Led the UI/UX design of college management platform"
                        ),
                        new Achievement(
                            "User Research",
                            "Conducted extensive user testing and optimization"
                        )
                    ]
                )
            ]
        };
    }
}
