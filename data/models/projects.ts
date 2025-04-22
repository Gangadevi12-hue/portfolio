export class Project {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public highlights: ProjectHighlight[],
        public links: ProjectLink[]
    ) {}
}

export class ProjectHighlight {
    constructor(
        public icon: string,
        public title: string,
        public description: string
    ) {}
}

export class ProjectLink {
    constructor(
        public text: string,
        public url: string,
        public icon: string
    ) {}
}
