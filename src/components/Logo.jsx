import './Logo.css';
import logoImg from '../assets/images/as_logo_v2.png';

const Logo = ({ size = 'medium' }) => {
    // Size classes: small (footer/mobile), medium (navbar)
    const sizeClass = size === 'small' ? 'logo-small' : 'logo-medium';

    return (
        <div className={`logo-container ${sizeClass}`}>
            <img src={logoImg} alt="AS Solutions Logo" className="logo-image" />
            <span className="logo-text">AS Solutions</span>
        </div>
    );
};

export default Logo;
