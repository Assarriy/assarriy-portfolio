
const translations = {
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            achievements: "Achievements",
            about: "About Me",
            home: "Home"
        },
        hero: {
            greeting: "Hi, I'm",
            role: "Software Engineer & Creative Developer",
            description: "Building digital experiences with passion and precision."
        },
        sections: {
            projects: "Featured Projects",
            experience: "Work Experience",
            achievements: "Honors & Achievements",
            about: "About Me"
        },
        actions: {
            viewProject: "View Project",
            readMore: "Read More",
            downloadCV: "Download CV",
            contact: "Contact Me"
        },
        about: {
            text: "I am a passionate developer focused on creating intuitive and dynamic user experiences. I specialize in modern web technologies and always strive for excellence in every project."
        },
        // Placeholder data
        projectList: [
            { title: "E-Commerce Platform", desc: "A full-stack e-commerce solution with real-time inventory, secure payments (Stripe), and admin dashboard.", tech: ["Next.js", "Prisma", "Tailwind"] },
            { title: "Portfolio V2", desc: "Modern bento-grid portfolio built with Svelte 5, featuring dark mode and i18n support.", tech: ["Svelte 5", "Vite", "Tailwind 4"] },
            { title: "Task Manager Pro", desc: "A productivity app for managing daily tasks, team collaboration, and deadline tracking.", tech: ["React", "Firebase", "Redux"] },
            { title: "AI Image Generator", desc: "Web app that generates images from text using OpenAI DALL-E API and React.", tech: ["OpenAI", "React", "Node.js"] },
            { title: "Weather Dashboard", desc: "Real-time weather tracking with multi-city support and interactive maps.", tech: ["Vue.js", "OpenWeather", "Chart.js"] }
        ],
        experienceList: [
            { role: "Senior Frontend Dev", company: "Tech Corp", period: "2023 - Present", desc: "Leading the frontend team, architecting scalable UI systems, and improving developer experience." },
            { role: "Frontend Developer", company: "StartUp Inc", period: "2021 - 2023", desc: "Developed key features for the main product and improved performance by 40%." },
            { role: "Junior Developer", company: "Code Studio", period: "2019 - 2021", desc: "Contributed to various client projects and learned modern development workflows." },
            { role: "Freelance Developer", company: "Self-Employed", period: "2018 - 2019", desc: "Built personal websites and landing pages for small local businesses." }
        ],
        achievementList: [
            { title: "Best UI Design", event: "Hackathon 2023", desc: "Awarded for most innovative and user-friendly design." },
            { title: "Open Source Contributor", event: "GitHub", desc: "Recognized for significant contributions to major frameworks." },
            { title: "Certified Cloud Practitioner", event: "AWS", desc: "Validated knowledge in cloud computing and infrastructure." }
        ]
    },
    id: {
        nav: {
            projects: "Proyek",
            experience: "Pengalaman",
            achievements: "Pencapaian",
            about: "Tentang Saya",
            home: "Beranda",
            theme: "Tema",
            language: "Bahasa"
        },
        hero: {
            greeting: "Halo, saya",
            role: "Software Engineer & Creative Developer",
            description: "Membangun pengalaman digital dengan semangat dan presisi."
        },
        sections: {
            projects: "Proyek Unggulan",
            experience: "Pengalaman Kerja",
            achievements: "Penghargaan & Pencapaian",
            about: "Tentang Saya"
        },
        actions: {
            viewProject: "Lihat Proyek",
            readMore: "Baca Selengkapnya",
            downloadCV: "Unduh CV",
            contact: "Hubungi Saya"
        },
        about: {
            text: "Saya adalah pengembang yang bersemangat fokus pada menciptakan pengalaman pengguna yang intuitif dan dinamis. Saya berspesialisasi dalam teknologi web modern dan selalu berusaha untuk keunggulan dalam setiap proyek."
        },
        projectList: [
            { title: "Platform E-Commerce", desc: "Solusi e-commerce full-stack dengan inventaris real-time, pembayaran aman (Stripe), dan dashboard admin.", tech: ["Next.js", "Prisma", "Tailwind"] },
            { title: "Portfolio V2", desc: "Portfolio bento-grid modern yang dibangun dengan Svelte 5, menampilkan mode gelap dan dukungan i18n.", tech: ["Svelte 5", "Vite", "Tailwind 4"] },
            { title: "Task Manager Pro", desc: "Aplikasi produktivitas untuk mengelola tugas harian, kolaborasi tim, dan pelacakan tenggat waktu.", tech: ["React", "Firebase", "Redux"] },
            { title: "AI Image Generator", desc: "Aplikasi web yang menghasilkan gambar dari teks menggunakan API OpenAI DALL-E.", tech: ["OpenAI", "React", "Node.js"] },
            { title: "Weather Dashboard", desc: "Pelacakan cuaca real-time dengan dukungan multi-kota dan peta interaktif.", tech: ["Vue.js", "OpenWeather", "Chart.js"] }
        ],
        experienceList: [
            { role: "Senior Frontend Dev", company: "Tech Corp", period: "2023 - Sekarang", desc: "Memimpin tim frontend, merancang sistem UI yang skalabel, dan meningkatkan pengalaman pengembang." },
            { role: "Frontend Developer", company: "StartUp Inc", period: "2021 - 2023", desc: "Mengembangkan fitur kunci untuk produk utama dan meningkatkan performa sebesar 40%." },
            { role: "Junior Developer", company: "Code Studio", period: "2019 - 2021", desc: "Berkontribusi pada berbagai proyek klien dan mempelajari alur kerja pengembangan modern." },
            { role: "Freelance Developer", company: "Bekerja Mandiri", period: "2018 - 2019", desc: "Membangun situs web pribadi dan landing page untuk bisnis lokal kecil." }
        ],
        achievementList: [
            { title: "Desain UI Terbaik", event: "Hackathon 2023", desc: "Diberikan penghargaan untuk desain paling inovatif dan ramah pengguna." },
            { title: "Kontributor Open Source", event: "GitHub", desc: "Diakui atas kontribusi signifikan pada framework utama." },
            { title: "Certified Cloud Practitioner", event: "AWS", desc: "Pengetahuan tervalidasi dalam komputasi awan dan infrastruktur." }
        ]
    }
};

class I18n {
    current = $state('en' as 'en' | 'id');
    t = $derived(translations[this.current]);

    toggle() {
        this.current = this.current === 'en' ? 'id' : 'en';
    }
}

export const i18n = new I18n();
