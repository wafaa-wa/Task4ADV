
import './BestDealCard.css'
interface BestDealCardProps { CardImg: string; Label1: string, Label2: string }

export default function BestDealCard({ CardImg, Label1, Label2 }: BestDealCardProps) {

    return (
        <div className='BestDealCard'>
            <img src={CardImg} />
            <div className='BtnImg Flex-Row'>
                <button>{Label1}</button>
                <button>{Label2}</button>
            </div>

        </div>
    )
}
