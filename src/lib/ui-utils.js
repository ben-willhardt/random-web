export const ThemeChangeEvent = new Event('ThemeChange');

export const rotateIcon = () => {
    const icon = document.getElementById("random-icon");

    icon.classList.add('rotate-360');
    setTimeout(() => {
        icon.classList.add('notransition');
        icon.classList.remove('rotate-360');
        icon.offsetHeight
        icon.classList.remove('notransition');
    }, 301);
}