"use client"
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const anim = (variants: typeof page) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}
const page = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.11, 0, 0.5, 0]
        }
    },
    exit: {
        opacity: 0,
    }
}

export default function Template({ children }: PropsWithChildren) {
    return (
        <motion.div
            className="w-full"
            {...anim(page)}
        >
            {children}
        </motion.div>
    )
}