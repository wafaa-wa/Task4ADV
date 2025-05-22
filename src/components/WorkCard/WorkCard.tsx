import React from 'react';
import './WorkCard.css'
interface WorkCardProps {
    Icon: React.JSX.Element;
    Title: string;
    Description: string;
    isActive: boolean;
    onClick: () => void;
}

export default function WorkCard({ Icon, Title, Description, isActive, onClick }: WorkCardProps) {
    return (
        <div className={`WorkCard Flex-Column ${isActive ? "active" : ""}`} onClick={onClick}>
            <div className="IconWrapper">
                {React.cloneElement(Icon, { className: "CardIcon" })}
            </div>
            <div className='WorkCardBottom Flex-Column'>
                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>


        </div>
    )
}
