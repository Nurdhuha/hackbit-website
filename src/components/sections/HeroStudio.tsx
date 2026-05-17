"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import HeroMockup from "@/components/sections/HeroMockup";
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
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 bg-black">
            {/* 1. Cyber Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-size-[40px_40px] animate-grid-scroll"
                    style={{ maskImage: "linear-gradient(to bottom, transparent, black 90%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
                />
            </div>

            {/* Background Gradients */}
            {/* Primary Glow — smaller on mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] lg:w-[1200px] lg:h-[500px] bg-brand-green/15 lg:bg-brand-green/25 blur-[100px] lg:blur-[150px] rounded-full opacity-40 lg:opacity-60 pointer-events-none z-0" />
            {/* Secondary Glow — hidden on mobile */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] lg:w-[600px] lg:h-[250px] bg-brand-green/15 lg:bg-brand-green/30 blur-[60px] lg:blur-[80px] rounded-full opacity-30 lg:opacity-50 pointer-events-none z-0" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <FadeIn>
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
                                            <motion.span key={j} variants={letterVariants} className={word === "Otomatiskan" || word === "Lipatgandakan" || word === "Efisiensi." ? "text-brand-green" : ""}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h1>

                            <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                {studioData.hero.subheadline}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button href={`https://wa.me/${studioData.global.whatsappNumber}`} variant="primary" className="w-full max-w-xs sm:max-w-none sm:w-auto bg-brand-green! text-black! hover:bg-brand-green/90! font-bold border-none text-glow">
                                    {studioData.global.ctas.consultation}
                                </Button>
                                <Button href="#automation" variant="outline" className="w-full max-w-xs sm:max-w-none sm:w-auto border-neutral-800 hover:border-brand-green hover:text-brand-green">
                                    {studioData.global.ctas.liveDemo}
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Visual Content — New 3D Animated Mockup */}
                    <HeroMockup />
                </div>
            </Container>
        </section>
    );
}

