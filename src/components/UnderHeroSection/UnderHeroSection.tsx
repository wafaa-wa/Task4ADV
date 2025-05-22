import './UnderHeroSection.css'
interface UnderHeroSectionProps { Title: string; Description: string }
export default function UnderHeroSection({ Title, Description }: UnderHeroSectionProps) {
    return (
        <div className="UnderHeroSection M-Top Flex-Center">
            <div className="UnderHeroSectionContent Flex-Column">
                <h2>{Title}</h2>
                <p>{Description}</p>
            </div>
        </div>
    )
}
