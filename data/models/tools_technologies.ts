export class ToolsAndTechnologies {
    constructor(
        public iconurl: string,
        public name: string
    ) {}
}

export class ToolsList {
    constructor(
        public designTools: ToolsAndTechnologies[],
        public technologies: ToolsAndTechnologies[]
    ) {}
}
