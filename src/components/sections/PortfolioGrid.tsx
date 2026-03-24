import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { studioData } from "@/config/studio-data";

export default function PortfolioShowcase() {
    return (
        <section id="portfolio" className="py-24 bg-black">
            <Container>
                <FadeIn>
                    <div className="max-w-2xl mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Eksplorasi & Template
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Kumpulan contoh desain dan eksplorasi dari kami. Website di bawah ini bukan portofolio klien asli, melainkan simulasi kualitas dan performa tinggi yang bisa kami bangun untuk Anda.
                        </p>
                    </div>
                </FadeIn>

                {/* Bento Grid: first item featured (2-col), rest normal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studioData.portfolio.map((project, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <ProjectCard {...project} featured={idx === 0} />
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
