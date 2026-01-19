import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';
import { Code, Home as HomeIcon, Globe, Cpu, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import softwareImg from '../assets/images/software_dev.png';
import smartHomeImg from '../assets/images/smart_home.png';
import iotImg from '../assets/images/iot_network.png';
import embeddedImg from '../assets/images/embedded_chip.png';
// Reusing iotImg for security as placeholder
import securityImg from '../assets/images/iot_network.png';

const Services = () => {
    const services = [
        {
            title: "Software & IT Services",
            icon: <Code size={40} />,
            image: softwareImg,
            items: ["Web Development", "Mobile App Development", "Custom Software Solutions", "IT Consulting"]
        },
        {
            title: "Home Automation",
            icon: <HomeIcon size={40} />,
            image: smartHomeImg,
            items: ["Smart lighting & appliances", "Smart switches & energy management", "Home security integration", "Voice assistant integration"]
        },
        {
            title: "IoT Services",
            icon: <Globe size={40} />,
            image: iotImg,
            items: ["IoT system design", "Sensor integration", "Cloud-connected platforms", "Real-time dashboards"]
        },
        {
            title: "Embedded Systems",
            icon: <Cpu size={40} />,
            image: embeddedImg,
            items: ["Firmware development", "Microcontroller solutions", "Hardware-software integration", "Prototyping"]
        },
        {
            title: "Cybersecurity",
            icon: <Lock size={40} />,
            image: securityImg,
            items: ["Secure system architecture", "IoT & network security", "Application security practices"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Comprehensive technology solutions tailored to your needs.
                    </motion.p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="services-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} className="service-card" variants={itemVariants}>
                                <div className="service-image-container">
                                    <img src={service.image} alt={service.title} className="service-image" />
                                    <div className="service-overlay"></div>
                                    <div className="service-icon-wrapper">{service.icon}</div>
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <ul className="service-list">
                                        {service.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;
