"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";
import { studioData } from "@/config/studio-data";

export default function PromoBanner() {
    if (!studioData.global.promo.isActive) return null;

    return (
        <div className="relative z-60 bg-brand-green text-black py-2 px-4 shadow-[0_4px_20px_rgba(118,253,15,0.3)] overflow-hidden">
            <div className="container mx-auto flex items-center justify-center gap-4 text-xs sm:text-sm font-bold tracking-tight">
                <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                    <span className="uppercase">{studioData.global.promo.text}</span>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <a
                    href={`https://wa.me/${studioData.global.whatsappNumber}?text=Halo%20Hackbit%20Studio,%20saya%20tertarik%20dengan%20Promo%20Launching%20paket%20Growth!`}
                    className="hidden md:inline-flex items-center bg-black text-brand-green px-3 py-1 rounded-full text-[10px] uppercase hover:bg-neutral-900 transition-colors"
                >
                    {studioData.global.promo.cta}
                </a>
            </div>

            {/* Animated Shimmer Effect */}
            <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                animate={{
                    left: ["-100%", "200%"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
            />
        </div>
    );
}
