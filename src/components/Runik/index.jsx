import { motion } from 'framer-motion';

export default function Runik() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="font-norse text-5xl w-auto">
                <motion.div
                    initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                >
                    Welcome to Runik
                </motion.div>
            </div>
        </div>
    );
}
