import { BestDealCardData } from '../../Data/BestDealCardData'
import BestDealCard from '../BestDealCard/BestDealCard'
import StartSection from '../StartSection/StartSection'
import './BestDeals.css'

export default function BestDeals() {
    /* ما لحقت خلص الازرار الفلترة*/ 
    return (
        <div className='BestDeals Padding70 M-Top StyleSection'>
            <StartSection TitleSecion='Best Real Estate Deals' DescriptionSection='Best Real Estate Deals' />
            <div className='AllCardBestDeal'>
                {
                    BestDealCardData.map((data5) => (
                        <BestDealCard
                            key={data5.id}
                            {...data5}
                        />
                    ))
                }
            </div>

        </div>
    )
}
