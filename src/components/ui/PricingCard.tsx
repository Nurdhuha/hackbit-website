import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";

interface PricingCardProps {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlight: boolean;
    badge?: string;
}

export default function PricingCard({ name, price, description, features, highlight, badge }: PricingCardProps) {
    return (
        <div className={`relative flex flex-col p-8 rounded-3xl border ${highlight
            ? "bg-neutral-900 border-brand-green shadow-[0_0_30px_rgba(118,253,15,0.1)] scale-105 z-10"
            : "bg-black border-neutral-800 hover:border-neutral-700"
            }`}>
            {highlight && badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-green text-black font-bold text-xs rounded-full uppercase tracking-wider">
                    {badge}
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-lg font-medium mb-2 ${highlight ? "text-brand-green" : "text-white"}`}>
                    {name}
                </h3>
                {price && (
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">{price}</span>
                        {price !== "Hubungi" && <span className="text-neutral-500">/project</span>}
                    </div>
                )}
                <p className="mt-4 text-sm text-neutral-400">
                    {description}
                </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                        <Check className={`w-5 h-5 shrink-0 ${highlight ? "text-brand-green" : "text-neutral-500"}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button
                href={`https://wa.me/${studioData.global.whatsappNumber}?text=Halo%20Hackbit%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20paket%20${name}%20yang%20ada%20di%20website.`}
                variant={highlight ? "primary" : "outline"}
                className={`w-full justify-center ${highlight ? "bg-brand-green! text-black! font-bold!" : ""}`}
            >
                Pilih {name}
            </Button>
        </div>
    );
}
