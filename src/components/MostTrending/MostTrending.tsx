import { TrendingCardData } from '../../Data/TrendingCardData'
import StartSection from '../StartSection/StartSection'
import TrendingCard from '../TrendingCard/TrendingCard'
import './MostTrending.css'

export default function MostTrending() {
  return (
    <div className='MostTrending Padding70 M-Top StyleSection'>
      <StartSection TitleSecion='Most Trending' DescriptionSection='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />
      <div className='AllCardTrending'>
        {
          TrendingCardData.map((data3) => (
            <TrendingCard
              key={data3.id}
              {...data3}
            />
          ))
        }
      </div>

    </div>
  )
}
