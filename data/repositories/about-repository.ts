import { About } from '../models/about';

export class AboutRepository {
    /**
     * Returns the about data for the portfolio
     */
    getAboutData(): About {
        return new About(
            "Ganga Devi Ponna",
            "Product Designer",
            "A detail-driven Product Designer with strong experience in creating visually appealing and user-centric designs. I've solved real-world problems—especially for students—by building applications where no solutions previously existed. While I care deeply about visual appeal, my primary focus is solving meaningful problems through design. I approach challenges by understanding real user pain points and turning them into simple, intuitive experiences. I'm confident in tackling complex design problems and have worked closely with developers and data science teams during an on-site internship to bring impactful ideas to life.",
            "assets/gani.jpg"
        );
    }
}
