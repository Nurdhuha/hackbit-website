import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";

export default function TechStack() {
    return (
        <section className="py-16 bg-black border-y border-neutral-900 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                            Powered By
                        </h3>
                        <p className="text-white font-medium">
                            Modern Stack Technology
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* 
                   Since we don't have SVGs yet, I'm using text representation with styling.
                   If SVGs were available they'd go here.
                */}
                        {studioData.techStack.map((tech, i) => (
                            <div key={i} className="flex items-center gap-2 group">
                                <span className="text-lg md:text-xl font-bold text-neutral-400 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
