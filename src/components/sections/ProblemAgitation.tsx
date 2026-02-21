"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";
import { Timer, AlertTriangle } from "lucide-react";

export default function ProblemAgitation() {
    return (
        <section className="py-20 bg-neutral-950 border-y border-neutral-900">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-red-500 mb-4 font-mono text-sm"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            <span>THE HARD TRUTH</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            {studioData.problem.text}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-400 text-lg leading-relaxed"
                        >
                            Di era digital, kecepatan adalah uang. Website yang lambat bukan hanya mengganggu,
                            tapi membuat calon pelanggan Anda pergi ke kompetitor bahkan sebelum mereka melihat produk Anda.
                        </motion.p>
                    </div>

                    <div className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800">
                        <div className="space-y-6">
                            {studioData.problem.comparison.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white font-medium">{item.label}</span>
                                        <span className="text-neutral-400">{item.value}</span>
                                    </div>
                                    <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: item.value.includes("<") ? "15%" : "80%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                                            className={`h-full rounded-full ${item.color} shadow-[0_0_15px_rgba(118,253,15,0.3)]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-neutral-800 flex items-start gap-4">
                            <div className="p-2 bg-neutral-800 rounded-lg">
                                <Timer className="w-6 h-6 text-neutral-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm">Google Core Vitals</h4>
                                <p className="text-neutral-500 text-xs mt-1">
                                    Google memprioritaskan website cepat di halaman pencarian (SEO). Hackbit menjamin skor hijau (90+) untuk website Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
