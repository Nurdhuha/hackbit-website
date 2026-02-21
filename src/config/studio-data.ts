export const studioData = {
    global: {
        brandName: "Hackbit Studio",
        whatsappNumber: "62895392576400", // Placeholder, will use generic link
        ctas: {
            consultation: "Konsultasi Gratis",
            liveDemo: "Lihat Live Demo",
            contact: "Hubungi Kami",
        }
    },
    navbar: {
        links: [
            { label: "Portfolio", href: "#portfolio" },
            { label: "Harga", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
        ],
    },
    hero: {
        headline: "Bikin Landing Page bisnis yang Loading < 1 Detik.",
        subheadline: "Stop kehilangan pembeli karena website lemot. Kami bantu bisnis Anda Go Digital dengan teknologi modern terbaru.",
        socialProof: "Dipercaya oleh 10+ Bisnis Lokal",
    },
    problem: {
        text: "Tahukah Anda? 53% pengunjung menutup website jika loading lebih dari 3 detik.",
        comparison: [
            { label: "Website Biasa", value: "3-5s", color: "bg-red-500" },
            { label: "Hackbit Studio", value: "< 1s", color: "bg-brand-green" }
        ]
    },
    portfolio: [
        {
            title: "Dapur Berkah Catering",
            description: "Platform katering online dengan manajemen pesanan real-time.",
            image: "/dapur-page.png",
            demoUrl: "https://dapur-berkah-catering-website.vercel.app/"
        },
        {
            title: "Propnest Property",
            description: "Website untuk properti dengan fitur pemesanan online dan manajemen properti.",
            image: "/propnest-page.png",
            demoUrl: "https://propnest-website.vercel.app/"
        },
        {
            title: "Klinik Sehat Prima",
            description: "Website klinik kesehatan modern dengan fitur pendaftaran online dan informasi layanan.",
            image: "/klinik-page.png",
            demoUrl: "https://klinik-sehat-prima.vercel.app/"
        }
    ],
    pricing: [
        {
            name: "Starter",
            price: "1.5jt",
            description: "Landing page standar untuk branding awal.",
            features: ["Single Page", "Optimasi SEO Basic", "Domain .com (1 Tahun)", "Revisi 2x"],
            highlight: false
        },
        {
            name: "Growth",
            price: "2.9jt",
            description: "Solusi lengkap untuk meningkatkan konversi penjualan.",
            features: ["Fitur WA Rotator", "Admin Panel Sederhana", "Kecepatan < 1 Detik", "Analytics Setup", "Prioritas Support", "Revisi Unlimited"],
            highlight: true,
            badge: "Best Value"
        },
        {
            name: "Enterprise",
            price: "",
            description: "Untuk sistem kompleks dan integrasi khusus.",
            features: ["AI Automation/AI Agents", "Custom Database", "Payment Gateway", "Dashboard Admin", "Mobile Apps (PWA)"],
            highlight: false
        }
    ],
    techStack: [
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "TypeScript" },
    ],
    faq: [
        {
            question: "Berapa lama pengerjaannya?",
            answer: "3-5 hari kerja untuk paket Growth. Untuk paket Enterprise tergantung kompleksitas fitur."
        },
        {
            question: "Apakah dapat domain?",
            answer: "Ya, Paket Starter dan Growth sudah termasuk domain .com gratis selama 1 tahun."
        },
        {
            question: "Kalau mau ganti foto gimana?",
            answer: "Untuk paket Growth, Anda mendapatkan akses Admin Panel untuk mengubah foto dan teks tanpa harus coding."
        },
        {
            question: "Apakah website ini SEO friendly?",
            answer: "Tentu! Kami menggunakan teknologi render modern yang sangat disukai Google (Core Web Vitals Optimized). Struktur HTML kami standar SEO internasional."
        }
    ]
};
