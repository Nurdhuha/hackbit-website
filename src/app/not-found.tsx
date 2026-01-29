import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
            <Container>
                <div className="text-center space-y-6">
                    <h1 className="text-8xl font-bold text-brand-green text-glow">404</h1>
                    <h2 className="text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
                    <p className="text-neutral-400 max-w-md mx-auto">
                        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
                    </p>
                    <Link href="/">
                        <Button variant="primary" className="!bg-brand-green !text-black font-bold">
                            Kembali ke Beranda
                        </Button>
                    </Link>
                </div>
            </Container>
        </main>
    );
}
