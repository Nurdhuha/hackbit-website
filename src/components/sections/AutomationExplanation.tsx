"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";
import { Bot, Database, Zap, FileSpreadsheet, MessageSquare, Mail, LineChart, FileText, Bell } from "lucide-react";

export default function AutomationExplanation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 0.05 - 0.2: Input appears
    const inputOpacity = useTransform(smoothProgress, [0.05, 0.2], [0, 1]);
    const inputY = useTransform(smoothProgress, [0.05, 0.2], [40, 0]);

    // 0.2 - 0.4: Line 1 draws
    const line1Progress = useTransform(smoothProgress, [0.2, 0.4], ["0%", "100%"]);

    // 0.4 - 0.55: Engine appears
    const engineOpacity = useTransform(smoothProgress, [0.4, 0.55], [0, 1]);
    const engineScale = useTransform(smoothProgress, [0.4, 0.55], [0.8, 1]);

    // 0.55 - 0.75: Line 2 draws
    const line2Progress = useTransform(smoothProgress, [0.55, 0.75], ["0%", "100%"]);

    // 0.75 - 0.9: Output appears
    const outputOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
    const outputY = useTransform(smoothProgress, [0.75, 0.9], [-40, 0]);

    // 0.9 - 1.0: Final Glow
    const finalGlow = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);

    return (
        <section id="automation" ref={containerRef} className="relative bg-neutral-950">
            {mounted ? (
                <>
                    <div className="sticky top-0 h-dvh w-full flex flex-col justify-start md:justify-center items-center pt-24 md:pt-0 pb-10 md:pb-0 overflow-y-auto overflow-x-hidden border-y border-neutral-900">
                        {/* Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-brand-green/5 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />
                        
                        <motion.div 
                            style={{ opacity: finalGlow }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] bg-brand-green/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" 
                        />

                        <Container className="relative z-10 w-full">
                            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-20">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-6">
                                    Bagaimana <span className="text-brand-green">Automasi</span> Bekerja?
                                </h2>
                                <p className="text-neutral-400 text-sm sm:text-lg lg:text-xl">
                                    Kami menghubungkan berbagai platform dan aplikasi yang Anda gunakan, 
                                    membangun jembatan pintar di tengahnya, dan membiarkan sistem bekerja secara independen 24/7.
                                </p>
                            </div>

                            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                                
                                {/* Stage 1: Inputs */}
                                <motion.div 
                                    style={{ opacity: inputOpacity, y: inputY }}
                                    className="flex-1 w-full md:w-auto"
                                >
                                    <div className="bg-neutral-900/80 border border-neutral-800 p-3 sm:p-6 rounded-2xl backdrop-blur-md shadow-xl relative z-20">
                                        <h3 className="text-white font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" /> Sumber Data (Input)
                                        </h3>
                                        <div className="flex flex-col gap-1.5 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">WhatsApp & Chat</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">Google Sheets</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">Email & Web Forms</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Connecting Line 1 */}
                                <div className="hidden md:flex relative w-16 lg:w-24 h-px bg-neutral-800 items-center justify-center">
                                    <motion.div 
                                        className="absolute top-0 left-0 h-full bg-brand-green shadow-[0_0_10px_rgba(57,255,20,0.8)]" 
                                        style={{ width: line1Progress }} 
                                    />
                                    {/* Data pulse dot */}
                                    <motion.div 
                                        className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"
                                        style={{ left: line1Progress, opacity: engineOpacity, x: "-50%" }}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>
                                <div className="md:hidden relative w-px h-4 sm:h-12 bg-neutral-800 flex items-center justify-center">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-full bg-brand-green shadow-[0_0_10px_rgba(57,255,20,0.8)]" 
                                        style={{ height: line1Progress }} 
                                    />
                                </div>

                                {/* Stage 2: Processing Engine */}
                                <motion.div 
                                    style={{ opacity: engineOpacity, scale: engineScale }}
                                    className="shrink-0 relative z-10 py-2 sm:py-0"
                                >
                                    <div className="relative w-20 h-20 sm:w-40 sm:h-40 flex items-center justify-center mx-auto">
                                        {/* Animated rings */}
                                        <div className="absolute inset-0 border-2 border-brand-green/30 rounded-full animate-spin-slow" />
                                        <div className="absolute inset-2 sm:inset-3 border border-brand-green/20 border-dashed rounded-full animate-reverse-spin" />
                                        
                                        <motion.div 
                                            style={{ opacity: finalGlow }}
                                            className="absolute inset-0 bg-brand-green/20 rounded-full blur-xl animate-pulse" 
                                        />
                                        
                                        <div className="relative bg-neutral-900 border-2 border-brand-green p-3 sm:p-6 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                                            <Bot className="w-6 h-6 sm:w-12 sm:h-12 text-brand-green" />
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 sm:mt-4">
                                        <h3 className="text-white font-bold text-sm sm:text-base">Automation Engine</h3>
                                        <p className="text-[10px] sm:text-xs text-brand-green mt-1">24/7 AI Processing</p>
                                    </div>
                                </motion.div>

                                {/* Connecting Line 2 */}
                                <div className="hidden md:flex relative w-16 lg:w-24 h-px bg-neutral-800 items-center justify-center">
                                    <motion.div 
                                        className="absolute top-0 left-0 h-full bg-brand-green shadow-[0_0_10px_rgba(57,255,20,0.8)]" 
                                        style={{ width: line2Progress }} 
                                    />
                                    {/* Data pulse dot */}
                                    <motion.div 
                                        className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"
                                        style={{ left: line2Progress, opacity: outputOpacity, x: "-50%" }}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </div>
                                <div className="md:hidden relative w-px h-4 sm:h-12 bg-neutral-800 flex items-center justify-center">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-full bg-brand-green shadow-[0_0_10px_rgba(57,255,20,0.8)]" 
                                        style={{ height: line2Progress }} 
                                    />
                                </div>

                                {/* Stage 3: Outputs */}
                                <motion.div 
                                    style={{ opacity: outputOpacity, y: outputY }}
                                    className="flex-1 w-full md:w-auto"
                                >
                                    <div className="bg-neutral-900/80 border border-neutral-800 p-3 sm:p-6 rounded-2xl backdrop-blur-md shadow-xl relative z-20">
                                        <h3 className="text-white font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
                                            <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" /> Hasil Akhir (Output)
                                        </h3>
                                        <div className="flex flex-col gap-1.5 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">Dashboard Real-time</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">Notifikasi Otomatis</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 p-2 sm:p-3 rounded-lg border border-neutral-800/50">
                                                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" />
                                                <span className="text-xs sm:text-sm text-neutral-300">Generate Invoice</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </Container>
                    </div>

                    {/* Responsive scroll height to drive the animation. 250vh gives enough scroll room */}
                    <div className="h-[250vh] pointer-events-none" />
                </>
            ) : (
                <div className="h-[350vh]" />
            )}
        </section>
    );
}
