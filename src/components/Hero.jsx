import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/iot_network.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-container">
                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Smart Technology.<br />
                            <span className="text-highlight">Real-World Solutions.</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            From software to smart homes, we build intelligent systems that simplify life and accelerate growth.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link to="/contact" className="btn btn-primary">
                                Get a Free Consultation <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Talk to an Expert
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <img src={heroImg} alt="Future Technology" className="hero-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
