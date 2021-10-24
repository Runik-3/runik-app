import { motion } from 'framer-motion';

export default function Runik() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="font-norse text-5xl">
                <motion.div
                    animate={{ scale: 2.0 }}
                    transition={{ duration: 0.75 }}
                >
                    Welcome to Runik
                </motion.div>
            </div>
        </div>
    );
}
