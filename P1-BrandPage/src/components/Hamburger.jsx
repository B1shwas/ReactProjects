import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export const HamMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <div className='hamMenu'>
            <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars}
            style={{color: "#000000"}}
            onClick={toggleMenu} />
        </div>
        {isMenuOpen && 
        <div className='menu'>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <div className='btn'>
                <button className='loginBtn'>Login</button>
            </div>
        </div>}
        </>
      );
}