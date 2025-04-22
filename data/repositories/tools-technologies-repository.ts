import { ToolsAndTechnologies, ToolsList } from '../models/tools_technologies';

export class ToolsAndTechnologiesRepository {
    /**
     * Returns the tools and technologies data for the portfolio
     */
    getToolsAndTechnologiesData(): ToolsList {
        return new ToolsList(
            // Design Tools
            [
                new ToolsAndTechnologies("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", "Figma"),
                new ToolsAndTechnologies("https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000", "Canva"),
                new ToolsAndTechnologies("https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000", "Adobe XD"),
                new ToolsAndTechnologies("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", "Illustrator"),
                new ToolsAndTechnologies("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", "Sketch")
            ],
            // Technologies
            [
                new ToolsAndTechnologies("fab fa-html5", "HTML5"),
                new ToolsAndTechnologies("fab fa-css3-alt", "CSS3"),
                new ToolsAndTechnologies("fab fa-js", "JavaScript"),
                new ToolsAndTechnologies("fab fa-java", "Spring Boot")
            ]
        );
    }
}
