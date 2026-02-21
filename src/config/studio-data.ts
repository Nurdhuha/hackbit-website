export const studioData = {
    global: {
        brandName: "Hackbit Studio",
        whatsappNumber: "6285126075886",
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
        // socialProof: "Dipercaya oleh 10+ Bisnis Lokal",
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
            price: "1.5jt",
            originalPrice: "2.9jt",
            description: "Solusi lengkap untuk meningkatkan konversi penjualan.",
            features: ["Fitur WA Rotator", "Admin Panel Sederhana", "Kecepatan < 1 Detik", "Analytics Setup", "Prioritas Support", "Revisi Unlimited"],
            highlight: true,
            badge: "Launching Promo",
            isPromo: true
        },
        {
            name: "Enterprise",
            price: "",
            description: "Untuk sistem kompleks dan integrasi khusus.",
            features: ["AI Automation/AI Agents", "Custom Database", "Payment Gateway", "Micro SaaS", "Mobile Apps (PWA)"],
            highlight: false
        }
    ],
    techStack: [
        { name: "Next.js", color: "#FFFFFF" },
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Framer Motion", color: "#BC4077" },
        { name: "TypeScript", color: "#3178C6" },
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
        },
        {
            question: "Apa yang termasuk dalam paket Enterprise?",
            answer: "Paket Enterprise dirancang untuk sistem yang lebih kompleks seperti Micro SaaS, dashboard admin kustom, integrasi AI Automation, hingga aplikasi mobile (PWA). Pengerjaan dan biaya akan disesuaikan berdasarkan skala dan spesifikasi teknis yang Anda butuhkan."
        },
        {
            question: "Apa itu Micro SaaS dan bagaimana Anda bisa membantu kami?",
            answer: "Micro SaaS adalah software berbasis langganan yang fokus pada solusi untuk masalah spesifik perusahaan Anda atau memberikan solusi untuk niche pasar tertentu. Kami membantu Anda membangun fondasi teknisnya, mulai dari sistem login, database, hingga integrasi pembayaran (Payment Gateway), sehingga Anda bisa fokus pada pertumbuhan bisnis."
        },
        {
            question: "Apa yang dimaksud dengan AI Agent/Agentic AI?",
            answer: "Berbeda dengan chatbot biasa, AI Agent adalah sistem asisten cerdas yang bisa melakukan tugas secara mandiri (Agentic Workflow). Misalnya: melakukan riset otomatis, menjadi asisten CS yang bisa memproses pesanan, hingga mengotomatisasi input data 24/7 untuk meningkatkan efisiensi operasional Anda."
        }
    ]
};
