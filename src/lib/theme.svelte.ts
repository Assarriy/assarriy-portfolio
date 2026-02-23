class Theme {
    isDark = $state(false);

    toggle() {
        this.isDark = !this.isDark;
        this.apply();
    }

    init() {
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) {
                this.isDark = saved === 'dark';
            } else if (typeof window !== 'undefined') {
                this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        }
        this.apply();
    }

    apply() {
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', this.isDark);
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        }
    }
}

export const theme = new Theme();
