import { ShieldCheck, Cpu, Layers, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Layers size={32} />,
            title: "End-to-End Solutions",
            desc: "Holistic approach covering everything from software to hardware."
        },
        {
            icon: <Cpu size={32} />,
            title: "Deep Tech Expertise",
            desc: "Specialized in IoT, Automation, and Embedded Systems."
        },
        {
            icon: <Zap size={32} />,
            title: "Custom Built",
            desc: "Tailored solutions designed for your specific needs, not templates."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Secure & Scalable",
            desc: "Architecture designed for growth and top-tier security."
        },
        {
            icon: <HeartHandshake size={32} />,
            title: "Dedicated Support",
            desc: "We stand by our deployment with ongoing maintenance."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section className="section why-us-section">
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We deliver technology that works for you.
                    </motion.p>
                </div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} className="feature-card" variants={itemVariants}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
