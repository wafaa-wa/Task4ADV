import BestDeals from "../components/BestDeals/BestDeals";
import Hero from "../components/Hero/Hero";
import MostTrending from "../components/MostTrending/MostTrending";
import UnderHeroSection from "../components/UnderHeroSection/UnderHeroSection";
import WorkSection from "../components/WorkSection/WorkSection";

export default function Sections() {
    return (
        <div className="Sections">
            <Hero TitleHero="Discover a placeyou will love to live"
                DescriptionHero="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
                HeroImg="/assests/images/Hero/Hero Img.png"
            />
            <WorkSection />
            <UnderHeroSection Title="Find Dream Home" Description="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
            <MostTrending />
            <BestDeals />
        </div>
    )
}
