<script lang="ts">
    import { i18n } from "$lib/i18n.svelte";
    import { theme } from "$lib/theme.svelte";
    import { onMount } from "svelte";
    import {
        Sun,
        Moon,
        Globe,
        Github,
        Linkedin,
        Mail,
        ExternalLink,
        Hash,
        Award,
        Briefcase,
        User,
        MapPin,
        Code,
        Cpu,
        Quote,
        GraduationCap,
        Smartphone,
        Radio,
        HardDrive,
        Terminal,
        Menu,
        X,
        ArrowUpRight,
        Zap,
        MessageCircle,
    } from "lucide-svelte";

    onMount(() => {
        theme.init();
    });

    let t = $derived(i18n.t);
    let isMenuOpen = $state(false);

    const skills = {
        languages: [
            "Svelte 5",
            "Dart (Flutter)",
            "Laravel",
            "HTML5",
            "CSS3",
            "TS",
            "SQL",
        ],
        iot: ["ESP32", "ESP8266", "Micro:bit", "Nomokit", "Robotics"],
        tools: ["Figma", "Git", "Canva"],
    };

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            isMenuOpen = false;
        }
    }
</script>

<!-- Floating Premium Navigation -->
<nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
    <div
        class="glass-card rounded-full px-8 py-4 grid grid-cols-2 md:grid-cols-3 items-center border-white/20"
    >
        <!-- Logo Section -->
        <button
            class="flex items-center gap-2 group outline-none justify-self-start"
            onclick={() => scrollTo("hero")}
        >
            <div
                class="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-black group-hover:scale-110 transition-transform"
            >
                <Zap size={18} fill="currentColor" />
            </div>
            <span
                class="font-black text-lg tracking-tighter dark:text-white uppercase"
                >WIBOWO.</span
            >
        </button>

        <!-- Desktop Navigation Items (Centered with Equal Gaps) -->
        <div class="hidden md:flex items-center justify-center gap-12">
            {#each ["projects", "about", "experience", "achievements"] as item}
                <button
                    onclick={() => scrollTo(item)}
                    class="nav-link text-[11px] whitespace-nowrap"
                    >{t.nav[item]}</button
                >
            {/each}
        </div>

        <!-- Controls Section -->
        <div class="flex items-center justify-end gap-4">
            <div
                class="hidden sm:flex items-center gap-1 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/10"
            >
                <button
                    onclick={() => i18n.toggle()}
                    class="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white dark:hover:bg-white/10 transition-colors dark:text-neutral-400 dark:hover:text-white"
                >
                    {i18n.current.toUpperCase()}
                </button>
                <div class="w-px h-4 bg-black/10 dark:bg-white/10"></div>
                <button
                    onclick={() => theme.toggle()}
                    class="p-2 rounded-full hover:bg-white dark:hover:bg-white/10 transition-all group"
                    aria-label="Toggle Theme"
                >
                    {#if theme.isDark}
                        <Sun
                            size={18}
                            class="text-neutral-400 group-hover:text-orange-400 transition-colors"
                        />
                    {:else}
                        <Moon
                            size={18}
                            class="text-neutral-500 group-hover:text-indigo-500 transition-colors"
                        />
                    {/if}
                </button>
            </div>
            <button
                class="md:hidden p-2 text-neutral-500 hover:text-indigo-500 transition-colors"
                onclick={() => (isMenuOpen = !isMenuOpen)}
            >
                {#if isMenuOpen}
                    <X size={24} />
                {:else}
                    <Menu size={24} />
                {/if}
            </button>
        </div>
    </div>
</nav>

<!-- Mobile Overlay -->
{#if isMenuOpen}
    <div
        class="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-32 px-10 md:hidden flex flex-col items-center gap-10"
    >
        {#each ["projects", "about", "experience", "achievements"] as item}
            <button
                onclick={() => scrollTo(item)}
                class="text-3xl font-black tracking-tighter uppercase"
                >{t.nav[item]}</button
            >
        {/each}
        <button
            onclick={() => i18n.toggle()}
            class="text-indigo-500 font-bold tracking-widest uppercase text-sm mt-4"
        >
            SWITCH TO {i18n.current === "en" ? "INDONESIAN" : "ENGLISH"}
        </button>
    </div>
{/if}

<div class="pt-32 pb-20 overflow-x-hidden">
    <!-- HERO SECTION: The "Wow" Factor -->
    <section id="hero" class="max-w-7xl mx-auto px-6 mb-20">
        <div class="flex flex-col items-start gap-6">
            <div
                class="flex items-center gap-3 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] font-mono"
            >
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"
                    ></span>
                    <span
                        class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"
                    ></span>
                </span>
                OPEN TO NEW OPPORTUNITIES
            </div>

            <h1
                class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] dark:text-white"
            >
                {t.hero.greeting} <br />
                <span class="text-gradient drop-shadow-sm"
                    >{t.hero.name.split(" ").slice(1, 2)}</span
                > <br />
                <span class="text-neutral-300 dark:text-neutral-800"
                    >{t.hero.name.split(" ").slice(2, 3)}</span
                >
            </h1>

            <div
                class="flex flex-col md:flex-row md:items-center justify-between w-full mt-10 gap-10"
            >
                <p
                    class="text-xl md:text-2xl font-medium text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed"
                >
                    {t.hero.role} —
                    <span class="dark:text-neutral-200 text-neutral-800"
                        >Bridging hardware and software with leadership.</span
                    >
                </p>
                <div class="flex gap-4">
                    <button
                        class="btn-premium"
                        onclick={() => scrollTo("about")}>GET IN TOUCH</button
                    >
                    <button
                        class="btn-outline-premium group"
                        onclick={() => scrollTo("experience")}
                    >
                        WORKS <ArrowUpRight
                            size={16}
                            class="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- BENTO GRID: Skills & Stats -->
    <section
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-6 mb-32"
    >
        <!-- Big Bento Card: About Bio -->
        <div
            id="about"
            class="md:col-span-4 bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[3rem] p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group"
        >
            <div
                class="absolute top-10 right-10 w-40 h-40 bg-indigo-500/10 blur-[80px] group-hover:scale-150 transition-transform duration-1000"
            ></div>
            <User
                size={120}
                class="absolute -top-10 -left-10 opacity-5 dark:text-white rotate-12"
            />
            <div class="relative z-10">
                <h3
                    class="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 mb-6"
                >
                    {t.sections.about}
                </h3>
                <p
                    class="text-2xl md:text-3xl font-bold dark:text-white leading-tight mb-8"
                >
                    {t.about.text}
                </p>
                <div class="flex gap-10">
                    <div>
                        <p
                            class="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-1"
                        >
                            LOCATION
                        </p>
                        <p class="font-bold dark:text-neutral-300">
                            MAJALENGKA, ID
                        </p>
                    </div>
                    <div>
                        <p
                            class="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-1"
                        >
                            STUDENT AT
                        </p>
                        <p class="font-bold dark:text-neutral-300">
                            IDN BOARDING SCHOOL
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bento Card: Skills Summary -->
        <div
            class="md:col-span-2 glass-card rounded-[3rem] p-10 flex flex-col justify-between border-indigo-500/10 glow-border"
        >
            <div
                class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500"
            >
                <Code size={24} />
            </div>
            <div>
                <h3 class="font-bold text-xl mb-4 dark:text-white">
                    Tech Stack
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each [...skills.languages.slice(0, 4), "Svelte 5", "More"] as s}
                        <span
                            class="px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500"
                            >{s}</span
                        >
                    {/each}
                </div>
            </div>
        </div>

        <!-- Bento Card: Leadership Focus -->
        <div
            class="md:col-span-2 bg-indigo-600 rounded-[3rem] p-10 flex flex-col justify-between text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden"
        >
            <div
                class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-[60px]"
            ></div>
            <div class="z-10 bg-white/20 w-fit p-3 rounded-2xl">
                <Hash size={24} />
            </div>
            <div class="z-10">
                <h3
                    class="text-xs font-black uppercase tracking-[0.4em] mb-2 opacity-70"
                >
                    Leadership
                </h3>
                <p class="text-2xl font-black leading-none">
                    2 TERMS<br /><span class="text-indigo-200"
                        >ISSC PRESIDENT</span
                    >
                </p>
            </div>
        </div>

        <!-- Bento Card: IoT Focus -->
        <div
            class="md:col-span-4 dark:bg-neutral-900 bg-neutral-50 border border-black/5 dark:border-white/5 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10"
        >
            <div
                class="w-24 h-24 shrink-0 rounded-[2rem] bg-teal-500/10 flex items-center justify-center text-teal-500 border border-teal-500/20"
            >
                <Cpu size={48} />
            </div>
            <div>
                <h3
                    class="text-xs font-black uppercase tracking-[0.4em] text-teal-500 mb-2"
                >
                    IoT & Hardware Specialist
                </h3>
                <p class="text-lg font-bold dark:text-neutral-300 leading-snug">
                    Architected solutions using ESP32, ESP8266, and Robotics for
                    intensive tech programs.
                </p>
            </div>
        </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="max-w-7xl mx-auto px-6 mb-40">
        <div
            class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
            <div>
                <h2
                    class="text-xs font-black uppercase tracking-[0.5em] text-neutral-400 mb-4"
                >
                    {t.sections.projects}
                </h2>
                <h3
                    class="text-5xl md:text-6xl font-black tracking-tighter dark:text-white uppercase"
                >
                    Digital <span class="heading-gradient">Creations</span>
                </h3>
            </div>
            <div class="flex gap-2">
                <div
                    class="w-12 h-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center opacity-30 cursor-not-allowed"
                >
                    <ArrowUpRight size={20} class="rotate-180" />
                </div>
                <div
                    class="w-12 h-12 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
                >
                    <ArrowUpRight size={20} />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each t.projectList as project}
                <div
                    class="group relative bg-neutral-50 dark:bg-white/5 rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5 p-4 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                    <div
                        class="aspect-video rounded-[2.2rem] overflow-hidden relative mb-6"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8"
                        >
                            <button
                                class="px-6 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest"
                                >{t.actions.viewProject}</button
                            >
                        </div>
                    </div>
                    <div class="px-6 pb-6">
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.tech as tech}
                                <span
                                    class="text-[9px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full"
                                    >{tech}</span
                                >
                            {/each}
                        </div>
                        <h4
                            class="text-3xl font-black tracking-tighter dark:text-white mb-2 uppercase"
                        >
                            {project.title}
                        </h4>
                        <p
                            class="text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed mb-6"
                        >
                            {project.desc}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- EXPERIENCE SECTION: Interactive Timeline -->
    <section id="experience" class="max-w-7xl mx-auto px-6 mb-32">
        <div
            class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
            <div>
                <h2
                    class="text-xs font-black uppercase tracking-[0.5em] text-neutral-400 mb-4"
                >
                    {t.sections.experience}
                </h2>
                <h3
                    class="text-5xl md:text-6xl font-black tracking-tighter dark:text-white"
                >
                    Professional <span class="heading-gradient">Evolution</span>
                </h3>
            </div>
            <div
                class="h-px flex-1 bg-neutral-100 dark:bg-white/5 mx-10 hidden lg:block"
            ></div>
        </div>

        <div class="space-y-6">
            {#each t.experienceList as exp}
                <div
                    class="group relative soft-card p-10 hover:border-indigo-500/20 glow-border overflow-hidden"
                >
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"
                    ></div>
                    <div
                        class="flex flex-col lg:flex-row gap-10 items-center relative z-10"
                    >
                        <!-- Experience Image Placeholder -->
                        <div
                            class="w-full lg:w-48 aspect-video rounded-2xl overflow-hidden bg-neutral-200 dark:bg-white/10 shrink-0"
                        >
                            <img
                                src={exp.image}
                                alt={exp.role}
                                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                        </div>

                        <div class="lg:w-1/4">
                            <p
                                class="text-xs font-black uppercase tracking-widest text-neutral-400 font-mono mb-2"
                            >
                                {exp.period}
                            </p>
                            <div
                                class="px-4 py-1.5 rounded-full bg-indigo-500/5 text-indigo-500 text-[9px] font-black uppercase w-fit border border-indigo-500/10"
                            >
                                {exp.company}
                            </div>
                        </div>
                        <div class="flex-1">
                            <h4
                                class="text-3xl font-black tracking-tight mb-4 group-hover:text-indigo-500 transition-colors uppercase dark:text-white"
                            >
                                {exp.role}
                            </h4>
                            <p
                                class="text-lg text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed max-w-2xl"
                            >
                                {exp.desc}
                            </p>
                        </div>
                        <div class="lg:w-10 flex lg:justify-end">
                            <div
                                class="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                            >
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- ACHIEVEMENTS: Horizontal High-Contrast -->
    <section id="achievements" class="max-w-7xl mx-auto px-6 mb-32">
        <div class="text-center mb-16">
            <h2
                class="text-xs font-black uppercase tracking-[0.5em] text-neutral-400 mb-4"
            >
                {t.sections.achievements}
            </h2>
            <h3 class="text-5xl font-black tracking-tighter dark:text-white">
                Hall of Fame
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each t.achievementList as item}
                <div
                    class="group relative p-4 rounded-[3rem] bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-[420px]"
                >
                    <!-- Achievement Image Placeholder -->
                    <div
                        class="aspect-square rounded-[2.2rem] overflow-hidden mb-6 bg-neutral-200 dark:bg-white/10 relative"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div
                            class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
                        >
                            <Award size={20} />
                        </div>
                    </div>

                    <div class="px-4">
                        <p
                            class="text-xl font-black tracking-tight dark:text-white uppercase leading-tight mb-3"
                        >
                            {item.title}
                        </p>
                        <p
                            class="text-[10px] font-black uppercase tracking-widest text-neutral-400"
                        >
                            {item.event}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- CONTACT FOOTER: Ultra Visual -->
    <footer class="max-w-7xl mx-auto px-6 mb-10">
        <div
            class="dark:bg-indigo-600 bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden group"
        >
            <div
                class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
            ></div>
            <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20"
            ></div>

            <div class="relative z-10 flex flex-col items-center">
                <h2
                    class="text-5xl md:text-8xl font-black tracking-tighter mb-10"
                >
                    LET'S START A<br />PROJECT TOGETHER
                </h2>
                <div class="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://wa.me/{t.contact.whatsapp}"
                        target="_blank"
                        class="px-10 py-5 rounded-full bg-white text-black font-black text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                    >
                        {t.actions.contact.toUpperCase()}
                        <MessageCircle size={18} />
                    </a>
                    <div class="flex gap-4">
                        <a
                            href="https://{t.contact.linkedin}"
                            target="_blank"
                            class="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                            ><Linkedin size={20} /></a
                        >
                        <a
                            href="https://github.com"
                            target="_blank"
                            class="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all"
                            ><Github size={20} /></a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div
            class="flex flex-col md:flex-row justify-between items-center mt-20 gap-6 opacity-30 px-10"
        >
            <p class="text-[10px] font-black uppercase tracking-[0.5em]">
                {t.hero.name} &bull; 2026
            </p>
            <p class="text-[10px] font-black uppercase tracking-[0.5em]">
                BUILT WITH SVELTE 5 & TAILWIND 4
            </p>
        </div>
    </footer>
</div>

<style>
    :global(body) {
        font-family: "Inter", sans-serif;
    }
</style>
