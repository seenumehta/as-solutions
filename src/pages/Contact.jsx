import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Let’s build smart solutions together.</p>
                </div>
            </div>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Have a project in mind? Reach out to us for a consultation.</p>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>nextgenorbit01@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9991379236</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h4>Address</h4>
                                <p>Chhattarpur, Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="Your Phone Number" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Tell us about your project" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
