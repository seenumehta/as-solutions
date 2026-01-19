import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo-link">
                    <Logo size="medium" />
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={toggleMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/why-choose-us" className="nav-link" onClick={toggleMenu}>Why Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
