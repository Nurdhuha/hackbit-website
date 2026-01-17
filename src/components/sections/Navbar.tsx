import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { studioData } from "@/config/studio-data";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
                        <img src="/logo.png" alt="Hackbit Logo" className="w-8 h-8 rounded-full border border-white/10" />
                        <span>Hackbit<span className="text-brand-green">.Studio</span></span>
                    </Link>

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

                    <Button
                        href={`https://wa.me/${studioData.global.whatsappNumber}`}
                        variant="primary"
                        className="hidden sm:inline-flex !bg-brand-green !text-black font-brand-bold !py-2 !h-auto text-xs"
                    >
                        {studioData.global.ctas.consultation}
                    </Button>
                </div>
            </Container>
        </nav>
    );
}
