export function themeDark() {
    const htmlTag = document.querySelector('html');

    htmlTag.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}

export function themeLight() {
    const htmlTag = document.querySelector('html');

    htmlTag.classList.remove('dark');
    localStorage.setItem('theme', 'light');
}

export function themeSystem() {
    const htmlTag = document.querySelector('html');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlTag.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlTag.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

function setTheme() {
    const themeStorage = localStorage.getItem('theme');

    if (themeStorage === 'dark') {
        themeDark();
    } else if (themeStorage === 'light') {
        themeLight();
    } else {
        themeSystem();
    }
}

export function toggleTheme() {
    const themeStorage = localStorage.getItem('theme');

    if (themeStorage === 'dark') {
        themeLight();
    } else if (themeStorage === 'light') {
        themeDark();
    }
}

export function getTheme() {
    return localStorage.getItem('theme');
}

setTheme();

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
        setTheme();
    })