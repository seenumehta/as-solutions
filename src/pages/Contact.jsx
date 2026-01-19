import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formBody = new URLSearchParams();
        formBody.append('form-name', 'contact');
        Object.keys(formData).forEach(key => {
            formBody.append(key, formData[key]);
        });

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody.toString()
        })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                setStatus('error');
            });
    };

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
                        {status === 'success' ? (
                            <div className="success-message" style={{ textAlign: 'center', padding: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', color: '#28a745' }}>Message Sent!</h3>
                                <p style={{ marginBottom: '2rem' }}>Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('')}
                                    className="btn btn-primary"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your project"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'error' && (
                                    <p style={{ color: 'red', marginTop: '1rem' }}>
                                        Something went wrong. Please try again later.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
