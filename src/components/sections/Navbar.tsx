"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
                        <Image
                            src="/logo.png"
                            alt="Hackbit Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full border border-white/10"
                        />
                        <span>Hackbit<span className="text-brand-green">.Studio</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {studioData.navbar.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden sm:flex items-center gap-4">
                        <Button
                            href={`https://wa.me/${studioData.global.whatsappNumber}`}
                            variant="primary"
                            className="!bg-brand-green !text-black font-bold !py-2 !h-auto text-xs"
                        >
                            {studioData.global.ctas.consultation}
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:bg-neutral-800 rounded-lg transition-colors"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-neutral-800">
                        <div className="flex flex-col gap-2">
                            {studioData.navbar.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-neutral-400 hover:bg-neutral-800 hover:text-brand-green rounded-lg font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                href={`https://wa.me/${studioData.global.whatsappNumber}`}
                                variant="primary"
                                className="mt-4 !bg-brand-green !text-black font-bold"
                            >
                                {studioData.global.ctas.consultation}
                            </Button>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}
