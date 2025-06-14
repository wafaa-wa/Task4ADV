import './FooterColumn.css'
interface FooterColumnProps {
    ColumnTitle: string;
    links: (string | { type: "buttons"; buttons: { icon: string }[] })[];
}

export default function FooterColumn({ ColumnTitle, links }: FooterColumnProps) {
    return (
        <div className='FooterColumn Flex-Column '>
            <h3>{ColumnTitle}</h3>
            <ul className='Flex-Column'>
                {links.map((link, index) => (
                    <li key={index}>
                        {typeof link === "string" ? (
                            link
                        ) : (
                            <div className='BtnFooterContainer Flex-Row'>
                                {link.buttons.map((button, btnIndex) => (
                                    <button key={btnIndex} className="Flex-Center">
                                        <img src={button.icon} alt="Social Icon" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>


        </div>
    )
}
