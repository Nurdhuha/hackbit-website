import { Check, Sparkles } from "lucide-react";
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
        <div className={`relative flex flex-col p-5 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 ${highlight
            ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-brand-green/30 shadow-[0_0_40px_rgba(118,253,15,0.1)] sm:scale-105 z-10"
            : "bg-black border-neutral-800 hover:border-neutral-700"
            } ${isPromo ? "ring-2 ring-brand-green/20 ring-offset-2 sm:ring-offset-4 ring-offset-black" : ""}`}>

            {badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 font-bold text-[10px] sm:text-[11px] rounded-full uppercase tracking-wider z-20 ${isPromo ? "bg-brand-green text-black shadow-[0_0_16px_rgba(118,253,15,0.4)]" : "bg-neutral-800 text-neutral-300"
                    }`}>
                    {isPromo && <Sparkles className="w-3 h-3" />}
                    {badge}
                </div>
            )}

            <div className="mb-4 sm:mb-8">
                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${highlight ? "text-brand-green" : "text-white"}`}>
                    {name}
                </h3>
                <div className="flex flex-col gap-0.5">
                    {originalPrice && (
                        <span className="text-xs sm:text-sm text-neutral-600 line-through decoration-neutral-700 font-medium">
                            {originalPrice}
                        </span>
                    )}
                    {price && (
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">{price}</span>
                            {price !== "Hubungi" && <span className="text-neutral-500 text-xs sm:text-sm">/project</span>}
                        </div>
                    )}
                    {!price && (
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">Custom</span>
                        </div>
                    )}
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {description}
                </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-4 mb-5 sm:mb-8 flex-1">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full shrink-0 mt-0.5 ${highlight ? "bg-brand-green/15 text-brand-green" : "bg-neutral-800 text-neutral-500"}`}>
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button
                href={`https://wa.me/${studioData.global.whatsappNumber}?text=Halo%20Hackbit%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20paket%20${name}%20yang%20ada%20di%20website.`}
                variant={highlight ? "primary" : "outline"}
                className={`w-full justify-center text-sm ${highlight ? "bg-brand-green! text-black! font-bold!" : ""}`}
            >
                Pilih {name}
            </Button>
        </div>
    );
}
