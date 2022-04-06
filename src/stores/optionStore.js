import { writable } from "svelte/store";
import { browser } from "$app/env";

export let options;

if (browser){
    try {
        options = writable( JSON.parse(localStorage.getItem("options")));
    } catch {
        options = writable([]);
    }
    options.subscribe((options) => localStorage.setItem("options", JSON.stringify(options)));
} else {
    options = writable([]);
}

export const addOption = (text) => {
    options.update((cur) => {
        const newOptions = [...cur, {text, selected: false, id:  Date.now()}];
        return newOptions;
    })
}

export const deleteOption = (id) => {
    options.update(options => options.filter(option => option.id !== id));
}

export const selectOption = (id) => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].selected = !options[i].selected;
                break;
            }
        }

        return options;
    })   
}