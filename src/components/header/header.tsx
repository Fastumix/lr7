import React, { useState } from 'react';
import './header.styles.css';
import logo from '../../assets/SiteLogo.svg'
import search from '../../assets/search.svg';
import phone from '../../assets/phone.svg';
import menu from '../../assets/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const [dropBox, setDropBox] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [visible, setVisible] = useState(false);
    const toggleDropdown = () => {
        setDropBox(!dropBox);
      };
    const toggleInput = () => {
        setIsInput(!isInput);
        const search = document.getElementById('search');
        search!.style.visibility = visible ? 'visible' : 'hidden';
        setVisible(!visible);
    };
    const toggleMenu = () => {
        setIsMenu(!isMenu);
        document.body.style.overflow = !isMenu ? 'hidden' : 'auto';
    };
  return (
    <header className='header'>
        <div className='container'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Gallery
                    </li>
                    <li>
                        Team
                    </li>
                </ul>
            </nav>
            <div className='panel'>
                <ul>
                <li onClick={toggleDropdown}>
                        {!dropBox && (
                            <ul className='dropdown'>
                                <li>En <span><FontAwesomeIcon icon={faCaretDown} /></span></li>
                            </ul>
                        )}
                        {dropBox && (
                            <ul className='dropdown'>
                                <li>Ua <span><FontAwesomeIcon icon={faCaretUp} /></span></li>
                            </ul>
                        )}
                </li>
                <li>
                    <img id='search' onClick={toggleInput} src={search} alt="" />
                    {isInput && (
                        <input type="text" />
                    )}
                </li>
                <li>
                    <img src={phone} alt="" />
                </li>
                <li>
                    <img onClick={toggleMenu} src={menu} alt="" />
                    {isMenu && (
                        <div className='popup-menu'>
                            <div className='popup-header'>
                                <h2>Menu</h2>
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    onClick={toggleMenu} 
                                    className='close-icon'
                                />
                            </div>
                            <ul className='popup-content'>
                                <li>About</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Gallery</li>
                                <li>Team</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    )}
                </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
