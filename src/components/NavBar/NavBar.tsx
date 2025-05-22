import { useState } from 'react';
import './NavBar.css'
interface NavProps {
    Logo: string;
    items: { path: string; content: string }[];
    LogINButton: string;
    MenuIcon: string;
    CloseIcon: string;
}

export default function NavBar({ Logo, items, LogINButton, MenuIcon, CloseIcon }: NavProps) {
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [menuIconSrc, setMenuIconSrc] = useState(MenuIcon);
    const toggleMenu = () => {
        setShow(prev => !prev);
        setMenuIconSrc(prev => prev === MenuIcon ? CloseIcon : MenuIcon);
    };
    return (
        <div className='NavBar '>
            <nav>
                <img className='Logo' src={Logo} />
                <ul className='Menu-Link'>
                    {items.map((item) => (
                        <li key={item.path}>
                            <a href={item.path}>{item.content}</a>
                        </li>
                    ))}

                </ul>
                <button className='LogINButton onLaptopBtn'>{LogINButton}</button>
                <button className='MenuIcon' onClick={toggleMenu}>
                    <img src={menuIconSrc} alt="Menu Icon" />
                </button>
                <div className={`Menu-Link-Mobile ' ${show ? "open Flex-Column" : ""}`} >
                    <ul className='Flex-Column'>
                        {
                            items?.map((item, index) => {
                                return (
                                    <li key={item.path}><a href={item?.path} className={activeIndex === index ? "active" : ""}
                                        onClick={() => setActiveIndex(index)}>
                                        {item?.content}</a></li>
                                )
                            })
                        }

                    </ul>
                    <button className=' onMobileBtn'>{LogINButton}</button>
                </div>
            </nav>
        </div>
    )
}
