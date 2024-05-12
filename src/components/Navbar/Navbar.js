import React from 'react'
import './Navbar.css';

const Navbar = () => {

    return (
        <div className='nav-principal'>
            <div className='nav-contenido'>
                <img className='logo' src='' alt=''/>
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact me</a>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Navbar;