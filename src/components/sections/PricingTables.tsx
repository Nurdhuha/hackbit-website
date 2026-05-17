import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import PricingCard from "@/components/ui/PricingCard";
import { studioData } from "@/config/studio-data";

export default function PricingTables() {
    return (
        <section id="pricing" className="py-14 sm:py-24 bg-neutral-950 scroll-mt-20">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Harga Fleksibel Sesuai Kebutuhan</h2>
                    <p className="text-neutral-400">Solusi automasi yang disesuaikan dengan skala dan model operasional bisnis Anda.</p>
                </div>

                <div className="max-w-xl mx-auto">
                    {studioData.pricing.map((plan, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <PricingCard {...plan} />
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
