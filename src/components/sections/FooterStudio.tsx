"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { studioData } from "@/config/studio-data";

export default function FooterStudio() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-neutral-900 py-12">
            <Container>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                            <Image
                                src="/logo.png"
                                alt="Hackbit Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border border-white/10"
                            />
                            <span>Hackbit<span className="text-brand-green"> Studio</span></span>
                        </Link>
                        <p className="text-neutral-500 text-sm max-w-xs">
                            Bikin landing page bisnis super cepat dengan loading di bawah 1 detik. Dipercaya 10+ bisnis lokal.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {studioData.navbar.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-500 hover:text-brand-green transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href={`https://wa.me/${studioData.global.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-neutral-500 hover:text-brand-green transition-colors text-sm"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                            <a
                                href="https://instagram.com/hackbit.studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-neutral-500 hover:text-brand-green transition-colors text-sm"
                            >
                                <Instagram className="w-4 h-4" />
                                @hackbit.studio
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-900 text-center text-neutral-600 text-sm">
                    <p>© {currentYear} {studioData.global.brandName}. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
