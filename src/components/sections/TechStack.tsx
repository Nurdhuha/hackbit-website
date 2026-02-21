"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";

export default function TechStack() {
    // Duplicate the stack to create a seamless loop
    const dupeStack = [...studioData.techStack, ...studioData.techStack, ...studioData.techStack];

    return (
        <section className="py-12 bg-black border-y border-neutral-900 overflow-hidden">
            <Container>
                <div className="text-center mb-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">
                        Powered By
                    </h3>
                    <p className="text-white/60 text-sm font-medium">
                        Modern Stack Technology
                    </p>
                </div>
            </Container>

            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-12 sm:gap-20 items-center whitespace-nowrap px-10"
                    animate={{
                        x: [0, -1000], // Adjust based on content width if necessary
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {dupeStack.map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-all duration-300 px-6 py-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                        >
                            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-neutral-400 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
}
