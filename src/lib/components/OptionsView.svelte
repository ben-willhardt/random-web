<script>
    import Option from "$lib/components/Option.svelte";
    import {deleteSelectedOption, deselectAllOption, options, selectAllOption} from "$lib/stores/optionStore.js";
    
    import {flip} from 'svelte/animate';

    let hovering = null;
    let allSelected = false;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move'; 
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        options.update((options) => {
            if (start < target) {
                options.splice(target + 1, 0, options[start]);
                options.splice(start, 1);
            } else {
                options.splice(target, 0, options[start]);
                options.splice(start + 1, 1);
            }
            return options;
        });

        hovering = null;
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        const start = i;
        event.dataTransfer.setData('text/plain', start);
    }

    options.subscribe(options => {
        for (let i = 0; i < options.length; i++) {
            if (!options[i].selected) {
                allSelected = false;
                return options;
            }
        }
        if (options.length > 0) {
            allSelected = true;
        } else {
            allSelected = false;
        }
        return options;
    });
</script>

<div class="flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight bg-white dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
    <div class="relative">
        <div class="grid grid-cols-1">
            <input id="select-all" class="form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 focus:border-violet-500 dark:focus:border-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none" name="selected" type="checkbox" bind:checked={allSelected} on:change={() => { if (allSelected) {selectAllOption()} else {deselectAllOption()}}}/>
            <svg id="tick-all" xmlns="http://www.w3.org/2000/svg" class="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none {allSelected === true ? '' : 'hidden'}" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
    <label for="select-all" class="w-full ml-5">alle auswählen</label>
    <button id="delete-option-all" type="button" on:click={() => {deleteSelectedOption()}} class="text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-1 mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </button>
</div>
<div class="relative flex py-1 items-center">
    <div class="flex-grow border-t border-zinc-700 dark:border-zinc-400"></div>
    <span class="flex-shrink mx-4 text-zinc-700 dark:text-zinc-400">Optionenliste</span>
    <div class="flex-grow border-t border-zinc-700 dark:border-zinc-400"></div>
</div>
<div class="overflow-auto">
    <ul class="w-full">
        {#each $options as option, optionIndex (option.id)}
            <div animate:flip
                draggable={true} 
                on:dragstart={event => dragstart(event, optionIndex)}
                on:drop|preventDefault={event => drop(event, optionIndex)}
                ondragover="return false"
                on:dragenter={() => hovering = optionIndex}
                class:is-hovering={hovering === optionIndex}>
                <Option option={option} optionIndex={optionIndex}/>
            </div>
        {/each}
    </ul>
</div>
