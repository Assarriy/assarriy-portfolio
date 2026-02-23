
const translations = {
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            achievements: "Achievements",
            about: "About Me",
            home: "Home",
            theme: "Theme",
            language: "Language"
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Mochammad Wibowo Assariy",
            role: "Software Engineer | IoT Specialist | Leader",
            description: "Building digital solutions with passion. Software Engineering student focused on Web, Android, and IoT."
        },
        sections: {
            projects: "Featured Projects",
            experience: "Experience",
            achievements: "Achievements & Certs",
            about: "About Me",
            skills: "Technical Skills"
        },
        actions: {
            viewProject: "View Project",
            readMore: "Learn More",
            downloadCV: "Download CV",
            contact: "Send Message"
        },
        about: {
            text: "Dedicated Software Engineering student with a passion for building impactful digital solutions. With a strong foundation in Web Development, Android, and IoT/Robotics, I combine technical expertise with proven leadership experience as a two-term ISSC President. I thrive on solving real-world problems and sharing knowledge through technical mentoring."
        },
        projectList: [
            {
                title: "Portfolio v2",
                desc: "Modern bento-grid portfolio built with Svelte 5 and Tailwind CSS 4.",
                tech: ["Svelte 5", "Vite", "Tailwind 4"]
            }
        ],
        experienceList: [
            {
                role: "Volunteer Web Development Instructor",
                company: "IDN Mengajar",
                period: "Sept 2025",
                desc: "Mentored 30+ students in mastering Frontend Web Development using HTML5 and CSS3. Guided participants to build and deploy their first responsive personal landing pages."
            },
            {
                role: "IoT & Robotics Trainer",
                company: "Intensive Program",
                period: "Dec 2023",
                desc: "Architected and delivered an intensive 1-week curriculum for 20+ students. Hands-on workshops with ESP32, ESP8266, and Micro:bit."
            },
            {
                role: "President of ISSC (Student Council)",
                company: "Leadership",
                period: "Mar 2022 - Present",
                desc: "Leading and managing diverse teams to foster collaboration and achieve organizational milestones. Multiple terms of leadership."
            }
        ],
        achievementList: [
            { title: "Excellent Team Award", event: "KRON International Robotic Competition 2023" },
            { title: "3rd Place", event: "National Game Dev Competition (Scratch Olympiad) 2023" },
            { title: "Best IT Graduate", event: "IDN Boarding School Solo Junior High School" },
            { title: "Android App Development", event: "Dicoding Indonesia" },
            { title: "Basic Web Programming", event: "Dicoding Indonesia" }
        ],
        contact: {
            email: "wibowoassariy23@gmail.com",
            whatsapp: "6281249781394",
            linkedin: "linkedin.com/in/wibowo-assariy/",
            location: "Majalengka, West Java, ID"
        }
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
            name: "Mochammad Wibowo Assariy",
            role: "Software Engineer | IoT Specialist | Leader",
            description: "Membangun solusi digital dengan semangat. Siswa RPL dengan fokus pada Web, Android, dan IoT."
        },
        sections: {
            projects: "Proyek Unggulan",
            experience: "Pengalaman",
            achievements: "Penghargaan & Sertifikasi",
            about: "Tentang Saya",
            skills: "Keahlian Teknis"
        },
        actions: {
            viewProject: "Lihat Proyek",
            readMore: "Selengkapnya",
            downloadCV: "Unduh CV",
            contact: "Kirim Pesan"
        },
        about: {
            text: "Siswa Rekayasa Perangkat Lunak yang berdedikasi dengan semangat untuk membangun solusi digital yang berdampak. Dengan fondasi yang kuat di Pengembangan Web, Android, dan IoT/Robotik, saya menggabungkan keahlian teknis dengan pengalaman kepemimpinan sebagai Presiden ISSC dua periode. Saya senang memecahkan masalah dunia nyata dan berbagi pengetahuan melalui pembimbingan teknis."
        },
        projectList: [
            {
                title: "Portfolio v2",
                desc: "Portfolio bento-grid modern dibangun dengan Svelte 5 dan Tailwind CSS 4.",
                tech: ["Svelte 5", "Vite", "Tailwind 4"]
            }
        ],
        experienceList: [
            {
                role: "Volunteer Web Development Instructor",
                company: "IDN Mengajar",
                period: "Sept 2025",
                desc: "Membimbing 30+ siswa dalam menguasai Frontend Web Development menggunakan HTML5 dan CSS3. Memandu peserta untuk membangun landing page pribadi."
            },
            {
                role: "Pelatih IoT & Robotik",
                company: "Program Intensif",
                period: "Des 2023",
                desc: "Merancang dan menyampaikan kurikulum teknis intensif selama 1 minggu untuk 20+ siswa. Workshop tangan dengan ESP32, ESP8266, dan Micro:bit."
            },
            {
                role: "Presiden ISSC (Osis/Majelis)",
                company: "Kepemimpinan",
                period: "Mar 2022 - Sekarang",
                desc: "Memimpin dan mengelola berbagai tim untuk memupuk kolaborasi dan mencapai target organisasi."
            }
        ],
        achievementList: [
            { title: "Excellent Team Award", event: "KRON International Robotic Competition 2023" },
            { title: "Juara 3", event: "Lomba Game Dev Nasional (Scratch Olympiad) 2023" },
            { title: "Lulusan IT Terbaik", event: "SMP IDN Boarding School Solo" },
            { title: "Sertifikasi Android App Development", event: "Dicoding Indonesia" },
            { title: "Sertifikasi Dasar Pemrograman Web", event: "Dicoding Indonesia" }
        ],
        contact: {
            email: "wibowoassariy23@gmail.com",
            whatsapp: "6281249781394",
            linkedin: "linkedin.com/in/wibowo-assariy/",
            location: "Majalengka, Jawa Barat, ID"
        }
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
