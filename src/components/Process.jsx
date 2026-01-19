import { ClipboardList, PenTool, Database, ShieldAlert, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardList size={24} />,
            title: "Analysis",
            desc: "Understanding requirements"
        },
        {
            icon: <PenTool size={24} />,
            title: "Design",
            desc: "Architecture & planning"
        },
        {
            icon: <Database size={24} />,
            title: "Develop",
            desc: "Coding & integration"
        },
        {
            icon: <ShieldAlert size={24} />,
            title: "Test",
            desc: "Security validation"
        },
        {
            icon: <Rocket size={24} />,
            title: "Deploy",
            desc: "Launch & maintenance"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <section className="section process-section">
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A systematic approach to delivering excellence.
                    </motion.p>
                </div>

                <motion.div
                    className="process-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} className="process-step" variants={itemVariants}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
