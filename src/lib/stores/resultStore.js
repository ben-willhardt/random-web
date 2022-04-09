import { get, writable } from "svelte/store";
import { browser } from "$app/env";
import { options } from "./optionStore";

export const result = writable({
    text: "",
    selected: false,
    id: 0
});

export const getRandom = () => {
    let opts = get(options);
    if (opts.length > 0) {
        result.update(() => opts[Math.floor(Math.random()*opts.length)]);
    }
};