import { writable } from "svelte/store";
import { browser } from "$app/env";

export const options = writable([]);

if (browser) {
    options.update((options) => {
        let cache = localStorage.getItem("options");
        if (cache !== null && cache !== "null") {
            console.log("recovered entries from localStorage")
            return JSON.parse(cache);
        }
        return options;
    });
    options.subscribe((options) => localStorage.setItem("options", JSON.stringify(options)));
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
    });
}

export const editOption = (id, newtext) => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].text = newtext;
                break;
            }
        }

        return options;
    });
}