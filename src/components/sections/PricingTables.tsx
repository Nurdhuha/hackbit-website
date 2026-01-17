import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import PricingCard from "@/components/ui/PricingCard";
import { studioData } from "@/config/studio-data";

export default function PricingTables() {
    return (
        <section id="pricing" className="py-24 bg-neutral-950">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-neutral-400">Investasi terbaik untuk pertumbuhan bisnis digital Anda.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
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
