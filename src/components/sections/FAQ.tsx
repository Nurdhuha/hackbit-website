"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";

export default function FAQ() {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialFAQCount = 4;
    const hasMore = studioData.faq.length > initialFAQCount;
    const visibleFaqs = isExpanded ? studioData.faq : studioData.faq.slice(0, initialFAQCount);

    return (
        <section id="faq" className="py-24 bg-black">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-neutral-400">
                            Masih ragu? Berikut jawaban untuk pertanyaan yang sering diajukan klien kami.
                        </p>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <div className="relative">
                            <div className="space-y-4">
                                {visibleFaqs.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group p-6 rounded-2xl bg-neutral-900 border border-neutral-800 transition-all hover:border-neutral-700"
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className="font-medium text-white text-lg">{item.question}</h3>
                                        </div>
                                        <p className="mt-4 text-neutral-400 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Masking Gradient for Collapsed State */}
                            <AnimatePresence>
                                {!isExpanded && hasMore && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none z-10"
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {hasMore && (
                            <div className="relative z-20">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="flex items-center gap-2 mt-6 mx-auto lg:mx-0 px-6 py-3 rounded-full border border-neutral-800 bg-black text-white font-medium hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
                                >
                                    <span>{isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua FAQ"}</span>
                                    {isExpanded ? (
                                        <ChevronUp className="w-4 h-4 text-brand-green group-hover:-translate-y-0.5 transition-transform" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-brand-green group-hover:translate-y-0.5 transition-transform" />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
