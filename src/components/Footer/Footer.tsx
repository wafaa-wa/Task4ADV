import { FooterLinkColumnData } from '../../Data/FooterLinkColumnData';
import FooterColumn from '../FooterColumn/FooterColumn';
import './Footer.css'
interface FooterProps { Logo: string; Description: string }

export default function Footer({ Logo, Description }: FooterProps) {

    return (
        <div className='Footer M-Top Flex-Column'>
            <div className='Footer-top Flex-Row'>
                <div className='Footer-top-Left Flex-Column'>
                    <img src={Logo} />
                    <p>{Description}</p>
                </div>
                <div className='AllFooterColumn Flex-Row'>
                    {
                        FooterLinkColumnData.map((link) => (
                            <FooterColumn
                            key={link.id}
                            ColumnTitle={link.ColumnTitle}
                            links={link.links}
                        />
                        ))
                    }

                </div>
            </div>
            <div className='Line'></div>
            <div className='Footer-Bottom Flex-Row'>
                <p>Copyright 2024 flora. All Rights Reserved</p>
                <div className='EndFooterRight Flex-Row'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}
