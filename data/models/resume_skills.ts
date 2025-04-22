export class Skill {
    constructor(
        public name: string
    ) {}
}

export interface ResumeInfo {
    title: string;
    description: string;
    fileUrl: string;
}

export interface SkillsData {
    skills: Skill[];
    resumeInfo: ResumeInfo;
}
