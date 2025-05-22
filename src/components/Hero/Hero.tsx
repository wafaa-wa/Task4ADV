import { HeroCardData } from '../../Data/HeroCardData';
import HeroCard from '../HeroCard/HeroCard';
import './Hero.css'
interface HeroProps { TitleHero: string; DescriptionHero: string, HeroImg: string }

export default function Hero({ TitleHero, DescriptionHero, HeroImg }: HeroProps) {
    return (
        <div className='Hero '>
            <div className='Hero-Cont Flex-Column'>
                <h1>{TitleHero}</h1>
                <p className='DescriptionHero'>{DescriptionHero}</p>
                <div className='ContainertHeroCard Flex-Center'>
                    {
                        HeroCardData.map((herodata) => (
                            <HeroCard
                                key={herodata.id}
                                {...herodata}

                            />
                        ))
                    }
                </div>
            </div>


            <img src={HeroImg} className='HeroImg' />
        </div>
    )
}
