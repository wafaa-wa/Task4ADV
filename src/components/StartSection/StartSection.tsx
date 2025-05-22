import './StartSection.css'
interface StartSectionProps { TitleSecion: string; DescriptionSection: string }

export default function StartSection({ TitleSecion, DescriptionSection }: StartSectionProps) {
    return (
        <div className='StartSection Flex-Column '>
            <h3>{TitleSecion}</h3>
            <p>{DescriptionSection}</p>

        </div>
    )
}
