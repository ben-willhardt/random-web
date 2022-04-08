<script context="module">
    export const prerender = true;
</script>

<script>
    import {get} from "svelte/store";
    import Option from "$lib/components/Option.svelte";
    import EntryField from "$lib/components/EntryField.svelte";
    import {options} from "$lib/stores/optionStore.js";
    import {rotateIcon} from "$lib/ui-utils.js";

    let result = {
            text: "",
            selected: false,
            id: 2497433927
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
            <ul class="w-full">
                {#each $options as option}
                    <Option option={option}/>
                {/each}
            </ul>
        </div>
    </div>
</div>
<div class="absolute bottom-0 left-0 w-full h-28">
    <div class="container mx-auto max-w-xl pl-2 pr-2">
        <div class="transform-none">
            <Option option={result} showActions={false} center={true}/>
        </div>
        <div>
            <button type="button" on:click={() => {getRandom(); rotateIcon();}} class="w-full h-16 bg-violet-600  dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5">
                R@ŊðØm
            </button>
        </div>
    </div>
   
</div>