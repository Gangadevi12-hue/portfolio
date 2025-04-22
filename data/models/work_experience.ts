export class WorkExperience {
    constructor(
        public role: string,
        public company: string,
        public duration: string,
        public icon: string,
        public achievements: Achievement[]
    ) {}
}

export class Achievement {
    constructor(
        public title: string,
        public description: string
    ) {}
}

export interface ExperienceData {
    summary: string;
    experiences: WorkExperience[];
}
