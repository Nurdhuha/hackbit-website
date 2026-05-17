"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Clock, CheckCircle2 } from "lucide-react";

// Animated circular progress meter
function EfficiencyMeter() {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative w-24 h-24">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    {/* Track */}
                    <circle cx="40" cy="40" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                    {/* Animated arc */}
                    <motion.circle
                        cx="40" cy="40" r={radius}
                        fill="none"
                        stroke="url(#meterGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                    />
                    <defs>
                        <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#76fd0f" />
                            <stop offset="100%" stopColor="#3ddb1a" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Counter in center */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.span
                        className="text-2xl font-bold text-white font-mono leading-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        99<span className="text-sm">.9</span>
                    </motion.span>
                    <span className="text-[8px] text-brand-green font-bold">%</span>
                </motion.div>
            </div>
            <motion.span
                className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Efficiency
            </motion.span>
        </div>
    );
}

// Animated automation metric bars
const automationMetrics = [
    { label: "TASKS", value: 0.9, time: "12k+", color: "#76fd0f" },
    { label: "HOURS", value: 0.75, time: "140h+", color: "#3ddb1a" },
    { label: "ERROR", value: 0.05, time: "0.01%", color: "#22c55e" },
];

function AutomationBars() {
    return (
        <div className="flex flex-col gap-2.5 flex-1">
            {automationMetrics.map((metric, i) => (
                <div key={metric.label} className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-500 font-mono w-8 shrink-0">{metric.label}</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: metric.color }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${Math.min(metric.value * 100, 100)}%` }}
                            transition={{ duration: 1.2, delay: 1 + i * 0.2, ease: "easeOut" }}
                        />
                    </div>
                    <motion.span
                        className="text-[10px] text-white font-mono w-8 text-right shrink-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 + i * 0.2 }}
                    >
                        {metric.time}
                    </motion.span>
                </div>
            ))}
        </div>
    );
}

// Code typing animation
const codeLines = [
    { code: "const task = ", highlight: "onNewLead", rest: "(wa);" },
    { code: "task.", highlight: "process", rest: "(withAI);" },
    { code: "await task.", highlight: "sync", rest: "(sheets);" },
];

function WorkflowSnippet() {
    return (
        <div className="bg-black/60 rounded-lg p-3 border border-white/5 font-mono text-[10px] leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="text-neutral-600 ml-1">workflow.ts</span>
            </div>
            {codeLines.map((line, i) => (
                <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + i * 0.4, duration: 0.5 }}
                >
                    <span className="text-neutral-600 mr-2 select-none">{i + 1}</span>
                    <span className="text-neutral-400">{line.code}</span>
                    <span className="text-brand-green">{line.highlight}</span>
                    <span className="text-neutral-400">{line.rest}</span>
                </motion.div>
            ))}
            {/* Blinking cursor */}
            <motion.div
                className="inline-block w-1.5 h-3 bg-brand-green/80 ml-4 mt-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
            />
        </div>
    );
}

// Floating badge around mockup
function FloatingBadge({
    icon,
    label,
    value,
    className,
    delay,
    floatDuration,
    floatDistance,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    className: string;
    delay: number;
    floatDuration: number;
    floatDistance: number;
}) {
    return (
        <motion.div
            className={`absolute bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 px-3 py-2 rounded-xl shadow-xl z-30 ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -floatDistance, 0],
            }}
            transition={{
                opacity: { delay, duration: 0.5 },
                scale: { delay, duration: 0.5 },
                y: { delay: delay + 0.5, duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
            }}
        >
            <div className="flex items-center gap-2">
                {icon}
                <div>
                    <p className="text-[9px] text-neutral-400 leading-none">{label}</p>
                    <p className="text-sm font-bold text-white leading-tight">{value}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function HeroMockup() {
    return (
        <div className="flex-1 w-full max-w-xl lg:max-w-none z-10 relative" style={{ perspective: "1200px" }}>
            {/* 3D Tilted Mockup — hover on desktop, tap on mobile */}
            <motion.div
                className="relative group cursor-pointer"
                initial={{ rotateY: -8, rotateX: 4 }}
                whileHover={{ rotateY: 0, rotateX: 0 }}
                whileTap={{ rotateY: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Main Floating */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Browser Frame */}
                    <div className="relative rounded-xl bg-neutral-900 border border-neutral-800 p-2 shadow-2xl mockup-glow">
                        {/* Browser Chrome */}
                        <div className="h-8 bg-neutral-800 rounded-t-lg flex items-center px-3 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-4 flex-1 h-5 bg-neutral-900 rounded-full flex items-center px-3 text-[10px] text-neutral-500 font-mono">
                                <span className="text-brand-green mr-1">●</span> hackbit.studio
                            </div>
                        </div>

                        {/* Screen Content — Dashboard */}
                        <div className="aspect-16/10 bg-neutral-950 rounded-b-lg overflow-hidden relative">
                            {/* Grid background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-size-[20px_20px]" />

                            {/* Dashboard Layout */}
                            <div className="relative z-10 p-4 h-full flex flex-col gap-3">
                                {/* Header */}
                                <motion.div
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-4 h-4 rounded-sm bg-brand-green/20 flex items-center justify-center">
                                            <Bot className="w-2.5 h-2.5 text-brand-green" />
                                        </div>
                                        <span className="text-[10px] text-white font-semibold">Automation Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-brand-green"
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="text-[9px] text-neutral-500">System Live</span>
                                    </div>
                                </motion.div>

                                {/* Metrics Row */}
                                <div className="flex gap-3 items-start flex-1">
                                    <EfficiencyMeter />
                                    <AutomationBars />
                                </div>

                                {/* Code Snippet */}
                                <WorkflowSnippet />
                            </div>

                            {/* Scan line — subtle */}
                            <motion.div
                                animate={{ top: ["0%", "100%"], opacity: [0.6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-px bg-brand-green/60 shadow-[0_0_12px_rgba(57,255,20,0.5)] z-20"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge
                icon={<div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center"><Clock className="w-3.5 h-3.5 text-brand-green" /></div>}
                label="Active"
                value="24/7/365"
                className="-bottom-4 -left-4 sm:-bottom-6 sm:-left-6"
                delay={1.5}
                floatDuration={5}
                floatDistance={10}
            />
            <FloatingBadge
                icon={<div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center"><Bot className="w-3.5 h-3.5 text-blue-400" /></div>}
                label="Automated"
                value="10k+ Tasks"
                className="-top-4 -right-2 sm:-top-6 sm:-right-4"
                delay={2}
                floatDuration={6}
                floatDistance={8}
            />
            <FloatingBadge
                icon={<div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /></div>}
                label="Accuracy"
                value="99.99%"
                className="top-1/2 -right-4 sm:-right-8 -translate-y-1/2 hidden sm:flex"
                delay={2.5}
                floatDuration={7}
                floatDistance={12}
            />
        </div>
    );
}
