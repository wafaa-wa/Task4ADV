import './TrendingCard.css'
interface TrendingCardProps {
    TrendingImage: string;
    Price: string;
    TrendingDescription: string;
    LocationIcon: string;
    TheLocation: string;
}

export default function TrendingCard({ TrendingImage, TrendingDescription, Price, LocationIcon, TheLocation }: TrendingCardProps) {
    return (
        <div className='TrendingCard Flex-Column'>
            <img className='TrendingImage' src={TrendingImage} />
            <span className='Price'>{Price}</span>
            <p className='TrendingDescription'>{TrendingDescription}</p>
            <div className='LocationCard Flex-Row '>
                <img className='LocationIcon' src={LocationIcon} />
                <p className='TheLocation'>{TheLocation}</p>
            </div>
        </div>
    )
}
