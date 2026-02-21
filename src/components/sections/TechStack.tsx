"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";

export default function TechStack() {
    // Duplicate the stack to create a seamless loop
    const dupeStack = [...studioData.techStack, ...studioData.techStack, ...studioData.techStack];

    return (
        <section className="py-16 bg-black border-y border-neutral-900 overflow-hidden relative">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-12 border-l-2 border-brand-green/30 pl-6">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-2">
                            Engineered With
                        </h3>
                        <p className="text-white text-2xl font-light tracking-tight italic opacity-80">
                            Modern Stack Technology
                        </p>
                    </div>
                </div>
            </Container>

            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-8 items-center whitespace-nowrap px-4"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {dupeStack.map((tech, i) => (
                        <div key={i} className="flex items-center gap-8 group">
                            <span
                                className="text-3xl sm:text-4xl font-black tracking-tighter text-neutral-800 transition-all duration-500 cursor-default"
                                style={{
                                    "--hover-color": tech.color
                                } as React.CSSProperties}
                            >
                                <span className="group-hover:text-(--hover-color) transition-colors duration-500">
                                    {tech.name}
                                </span>
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-brand-green/30 transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
