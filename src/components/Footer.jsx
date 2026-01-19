import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <div className="footer-logo-wrapper">
                        <Logo size="small" />
                    </div>
                    <p className="footer-desc">
                        Reliable, secure, and future-ready technology solutions transforming businesses and living spaces.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services">Software & IT</Link></li>
                        <li><Link to="/services">Home Automation</Link></li>
                        <li><Link to="/services">IoT Solutions</Link></li>
                        <li><Link to="/services">Embedded Systems</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="footer-contact">
                        <li><Mail size={16} /> nextgenorbit01@gmail.com</li>
                        <li><Phone size={16} /> +91 9991379236</li>
                        <li><MapPin size={16} /> Chhattarpur, Delhi, India</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AS Solutions Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
