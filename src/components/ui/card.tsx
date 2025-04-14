import { motion } from "motion/react";

type CardProps = {
    title: string;
    description: string;
}

export const Card = ({ title, description } : CardProps) => {
    return (
        <motion.div className="h-full w-full rounded-xl" initial={{ opacity: 0, y: -20 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="bg-gray-400 h-[200px] rounded-t-xl">

            </div>
            <div className="w-full bg-[#161616] rounded-b-xl p-3">
                <h3 className="text-3xl text-[#FFF] font-bold">{title}</h3>
                <span className="text-[#c4c4c4]">{description}</span>
            </div>
        </motion.div>
    )
}