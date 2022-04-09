<script context="module">
    export const prerender = true;
</script>

<script>
    import {get} from "svelte/store";
    import EntryField from "$lib/components/EntryField.svelte";
    import {options} from "$lib/stores/optionStore.js";
    import {rotateIcon} from "$lib/ui-utils.js";
    import OptionsView from "$lib/components/OptionsView.svelte";

    let result = {
            text: "",
            selected: false,
            id: 0
        };

    const getRandom = () => {
        let opts = get(options);
        result = opts[Math.floor(Math.random()*opts.length)];
    };
</script>

<div class="container h-[calc(100%_-_h-16_-_m-2)] mx-auto max-w-xl mt-16">
    <div class="pt-5 m-2 h-full">
        <div class="ml-2 mr-2 mb-2 h-11">
            <EntryField/>
        </div>

        <div class="flex flex-col h-[calc(100%_-_h-11_-_m-2_-_h-28)] w-full items-stretch p-2 pt-4 overflow-auto">
            <OptionsView/>
        </div>
    </div>
</div>
<div class="absolute bottom-0 left-0 w-full h-28">
    <div class="container mx-auto max-w-xl pl-2 pr-2">
        <div class="flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
            <span class="flex-1 text-center overflow-auto">{#if result.text !== '' } {result.text} {:else} &nbsp; {/if}</span>
        </div>
        <div>
            <button type="button" on:click={() => {getRandom(); rotateIcon();}} class="w-full h-16 bg-violet-600  dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5">
                R@ŊðØm
            </button>
        </div>
    </div>
   
</div>