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
    } from "lucide-svelte";

    onMount(() => {
        theme.init();
    });

    // Derived state for current language translations
    let t = $derived(i18n.t);
</script>

<div
    class="min-h-screen p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center transition-colors duration-500 bg-gray-50 dark:bg-gray-950 font-sans"
>
    <div
        class="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min md:auto-rows-[180px] gap-4"
    >
        <!-- 1. About / Hero Card (2x2) -->
        <div
            class="sm:col-span-2 sm:row-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden h-[380px] sm:h-auto"
        >
            <div
                class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-6">
                    <div
                        class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400"
                    >
                        <User size={20} />
                    </div>
                    <span
                        class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                    >
                        {t.sections.about}
                    </span>
                </div>
                <h1
                    class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
                >
                    {t.hero.greeting} <br />
                    <span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                    >
                        Wibowo
                    </span>
                </h1>
                <p
                    class="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md"
                >
                    {t.hero.description}
                </p>
            </div>
            <div class="flex flex-wrap gap-3 mt-8 relative z-10">
                <button
                    class="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm shadow-lg shadow-gray-200 dark:shadow-none hover:scale-105 active:scale-95 transition-all"
                >
                    {t.actions.contact}
                </button>
                <button
                    class="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition-all"
                >
                    {t.actions.downloadCV}
                </button>
            </div>
        </div>

        <!-- 2. Theme & Language (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-white dark:bg-gray-900 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden h-[180px]"
        >
            <!-- Top: Theme -->
            <div class="flex items-center justify-between w-full">
                <span
                    class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest"
                    >{t.nav.theme}</span
                >
                <button
                    onclick={() => theme.toggle()}
                    class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-90 border border-transparent hover:border-orange-200 dark:hover:border-yellow-900/50"
                    aria-label="Toggle Theme"
                >
                    {#if theme.isDark}
                        <Moon
                            size={20}
                            class="text-yellow-400 fill-yellow-400"
                        />
                    {:else}
                        <Sun size={20} class="text-orange-500" />
                    {/if}
                </button>
            </div>
            <div class="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
            <!-- Bottom: Language -->
            <div class="flex items-center justify-between w-full">
                <span
                    class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest"
                    >{t.nav.language}</span
                >
                <button
                    onclick={() => i18n.toggle()}
                    class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-90 border border-transparent hover:border-blue-200 dark:hover:border-blue-900/50 flex items-center justify-center font-bold text-sm"
                >
                    {i18n.current.toUpperCase()}
                </button>
            </div>
        </div>

        <!-- 3. Socials (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 flex flex-col justify-center items-center text-white relative overflow-hidden group shadow-lg shadow-indigo-200 dark:shadow-none h-[180px]"
        >
            <div
                class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
            ></div>
            <div class="flex gap-4 z-10">
                <a
                    href="https://github.com"
                    target="_blank"
                    class="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:-translate-y-1 border border-white/10"
                    ><Github size={24} /></a
                >
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    class="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:-translate-y-1 border border-white/10"
                    ><Linkedin size={24} /></a
                >
            </div>
            <p
                class="mt-4 font-medium text-indigo-100 z-10 text-xs tracking-widest uppercase"
            >
                Connect
            </p>
        </div>

        <!-- 4. Achievements (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-yellow-50 dark:bg-yellow-900/10 rounded-3xl p-6 border border-yellow-200 dark:border-yellow-900/30 flex flex-col justify-center relative overflow-hidden group h-[180px]"
        >
            <div
                class="absolute top-4 right-4 text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors rotate-12"
            >
                <Award size={64} />
            </div>
            <div
                class="bg-yellow-100 dark:bg-yellow-900/30 w-10 h-10 rounded-xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-3 z-10"
            >
                <Award size={20} />
            </div>
            <h3
                class="font-bold text-gray-900 dark:text-yellow-100 z-10 relative text-sm uppercase tracking-wider"
            >
                {t.sections.achievements}
            </h3>
            <div
                class="text-xs text-gray-600 dark:text-yellow-200/70 mt-2 z-10 relative"
            >
                <p class="font-bold text-gray-800 dark:text-yellow-50">
                    {t.achievementList[0].title}
                </p>
                <p class="mt-0.5 opacity-80">{t.achievementList[0].event}</p>
            </div>
        </div>

        <!-- 5. Experience (1x2) -->
        <div
            class="col-span-1 lg:row-span-2 bg-gray-900 dark:bg-black text-white rounded-3xl p-6 border border-gray-800 flex flex-col relative overflow-hidden group shadow-xl h-[380px]"
        >
            <div
                class="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"
            ></div>
            <div class="flex items-center gap-2 text-green-400 mb-6 z-10">
                <Briefcase size={18} />
                <h3 class="font-bold text-[10px] uppercase tracking-[0.2em]">
                    {t.sections.experience}
                </h3>
            </div>

            <div
                class="overflow-y-auto custom-scrollbar pr-2 space-y-8 z-10 flex-1 relative mb-4"
            >
                <div
                    class="absolute left-[7px] top-2 bottom-4 w-0.5 bg-gray-800"
                ></div>
                {#each t.experienceList as exp}
                    <div class="relative pl-6 group/exp">
                        <div
                            class="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900 group-hover/exp:bg-green-500 group-hover/exp:scale-110 transition-all"
                        ></div>
                        <p
                            class="text-[9px] text-gray-500 mb-0.5 font-mono uppercase tracking-wider"
                        >
                            {exp.period}
                        </p>
                        <h4
                            class="font-bold text-sm text-green-100 group-hover/exp:text-green-400 transition-colors leading-tight"
                        >
                            {exp.role}
                        </h4>
                        <p class="text-[11px] text-gray-500 mt-0.5">
                            {exp.company}
                        </p>
                        <p
                            class="text-[10px] text-gray-400 mt-2 line-clamp-2 group-hover/exp:line-clamp-none transition-all duration-300"
                        >
                            {exp.desc}
                        </p>
                    </div>
                {/each}
            </div>
            <button
                class="w-full py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-all active:scale-95 z-10"
            >
                {t.actions.readMore}
            </button>
        </div>

        <!-- 6. Projects (2x2) -->
        <div
            class="sm:col-span-2 row-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 flex flex-col relative overflow-hidden group h-[380px]"
        >
            <div
                class="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all"
            ></div>

            <div class="flex justify-between items-center mb-6 z-10">
                <div>
                    <div
                        class="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2"
                    >
                        <Hash size={18} />
                        <span
                            class="text-[10px] font-bold uppercase tracking-widest"
                            >{t.nav.projects}</span
                        >
                    </div>
                    <h3
                        class="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white"
                    >
                        {t.sections.projects}
                    </h3>
                </div>
                <a
                    href="/projects"
                    class="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-90"
                >
                    <ExternalLink
                        size={18}
                        class="text-gray-600 dark:text-gray-400"
                    />
                </a>
            </div>

            <div
                class="overflow-y-auto custom-scrollbar pr-2 flex-1 z-10 space-y-4"
            >
                {#each t.projectList as project}
                    <div
                        class="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl hover:scale-[1.01] transition-transform cursor-pointer border border-transparent hover:border-purple-200 dark:hover:border-purple-900/50 group/proj flex gap-4"
                    >
                        <div
                            class="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-purple-600 dark:text-purple-400"
                        >
                            <Code size={24} />
                        </div>
                        <div>
                            <h4
                                class="font-bold text-gray-900 dark:text-white mb-1"
                            >
                                {project.title}
                            </h4>
                            <p
                                class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 group-hover/proj:line-clamp-none transition-all"
                            >
                                {project.desc}
                            </p>
                            {#if project.tech}
                                <div class="flex flex-wrap gap-2 mt-3">
                                    {#each project.tech as tag}
                                        <span
                                            class="text-[9px] font-bold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                        >
                                            {tag}
                                        </span>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- 7. Tech Stack (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col justify-center gap-4 h-[180px]"
        >
            <div
                class="flex items-center gap-2 text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-2"
            >
                <Cpu size={16} />
                <span class="text-[9px] font-bold uppercase tracking-widest"
                    >Stack</span
                >
            </div>
            <div
                class="flex flex-wrap gap-2 overflow-y-auto custom-scrollbar max-h-24"
            >
                {#each ["Svelte 5", "Tailwind 4", "Vite", "TypeScript", "Node.js", "Figma", "PostgreSQL"] as tech}
                    <span
                        class="px-2.5 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                    >
                        {tech}
                    </span>
                {/each}
            </div>
        </div>

        <!-- 8. Location (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-blue-600 text-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group h-[180px] shadow-lg shadow-blue-200 dark:shadow-none"
        >
            <div
                class="absolute inset-0 bg-black/10 transition-opacity opacity-0 group-hover:opacity-100"
            ></div>
            <div
                class="z-10 bg-white/20 w-fit p-2.5 rounded-xl backdrop-blur-md border border-white/20"
            >
                <MapPin size={20} />
            </div>
            <div class="z-10">
                <p
                    class="text-[10px] opacity-70 uppercase tracking-[0.2em] font-bold"
                >
                    Location
                </p>
                <p class="font-bold text-xl tracking-tight">Jakarta, ID</p>
            </div>
            <div
                class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform"
            >
                <Globe size={100} />
            </div>
        </div>

        <!-- 9. Quote (1x1) -->
        <div
            class="col-span-1 row-span-1 bg-gray-50 dark:bg-gray-900 text-gray-400 rounded-3xl p-6 flex flex-col justify-center items-center text-center italic relative border border-gray-200 dark:border-gray-800 h-[180px]"
        >
            <Quote size={20} class="text-blue-500 mb-3 opacity-50" />
            <p class="text-[11px] leading-relaxed z-10 font-medium px-4">
                "Simplicity is the ultimate sophistication."
            </p>
            <span
                class="text-[9px] mt-3 opacity-60 uppercase not-italic font-bold tracking-[0.2em] dark:text-gray-500 text-gray-400"
                >- da Vinci</span
            >
        </div>
    </div>

    <footer
        class="mt-12 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60"
    >
        &copy; {new Date().getFullYear()} Wibowo Portfolio &bull; Svelte 5 &bull;
        Tailwind 4
    </footer>
</div>
