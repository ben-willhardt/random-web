<script>
    import {get} from "svelte/store";
    import Option from "../components/Option.svelte";
    import EntryField from "../components/EntryField.svelte";
    import {options} from "../stores/optionStore";

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

<main class="pt-5 grid grid-cols-1 divide-y dark:divide-zinc-800 m-2 max-h-screen">
    <div class="ml-2 mr-2 mb-2">
        <EntryField/>
    </div>
    <div class="h-[55vh] p-2 pt-4 overflow-auto">
        <ul>
            {#each $options as option}
                <Option option={option}/>
            {/each}
        </ul>
    </div>
    <div class="mt-2 pt-2">
        <Option option={result} showActions={false}/>
    </div>
    <div class="mt-2 pt-2">
        <button type="button" on:click={() => getRandom()} class="w-full h-16 bg-violet-500  dark:bg-violet-700 text-zinc-100 dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5">
            R@ŊðØm
        </button>
    </div>
</main>