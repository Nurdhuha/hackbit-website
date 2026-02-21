"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function BottomBlur() {
    const { scrollYProgress } = useScroll();

    // Fade out as we reach the bottom (from 0.9 to 1.0 scroll progress)
    const opacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);
    const pointerEvents = useTransform(scrollYProgress, [0.8, 0.95], ["auto" as any, "none" as any]);

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="fixed bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
        >
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent backdrop-blur-[2px]" />
        </motion.div>
    );
}
