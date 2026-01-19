import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import { Target, Eye, Shield, Lightbulb, Users, Search } from 'lucide-react';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Building reliable, secure, and future-ready technology solutions.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Who We Are</h2>
                            <p>
                                AS Solutions Pvt. Ltd. is a premier technology and engineering solutions company dedicated to transforming businesses and living spaces through smart innovation.
                                We specialize in bridging the gap between digital software and physical hardware, delivering end-to-end solutions that are secure, scalable, and efficient.
                            </p>
                        </div>
                        <div className="about-stats">
                            {/* Placeholder for an image or stats */}
                            <div className="stat-box">
                                <h3>Innovation</h3>
                                <p>At our core</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mv-card">
                            <Target size={40} className="mv-icon" />
                            <h3>Our Mission</h3>
                            <p>Build reliable, secure, and future-ready technology solutions.</p>
                        </div>
                        <div className="mv-card">
                            <Eye size={40} className="mv-icon" />
                            <h3>Our Vision</h3>
                            <p>Enable smarter businesses and smarter living through innovation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <Shield size={32} className="value-icon" />
                            <h4>Security</h4>
                            <p>We prioritize the safety and integrity of your data and systems.</p>
                        </div>
                        <div className="value-card">
                            <Lightbulb size={32} className="value-icon" />
                            <h4>Innovation</h4>
                            <p>Constantly pushing boundaries to deliver cutting-edge solutions.</p>
                        </div>
                        <div className="value-card">
                            <Target size={32} className="value-icon" />
                            <h4>Quality</h4>
                            <p>Excellence in every line of code and every hardware component.</p>
                        </div>
                        <div className="value-card">
                            <Search size={32} className="value-icon" />
                            <h4>Transparency</h4>
                            <p>Open communication and honest processes throughout development.</p>
                        </div>
                        <div className="value-card">
                            <Users size={32} className="value-icon" />
                            <h4>Customer Focus</h4>
                            <p>Your success is our success. We build what you truly need.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
