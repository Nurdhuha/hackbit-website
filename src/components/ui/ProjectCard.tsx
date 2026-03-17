import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    demoUrl?: string;
    featured?: boolean;
}

export default function ProjectCard({ title, description, image, demoUrl, featured = false }: ProjectCardProps) {
    return (
        <div className={`group relative rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-500 hover:border-brand-green/50 hover:shadow-[0_0_30px_rgba(118,253,15,0.1)] ${featured ? "md:col-span-2" : ""}`}>
            {/* Image Area — Browser Mockup Frame */}
            <div className={`relative overflow-hidden ${featured ? "aspect-2/1" : "aspect-16/10"}`}>
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 z-10 h-7 bg-neutral-800/95 backdrop-blur-sm flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <div className="ml-3 flex-1 h-4 bg-neutral-900/80 rounded-full flex items-center px-2 text-[8px] text-neutral-500 font-mono">
                        <span className="text-brand-green mr-1">●</span>
                        {demoUrl ? new URL(demoUrl).hostname : "hackbit.studio"}
                    </div>
                </div>

                {/* Screenshot — subtle zoom on hover */}
                <div className="pt-7 h-full bg-neutral-950 overflow-hidden">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-700 font-bold text-4xl select-none">
                            DEMO
                        </div>
                    )}
                </div>

                {/* Hover Overlay — Gradient + CTA */}
                <div className="absolute inset-0 pt-7 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-black font-bold text-sm rounded-full hover:bg-brand-green/90 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-lg shadow-brand-green/20"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Lihat Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-green transition-colors mb-2">
                    {title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}
