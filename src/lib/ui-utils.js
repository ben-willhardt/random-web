import { browser } from "$app/env";
import { writable } from "svelte/store";

export const ThemeChangeEvent = new Event('ThemeChange');
export let overlayContent = writable(null);
let overlayOpen = writable(false);

let overlayOpenValue;

overlayOpen.subscribe(value => {
    overlayOpenValue = value;
});

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

export const showOverlay = () => {
    const overlay = document.getElementById('overlay');
    const overlay_bg = document.getElementById('overlay-bg');
    const overlay_container = document.getElementById('overlay-container');

    overlay_bg.classList.remove('hidden');
    overlay_bg.offsetHeight
    overlay_bg.classList.replace('opacity-0', 'opacity-50');
    overlay.classList.replace('-left-full', 'left-0');
    overlayOpen.update(() => true);
}

export const closeOverlay = () => {
    const overlay = document.getElementById('overlay');
    const overlay_bg = document.getElementById('overlay-bg');
    const overlay_container = document.getElementById('overlay-container');

    overlay_bg.classList.replace('opacity-50', 'opacity-0');
    overlay_bg.offsetHeight
    overlay.classList.replace('left-0', '-left-full');
    setTimeout(() => {overlay_bg.classList.add('hidden')}, 300);
    overlayOpen.update(() => false);
}

export const changeOverlayContent = (name) => {
    if (overlayOpenValue) {
        closeOverlay();
        setTimeout(() => {
            overlayContent.update(() => name);
                showOverlay();
            }, 500);
    } else {
        overlayContent.update(() => name);
    }

    console.log('overlayContent: ' + name)
}