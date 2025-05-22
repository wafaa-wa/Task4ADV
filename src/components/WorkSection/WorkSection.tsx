import { useState } from 'react';
import { WorkCardsData } from '../../Data/WorkCardsData'
import StartSection from '../StartSection/StartSection'
import WorkCard from '../WorkCard/WorkCard'
import './WorkSection.css'

export default function WorkSection() {
    const [activeCardId, setActiveCardId] = useState(2);
    return (
        <div className='WorkSection Padding70 M-Top '>
            <StartSection TitleSecion='How it Works' DescriptionSection='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />
            <div className='WorkCardContainer '>
                {
                    WorkCardsData.map((data) => (
                        <WorkCard
                            key={data.id}
                            {...data}
                            isActive={activeCardId === data.id}
                            onClick={() => setActiveCardId(data.id)}

                        />
                    ))
                }
            </div>


        </div>
    )
}
