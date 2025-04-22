import { Project, ProjectHighlight, ProjectLink } from '../models/projects';

export class ProjectsRepository {
    /**
     * Returns the featured projects data for the portfolio
     */
    getFeaturedProjects(): Project[] {
        return [
            new Project(
                "College Management App",
                "A comprehensive mobile application revolutionizing the college experience by bringing all essential services onto a single platform. Available on Google Play Store with outstanding UI reviews.",
                "assets/college_mockup.png",
                [
                    new ProjectHighlight(
                        "fas fa-users",
                        "User-Centric Design",
                        "Solved multiple student pain points through intuitive interface design"
                    ),
                    new ProjectHighlight(
                        "fas fa-mobile-alt",
                        "Platform Integration",
                        "Unified various college services into one seamless mobile experience"
                    ),
                    new ProjectHighlight(
                        "fas fa-star",
                        "Positive Reception",
                        "Received exceptional feedback for UI/UX design on Play Store"
                    ),
                    new ProjectHighlight(
                        "fas fa-chart-line",
                        "User Growth",
                        "Achieved 2000+ active users within first month of launch"
                    )
                ],
                [
                    new ProjectLink(
                        "View Case Study",
                        "https://www.figma.com/file/MTgt1D4NJ6lUqGXn9BMC9B/Des-for-college?node-id=1040%3A3246&t=4obKXSaNedMBz4zx-1",
                        "fas fa-arrow-right"
                    ),
                    new ProjectLink(
                        "Download App",
                        "https://play.google.com/store/apps/details?id=com.bharath.kiet_student_app&hl=en",
                        "fab fa-google-play"
                    )
                ]
            ),
            new Project(
                "Expenso - Expense Management App",
                "Expenso is a mobile app designed to help individuals track their expenses effortlessly and stay financially disciplined. I built it after realizing how frustrating it is not knowing where our hard-earned money goes. Whether you're a student or a 9–5 employee, manually tracking expenses is tedious — so I created Expenso to simplify the process and make financial awareness easy, organized, and useful.",
                "assets/Mockup 1 expenso.png",
                [
                    new ProjectHighlight(
                        "fas fa-wallet",
                        "Expense Tracking",
                        "Helps users track daily, weekly, and monthly expenses with ease."
                    ),
                    new ProjectHighlight(
                        "fas fa-chart-line",
                        "Budget Planning",
                        "Allows users to set budgets for different categories and stick to them."
                    ),
                    new ProjectHighlight(
                        "fas fa-file-invoice",
                        "Detailed Reports",
                        "Provides actionable insights with easy-to-read financial reports."
                    ),
                    new ProjectHighlight(
                        "fas fa-users",
                        "Validated Design",
                        "Backed by strong user research and positive feedback during the design phase."
                    )
                ],
                [
                    new ProjectLink(
                        "View Case Study",
                        "https://medium.com/@Gangadevi12/where-all-my-money-is-going-18067ef45f78",
                        "fas fa-arrow-right"
                    )
                ]
            )
        ];
    }
}
