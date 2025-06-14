import { useState } from 'react';
import { BestDealCardData } from '../../Data/BestDealCardData'
import BestDealCard from '../BestDealCard/BestDealCard'
import StartSection from '../StartSection/StartSection'
import './BestDeals.css'
import FulterButton from '../FulterButton/FulterButton';

export default function BestDeals() {
    const [activeBtn, setActiveBtn] = useState<string>("Residential Property");
    return (
        <div className='BestDeals Padding70 M-Top StyleSection'>
            <StartSection TitleSecion='Best Real Estate Deals' DescriptionSection='Best Real Estate Deals' />
            <div className='AllFulterBtn Flex-Row'>
                {["Residential Property", "Commercial Property", "Agriculture Property", "Industrial Property"].map((category) => (
                    <FulterButton
                        key={category}
                        isActive={activeBtn === category}
                        onClick={() => setActiveBtn(category)}
                    >
                        {category}
                    </FulterButton>
                ))}

            </div>
            <div className='AllCardBestDeal'>
                {BestDealCardData.map((data) => (
                    <BestDealCard
                        key={data.id}
                        CardImg={data.filterOptions[activeBtn]?.CardImg || "/assets/images/default.png"}
                        Label1={data.Label1}
                        Label2={data.Label2}
                    />
                ))}
            </div>

        </div>
    )
}
