"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";
import { AlertTriangle, TrendingDown, Zap, ArrowRight, Clock } from "lucide-react";

// ─── Theme ───────────────────────────────────────────────────────────────────
const themeConfig = {
    red: {
        icon: AlertTriangle,
        labelColor: "text-red-400",
        dotBg: "bg-red-400",
        dotGlow: "shadow-[0_0_12px_rgba(248,113,113,0.9)]",
        glowColor: "rgba(248,113,113,0.12)",
    },
    orange: {
        icon: TrendingDown,
        labelColor: "text-orange-400",
        dotBg: "bg-orange-400",
        dotGlow: "shadow-[0_0_12px_rgba(251,146,60,0.9)]",
        glowColor: "rgba(251,146,60,0.12)",
    },
    green: {
        icon: Zap,
        labelColor: "text-brand-green",
        dotBg: "bg-brand-green",
        dotGlow: "shadow-[0_0_12px_rgba(57,255,20,0.9)]",
        glowColor: "rgba(57,255,20,0.12)",
    },
};

const chapters = studioData.problem.chapters;
const TOTAL = chapters.length;

// ─── Progress Dot (Point 6: Enlarged with Labels) ────────────────────────────
function ProgressDot({ scrollYProgress, index, theme, label }: {
    scrollYProgress: MotionValue<number>; index: number; theme: keyof typeof themeConfig; label: string;
}) {
    const s = index / TOTAL, e = (index + 1) / TOTAL;
    const pad = 0.05;
    const scale = useTransform(scrollYProgress, [s - pad, s, e - pad, e], [1, 1.5, 1.5, 1]);
    const opacity = useTransform(scrollYProgress, [s - pad, s, e - pad, e], [0.25, 1, 1, 0.25]);
    const labelOpacity = useTransform(scrollYProgress, [s - pad, s, e - pad, e], [0, 1, 1, 0]);
    const cfg = themeConfig[theme];

    return (
        <motion.div
            style={{ scale, opacity }}
            className={`w-3 h-3 rounded-full ${cfg.dotBg} ${cfg.dotGlow}`}
        />
    );
}

// ─── Mobile Progress Bar (Point 3) ───────────────────────────────────────────
function MobileProgressBar({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="sm:hidden absolute top-0 left-0 right-0 z-30 h-1 bg-neutral-800">
            <motion.div
                className="h-full bg-linear-to-r from-red-400 via-orange-400 to-brand-green"
                style={{ width }}
            />
        </div>
    );
}

// ─── Story Slide Item ────────────────────────────────────────────────────────
function StorySlideItem({ chapter, index, scrollYProgress }: {
    chapter: typeof chapters[0], index: number, scrollYProgress: MotionValue<number>
}) {
    const cfg = themeConfig[chapter.theme];
    const Icon = cfg.icon;
    const start = index / TOTAL;
    const end = (index + 1) / TOTAL;
    const isLast = index === TOTAL - 1;

    const opacity = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    const y = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [30, 0, 0, -30]
    );

    return (
        <motion.div
            style={{ opacity, y, pointerEvents: "none" }}
            className="absolute inset-0 flex flex-col justify-center text-left"
        >
            <div className={`inline-flex items-center gap-2 mb-4 sm:mb-6 font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] ${cfg.labelColor}`}>
                <Icon className="w-4 h-4" /><span>{chapter.label}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-3 sm:mb-6">
                {chapter.title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-10">
                {chapter.sub}
            </p>
            {isLast && (
                <div className="pointer-events-auto">
                    <Button href="#pricing" variant="primary" className="w-fit bg-brand-green! text-black! border-none! font-bold group">
                        Lihat Penawaran
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            )}
        </motion.div>
    );
}

// ─── Visual Panel Item ───────────────────────────────────────────────────────
function VisualPanelItem({ index, scrollYProgress }: { index: number, scrollYProgress: MotionValue<number> }) {
    const Visual = VISUALS[index];
    const start = index / TOTAL;
    const end = (index + 1) / TOTAL;

    const opacity = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    const scale = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0.9, 1, 1, 0.9]
    );

    return (
        <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 flex items-center justify-center p-4"
        >
            <Visual scrollYProgress={scrollYProgress} index={index} />
        </motion.div>
    );
}

// ─── Mobile Visual (Point 1: Compact visual for mobile) ──────────────────────
function MobileVisualItem({ index, scrollYProgress }: { index: number, scrollYProgress: MotionValue<number> }) {
    const Visual = VISUALS[index];
    const start = index / TOTAL;
    const end = (index + 1) / TOTAL;

    const opacity = useTransform(scrollYProgress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="w-full max-w-[240px]">
                <Visual scrollYProgress={scrollYProgress} index={index} />
            </div>
        </motion.div>
    );
}

// ─── Visual Components (Point 4: Micro-animations) ──────────────────────────

// 408 Timeout — with glitch/flicker effect
function LoadingErrorVisual({ scrollYProgress, index }: { scrollYProgress: MotionValue<number>, index: number }) {
    const start = index / TOTAL;
    const animStart = start + 0.05;

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-12 bg-red-950/20 rounded-2xl sm:rounded-3xl border border-red-500/20 backdrop-blur-md shadow-2xl w-full max-w-[240px] sm:max-w-sm">
            <Clock className="w-8 h-8 sm:w-16 sm:h-16 text-red-500 mb-3 sm:mb-8 opacity-40 animate-pulse" />
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl animate-pulse rounded-full" />
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-red-500/30 flex items-center justify-center">
                    <motion.span
                        className="text-3xl sm:text-5xl font-black text-red-500 glitch-text"
                        animate={{
                            opacity: [1, 0.3, 1, 0.6, 1],
                            x: [0, -2, 2, -1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.5,
                        }}
                    >
                        408
                    </motion.span>
                </div>
            </div>
            <p className="mt-3 sm:mt-8 text-red-400 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">REQUEST TIMEOUT</p>
        </div>
    );
}

// Revenue Drop — with animated bars
function RevenueDropVisual({ scrollYProgress, index }: { scrollYProgress: MotionValue<number>, index: number }) {
    const barHeights = [40, 70, 50, 90, 30, 10];

    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-orange-950/20 rounded-2xl sm:rounded-3xl border border-orange-500/20 backdrop-blur-md shadow-2xl w-full max-w-[240px] sm:max-w-sm">
            <div className="flex items-end gap-2 sm:gap-2.5 mb-6 sm:mb-8 h-24 sm:h-32">
                {barHeights.map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-5 sm:w-7 bg-orange-500/40 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3 + i * 0.12,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
                <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <TrendingDown className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
                </motion.div>
                <div>
                    <motion.p
                        className="text-orange-500 font-black text-2xl sm:text-3xl leading-none"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        -7%
                    </motion.p>
                    <p className="text-orange-400/60 text-[10px] font-mono tracking-tighter mt-1 uppercase">LOSS / SEC</p>
                </div>
            </div>
        </div>
    );
}

// Comparison Table — with animated progress bars
function ComparisonTable({ scrollYProgress, index }: { scrollYProgress: MotionValue<number>, index: number }) {
    return (
        <div className="bg-neutral-900/60 backdrop-blur-lg rounded-2xl sm:rounded-2xl p-4 sm:p-8 border border-neutral-800 shadow-2xl w-full max-w-[240px] sm:max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500 mb-4 sm:mb-6">Performance</p>
            <div className="space-y-4 sm:space-y-5">
                {studioData.problem.comparison.map((item, idx) => {
                    const isGood = item.value.includes("<");
                    const targetWidth = isGood ? 13 : 82;
                    return (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-baseline text-white">
                                <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                                <span className={`text-lg sm:text-xl font-black font-mono ${isGood ? "text-brand-green" : "text-red-400"}`}>{item.value}</span>
                            </div>
                            <div className="h-2.5 sm:h-3 bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full rounded-full ${item.color}`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${targetWidth}%` }}
                                    transition={{ duration: 1.2, delay: 0.5 + idx * 0.3, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const VISUALS = [LoadingErrorVisual, RevenueDropVisual, ComparisonTable];

// ─── Dynamic Background Glow (Point 7) ──────────────────────────────────────
function DynamicBackground({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const redOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.35], [0.6, 0.6, 0, 0]);
    const orangeOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.65], [0, 0.6, 0.6, 0]);
    const greenOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.95, 1], [0, 0.6, 0.6, 0.4]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px]"
                style={{ opacity: redOpacity, background: "rgba(248,113,113,0.15)" }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[200px]"
                style={{ opacity: orangeOpacity, background: "rgba(251,146,60,0.15)" }}
            />
            <motion.div
                className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-[200px]"
                style={{ opacity: greenOpacity, background: "rgba(57,255,20,0.12)" }}
            />
        </div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ProblemAgitation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-neutral-950">
            {mounted ? (
                <>
                    <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden border-y border-neutral-900">
                        {/* Point 5: Gradient Divider at top */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-green/40 to-transparent" />

                        {/* Point 7: Dynamic Background */}
                        <DynamicBackground scrollYProgress={scrollYProgress} />

                        {/* Point 3: Mobile Progress Bar */}
                        <MobileProgressBar scrollYProgress={scrollYProgress} />

                        <Container className="h-full w-full flex items-center">
                            <div className="relative w-full h-[65vh] sm:h-[60vh] lg:h-[70vh] flex items-center sm:pl-12 lg:pl-16">
                                {/* Point 6: Enlarged dots with labels (hidden on mobile, shown sm+) */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-5 sm:gap-6 z-20">
                                    {chapters.map((ch, i) => (
                                        <ProgressDot
                                            key={ch.id}
                                            scrollYProgress={scrollYProgress}
                                            index={i}
                                            theme={ch.theme}
                                            label={ch.label}
                                        />
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center w-full h-full">
                                    {/* Point 1: Mobile visual (shown on mobile, hidden lg+) */}
                                    <div className="lg:hidden relative h-[25vh] w-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            {chapters.map((_, i) => (
                                                <MobileVisualItem
                                                    key={i}
                                                    index={i}
                                                    scrollYProgress={scrollYProgress}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="relative col-span-1 lg:col-span-7 h-[30vh] sm:h-[40vh] lg:h-full flex items-center">
                                        {chapters.map((chapter, index) => (
                                            <StorySlideItem
                                                key={chapter.id}
                                                chapter={chapter}
                                                index={index}
                                                scrollYProgress={scrollYProgress}
                                            />
                                        ))}
                                    </div>

                                    {/* Desktop visual (hidden on mobile, shown lg+) */}
                                    <div className="hidden lg:flex relative lg:col-span-5 h-[60vh] items-center justify-center">
                                        <div className="relative w-full h-full">
                                            {chapters.map((_, i) => (
                                                <VisualPanelItem
                                                    key={i}
                                                    index={i}
                                                    scrollYProgress={scrollYProgress}
                                                />
                                            ))}
                                        </div>
                                        <div className="absolute -inset-32 bg-brand-green/5 blur-[160px] rounded-full -z-10 bg-radial pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>

                    {/* Point 2: Responsive scroll height */}
                    <div className="h-[120vh] lg:h-[180vh] pointer-events-none" />
                </>
            ) : (
                <div className="h-[200vh] lg:h-[300vh]" />
            )}
        </section>
    );
}
