import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ 
    text, 
    className = '', 
    delay = 0 
}) => {
    const words = useMemo(() => text.split(' '), [text]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    };

    return (
        <motion.h2
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            variants={containerVariants}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};

export default RevealText;
