"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";
import { AlertTriangle, TrendingDown, Zap, ArrowRight, Timer, Clock, XCircle } from "lucide-react";

// ─── Theme ───────────────────────────────────────────────────────────────────
const themeConfig = {
    red: { icon: AlertTriangle, labelColor: "text-red-400", dotBg: "bg-red-400", dotGlow: "shadow-[0_0_12px_rgba(248,113,113,0.9)]" },
    orange: { icon: TrendingDown, labelColor: "text-orange-400", dotBg: "bg-orange-400", dotGlow: "shadow-[0_0_12px_rgba(251,146,60,0.9)]" },
    green: { icon: Zap, labelColor: "text-brand-green", dotBg: "bg-brand-green", dotGlow: "shadow-[0_0_12px_rgba(57,255,20,0.9)]" },
};

const chapters = studioData.problem.chapters;
const TOTAL = chapters.length;

// ─── Progress Dot ────────────────────────────────────────────────────────────
function ProgressDot({ scrollYProgress, index, theme }: {
    scrollYProgress: MotionValue<number>; index: number; theme: keyof typeof themeConfig;
}) {
    const s = index / TOTAL, e = (index + 1) / TOTAL;
    const pad = 0.05;
    const scale = useTransform(scrollYProgress, [s - pad, s, e - pad, e], [1, 1.6, 1.6, 1]);
    const opacity = useTransform(scrollYProgress, [s - pad, s, e - pad, e], [0.25, 1, 1, 0.25]);
    const cfg = themeConfig[theme];
    return <motion.div style={{ scale, opacity }} className={`w-2 h-2 rounded-full ${cfg.dotBg} ${cfg.dotGlow}`} />;
}

// ─── Story Slide Item ────────────────────────────────────────────────────────
function StorySlideItem({ chapter, index, scrollYProgress }: {
    chapter: typeof chapters[0], index: number, scrollYProgress: MotionValue<number>
}) {
    const cfg = themeConfig[chapter.theme];
    const Icon = cfg.icon;
    const start = index / TOTAL;
    const end = (index + 1) / TOTAL;
    const isFirst = index === 0;
    const isLast = index === TOTAL - 1;

    // Use consistent ranges to avoid hook mismatch
    const opacity = useTransform(scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [0, 1, 1, 0]
    );

    const y = useTransform(scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [30, 0, 0, -30]
    );

    return (
        <motion.div
            style={{ opacity, y, pointerEvents: "none" }}
            className="absolute inset-0 flex flex-col justify-center text-left"
        >
            <div className={`inline-flex items-center gap-2 mb-6 font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] ${cfg.labelColor}`}>
                <Icon className="w-4 h-4" /><span>{chapter.label}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
                {chapter.title}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
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
        [start, start + 0.08, end - 0.08, end],
        [0, 1, 1, 0]
    );

    const scale = useTransform(scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [0.9, 1, 1, 0.9]
    );

    return (
        <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 flex items-center justify-center p-4"
        >
            <Visual />
        </motion.div>
    );
}

// ─── Visual Components ───────────────────────────────────────────────────────
function LoadingErrorVisual() {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-red-950/20 rounded-3xl border border-red-500/20 backdrop-blur-md shadow-2xl w-full max-w-sm">
            <Clock className="w-16 h-16 text-red-500 mb-8 opacity-40 animate-pulse" />
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl animate-pulse rounded-full" />
                <div className="relative w-32 h-32 rounded-full border-4 border-red-500/30 flex items-center justify-center">
                    <span className="text-5xl font-black text-red-500">408</span>
                </div>
            </div>
            <p className="mt-8 text-red-400 font-mono text-[10px] tracking-[0.3em] uppercase">REQUEST TIMEOUT</p>
        </div>
    );
}

function RevenueDropVisual() {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-orange-950/20 rounded-3xl border border-orange-500/20 backdrop-blur-md shadow-2xl w-full max-w-sm">
            <div className="flex items-end gap-2.5 mb-8 h-32">
                {[40, 70, 50, 90, 30, 10].map((h, i) => (
                    <div key={i} className="w-7 bg-orange-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
            </div>
            <div className="flex items-center gap-4">
                <TrendingDown className="w-12 h-12 text-orange-500" />
                <div>
                    <p className="text-orange-500 font-black text-3xl leading-none">-7%</p>
                    <p className="text-orange-400/60 text-[10px] font-mono tracking-tighter mt-1 uppercase">LOSS / SEC</p>
                </div>
            </div>
        </div>
    );
}

function ComparisonTable() {
    return (
        <div className="bg-neutral-900/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-2xl w-full max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500 mb-6">Performance</p>
            <div className="space-y-5">
                {studioData.problem.comparison.map((item, idx) => {
                    const isGood = item.value.includes("<");
                    return (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-baseline text-white">
                                <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                                <span className={`text-lg sm:text-xl font-black font-mono ${isGood ? "text-brand-green" : "text-red-400"}`}>{item.value}</span>
                            </div>
                            <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${item.color}`} style={{ width: isGood ? "13%" : "82%" }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const VISUALS = [LoadingErrorVisual, RevenueDropVisual, ComparisonTable];

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

    // No early return here to ensure ref is always attached to a container
    // that the useScroll hook can observe.

    return (
        <section ref={containerRef} className="relative bg-neutral-950">
            {mounted ? (
                <>
                    <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden border-y border-neutral-900">
                        <Container className="h-full w-full flex items-center">
                            <div className="grid grid-cols-1 lg:grid-cols-1 w-full">

                                {/* LEFT: Text Content */}
                                <div className="relative col-span-1 lg:col-span-12 h-[60vh] lg:h-[70vh] flex items-center pl-8 sm:pl-12 lg:pl-16">
                                    {/* Dots - Fixed positioning and increased left padding */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 sm:gap-6 z-20">
                                        {chapters.map((ch, i) => (
                                            <ProgressDot key={ch.id} scrollYProgress={scrollYProgress} index={i} theme={ch.theme} />
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full h-full">
                                        <div className="relative col-span-1 lg:col-span-7 h-full flex items-center">
                                            {chapters.map((chapter, index) => (
                                                <StorySlideItem
                                                    key={chapter.id}
                                                    chapter={chapter}
                                                    index={index}
                                                    scrollYProgress={scrollYProgress}
                                                />
                                            ))}
                                        </div>

                                        {/* RIGHT: Visual Content (hidden on mobile, but part of the inner grid) */}
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

                            </div>
                        </Container>
                    </div>

                    {/* Scroll Height - Increased for better sensitivity/smoothness */}
                    <div className="h-[400vh] pointer-events-none" />
                </>
            ) : (
                <div className="h-[300vh]" />
            )}
        </section>
    );
}
