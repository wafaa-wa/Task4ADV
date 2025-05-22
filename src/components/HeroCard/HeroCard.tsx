import './HeroCard.css'
interface HeroCardProps { IconHeroCard: string; TitleCard: string; DescriptionCard: string }

export default function HeroCard({ IconHeroCard, TitleCard, DescriptionCard }: HeroCardProps) {
    return (
        <div className='HeroCard Flex-Row'>
            <button className='IconHeroBtn Flex-Center'><img src={IconHeroCard} /></button>
            <div className='HeroCardRight Flex-Column'>
                <h4>{TitleCard}</h4>
                <p>{DescriptionCard}</p>
            </div>
        </div>
    )
}
