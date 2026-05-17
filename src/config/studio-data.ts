export const studioData = {
    global: {
        brandName: "Hackbit Studio",
        whatsappNumber: "6285126075886",
        ctas: {
            consultation: "Konsultasi Gratis",
            liveDemo: "Lihat Cara Kerja",
            contact: "Hubungi Kami",
        }
    },
    navbar: {
        links: [
            { label: "Solusi", href: "#automation" },
            { label: "Harga", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
        ],
    },
    hero: {
        headline: "Otomatiskan Bisnis Anda, Lipatgandakan Efisiensi.",
        subheadline: "Tinggalkan proses manual yang memakan waktu dan rawan error. Kami membangun sistem automasi pintar agar Anda bisa fokus pada pertumbuhan bisnis.",

    },
    problem: {
        chapters: [
            {
                id: "trap",
                label: "THE TRAP",
                theme: "red" as const,
                title: "Terjebak dalam rutinitas kerja manual dan entri data berulang.",
                sub: "Karyawan Anda menghabiskan berjam-jam setiap hari untuk memindahkan data, membalas pesan rutin, atau membuat laporan manual.",
                visual: "loading-error"
            },
            {
                id: "cost",
                label: "THE COST",
                theme: "orange" as const,
                title: "Biaya overhead membengkak dan lambatnya respon karena human error.",
                sub: "Kesalahan input data dan proses yang lambat tidak hanya membuat pelanggan lari, tapi juga membuang anggaran operasional Anda secara sia-sia.",
                visual: "revenue-drop"
            },
            {
                id: "solution",
                label: "THE WAY OUT",
                theme: "green" as const,
                title: "Sistem automasi pintar yang bekerja 24/7 tanpa henti.",
                sub: "Hackbit membangun sistem yang mengotomatisasi alur kerja Anda. Dari sinkronisasi data hingga layanan pelanggan otomatis dengan AI.",
                visual: "comparison-table"
            },
        ],
        comparison: [
            { label: "Proses Manual", value: "Berjam-jam", color: "bg-red-500" },
            { label: "Sistem Automasi", value: "Instan", color: "bg-brand-green" }
        ]
    },
    pricing: [
        {
            name: "Custom Business Automation",
            price: "Custom",
            description: "Solusi automasi yang dirancang khusus menyesuaikan dengan skala dan kebutuhan operasional bisnis Anda.",
            features: [
                "Custom Dashboard & Admin Panel",
                "Integrasi AI (Agentic Workflow)",
                "Otomatisasi Input Data & Pelaporan",
                "Integrasi API (WhatsApp, Payment, dll)",
                "Keamanan Data Tingkat Tinggi",
                "Support & Maintenance Prioritas"
            ],
            highlight: true,
            badge: "Best Value",
            isPromo: false
        }
    ],
    techStack: [
        { name: "Next.js", color: "#FFFFFF" },
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Python", color: "#3776AB" },
        { name: "TypeScript", color: "#3178C6" },
    ],
    faq: [
        {
            question: "Apa itu Automasi Bisnis?",
            answer: "Automasi bisnis adalah penggunaan teknologi untuk menjalankan tugas-tugas berulang secara otomatis tanpa campur tangan manusia. Contohnya: otomatis mengirim invoice saat ada pembelian, membalas chat pelanggan dengan AI, atau memindahkan data antar aplikasi."
        },
        {
            question: "Berapa lama proses pembuatan sistem automasi?",
            answer: "Waktu pengerjaan sangat bervariasi tergantung pada kompleksitas alur kerja yang ingin diotomatisasi. Biasanya berkisar antara 2 minggu hingga 2 bulan."
        },
        {
            question: "Sistem seperti apa saja yang bisa diotomatisasi?",
            answer: "Hampir semua alur kerja digital dapat diotomatisasi. Mulai dari manajemen prospek (CRM), sinkronisasi inventaris, pembuatan laporan keuangan, hingga layanan pelanggan menggunakan AI."
        },
        {
            question: "Apakah sistem automasi ini aman?",
            answer: "Sangat aman. Kami menggunakan standar keamanan industri terbaik untuk melindungi data Anda. Data Anda dienkripsi dan sistem kami dirancang dengan praktik keamanan (best practices) modern."
        },
        {
            question: "Bagaimana cara menentukan harga (Custom Price)?",
            answer: "Harga ditentukan setelah sesi konsultasi. Kami akan menganalisis kebutuhan bisnis Anda, menentukan fitur yang tepat, lalu memberikan penawaran harga yang transparan berdasarkan ruang lingkup proyek."
        },
        {
            question: "Apakah saya perlu kemampuan teknis untuk menggunakan sistem ini?",
            answer: "Tidak. Kami akan membuatkan dashboard antarmuka (UI) yang mudah digunakan. Tim Anda hanya perlu menggunakan sistem layaknya menggunakan aplikasi biasa, semua kerumitan teknis berjalan di latar belakang (background)."
        }
    ]
};
