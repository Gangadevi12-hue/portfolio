import { Skill, SkillsData, ResumeInfo } from '../models/resume_skills';

export class ResumeSkillsRepository {
    /**
     * Returns the skills and resume data for the portfolio
     */
    getSkillsData(): SkillsData {
        return {
            skills: [
                new Skill("Figma"),
                new Skill("Canva"),
                new Skill("User Research"),
                new Skill("Wireframing"),
                new Skill("Prototyping"),
                new Skill("UI Design"),
                new Skill("Visual Design"),
                new Skill("Interaction Design"),
                new Skill("A/B Testing"),
                new Skill("Illustrator"),
                new Skill("Design Systems")
            ],
            resumeInfo: {
                title: "Download My Resume",
                description: "Get a detailed overview of my experience, skills, and achievements",
                fileUrl: "assets/GangapDesigner.pdf"
            }
        };
    }
}
