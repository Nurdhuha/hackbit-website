import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    demoUrl?: string;
}

export default function ProjectCard({ title, description, image, demoUrl }: ProjectCardProps) {
    return (
        <div className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-brand-green/50 transition-colors duration-300">
            {/* Image / Mockup Area */}
            <div className="aspect-16/10 bg-neutral-950 relative overflow-hidden flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="text-neutral-700 font-bold text-4xl select-none group-hover:text-brand-green/20 transition-colors">
                        DEMO
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">
                        {title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                </div>

                <p className="text-neutral-400 text-sm mb-6 line-clamp-2">
                    {description}
                </p>

                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green text-black font-semibold text-sm rounded-lg hover:bg-brand-green/90 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Lihat Demo
                    </a>
                )}
            </div>
        </div>
    );
}

