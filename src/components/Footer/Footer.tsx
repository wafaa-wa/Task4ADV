import { FooterLinkColumnData } from '../../Data/FooterLinkColumnData';
import FooterColumn from '../FooterColumn/FooterColumn';
import './Footer.css'
interface FooterProps { Logo: string; Description: string }

export default function Footer({ Logo, Description }: FooterProps) {
    /* بعتذر ما قدرت خلص الفوتر ف عملتو عالسريع بيطلع احسن من هيك بكتير */
    return (
        <div className='Footer Flex-Column'>
            <div className='Footer-top Flex-Row'>
                <div className='Footer-top-Left Flex-Column'>
                    <img src={Logo} />
                    <p>{Description}</p>
                </div>
                <div className='TOWFooterColumn Flex-Row'>
                    {
                        FooterLinkColumnData.map((link) => (
                            <FooterColumn
                                key={link.id}
                                {...link}

                            />
                        ))
                    }

                </div>
                <div className='ThirdFooterColumn Flex-Column'>
                    <h3>Our Location</h3>
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    <div className='BtnFooterContainer Flex-Row'>
                        <button className='Flex-Center'><img src="/assests/images/Footer/facebook-fill.svg" /></button>
                        <button className='Flex-Center'><img src="/assests/images/Footer/twitter-fill.png" /></button>
                        <button className='Flex-Center'><img src="/assests/images/Footer/linkedin-fill.png" /></button>
                    </div>
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
