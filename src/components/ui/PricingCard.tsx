import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";

interface PricingCardProps {
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: string[];
    highlight: boolean;
    badge?: string;
    isPromo?: boolean;
}

export default function PricingCard({ name, price, originalPrice, description, features, highlight, badge, isPromo }: PricingCardProps) {
    return (
        <div className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${highlight
            ? "bg-neutral-900 border-brand-green shadow-[0_0_40px_rgba(118,253,15,0.15)] scale-105 z-10"
            : "bg-black border-neutral-800 hover:border-neutral-700"
            } ${isPromo ? "ring-2 ring-brand-green/20 ring-offset-4 ring-offset-black" : ""}`}>

            {badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-0.5 font-bold text-[10px] rounded-full uppercase tracking-wider z-20 ${isPromo ? "bg-brand-green text-black animate-bounce" : "bg-neutral-800 text-neutral-300"
                    }`}>
                    {badge}
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-lg font-medium mb-2 ${highlight ? "text-brand-green" : "text-white"}`}>
                    {name}
                </h3>
                <div className="flex flex-col gap-1">
                    {originalPrice && (
                        <span className="text-sm text-neutral-600 line-through decoration-neutral-700 font-medium">
                            {originalPrice}
                        </span>
                    )}
                    {price && (
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white tracking-tight">{price}</span>
                            {price !== "Hubungi" && <span className="text-neutral-500 text-sm">/project</span>}
                        </div>
                    )}
                </div>
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
