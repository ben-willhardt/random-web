import { get, writable } from "svelte/store";
import { browser } from "$app/env";
import { options } from "./optionStore";

export const result_selection = writable({
    text: "",
    selected: false,
    id: 0
});
export const result_order = writable([]);

export const getRandom = () => {
    let opts = get(options);
    if (opts.length > 0) {
        result_selection.update(() => opts[Math.floor(Math.random()*opts.length)]);
    }
};

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const getRandomOrder = () => {
    let opts = get(options);
    
    result_order.update(() => shuffle([...opts]));
};

export const getBothResults = () => {
    getRandom();
    getRandomOrder();
}