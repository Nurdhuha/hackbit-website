"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { studioData } from "@/config/studio-data";
import { motion } from "framer-motion";

export default function HeroStudio() {
    // Stagger animation for text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-32 bg-black">
            {/* 1. Cyber Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-scroll"
                    style={{ maskImage: "linear-gradient(to bottom, transparent, black 90%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
                />
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-green/20 blur-[120px] rounded-full opacity-50 pointer-events-none z-0" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6">
                                <Zap className="w-4 h-4 text-brand-green" />
                                <span>Loading under 1 second guaranteed</span>
                            </div>

                            {/* 3. Staggered Text Reveal */}
                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Parsing the headline to animate words */}
                                {studioData.hero.headline.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-3">
                                        {word.split("").map((char, j) => (
                                            <motion.span key={j} variants={letterVariants} className={word === "Loading" || word === "<" || word === "1" || word === "Detik." ? "text-brand-green" : ""}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h1>

                            <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                {studioData.hero.subheadline}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button href={`https://wa.me/${studioData.global.whatsappNumber}`} variant="primary" className="w-full sm:w-auto !bg-brand-green !text-black hover:!bg-brand-green/90 font-bold border-none text-glow">
                                    {studioData.global.ctas.consultation}
                                </Button>
                                <Button href="#portfolio" variant="outline" className="w-full sm:w-auto border-neutral-800 hover:border-brand-green hover:text-brand-green">
                                    {studioData.global.ctas.liveDemo}
                                </Button>
                            </div>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-neutral-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-xs font-bold text-white">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <p>{studioData.hero.socialProof}</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Visual Content (Mockup) */}
                    {/* 2. Floating Mockup Animation */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none z-10 relative">
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative rounded-xl bg-neutral-900 border border-neutral-800 p-2 shadow-2xl border-glow">
                                {/* Browser Chrome */}
                                <div className="h-8 bg-neutral-800 rounded-t-lg flex items-center px-3 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 flex-1 h-5 bg-neutral-900 rounded-full flex items-center px-2 text-[10px] text-neutral-500 font-mono">
                                        hackbit.studio
                                    </div>
                                </div>
                                {/* Screen Content */}
                                <div className="aspect-[16/10] bg-neutral-950 rounded-b-lg overflow-hidden relative group">
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-7xl font-bold text-neutral-800 group-hover:text-brand-green transition-colors duration-500">0.8s</span>
                                        <span className="text-neutral-600 mt-2 font-mono group-hover:text-brand-green/80">LCP Score</span>
                                    </div>
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                </div>
                            </div>

                            {/* Stats Card Overlay - Also Floating but separate speed or phase */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-xl hidden sm:block"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400">Performance</p>
                                        <p className="text-xl font-bold text-white">100/100</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
