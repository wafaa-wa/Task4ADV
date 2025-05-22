import './FooterColumn.css'
interface FooterColumnProps { ColumnTitle: string; links: string[] }

export default function FooterColumn({ ColumnTitle, links }: FooterColumnProps) {
    return (
        <div className='FooterColumn Flex-Column '>
            <h3>{ColumnTitle}</h3>
            <ul className='Flex-Column '>
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}

            </ul>

        </div>
    )
}
