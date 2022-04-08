<script>
    import { addOption } from "$lib/stores/optionStore.js";
    import {rotateIcon} from "$lib/ui-utils.js";

    let option = '';

    const handleSubmit = () => {
        if (option !== '') {
            addOption(option);
            console.log("stored option:", option);
            option = '';
        }
        setTimeout(rotateIcon);
    }
</script>

<form class="grid place-items-center" on:submit|preventDefault={handleSubmit}>
    <div class="w-full max-w-2xl flex">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-900 dark:border-zinc-400 focus:dark:bg-zinc-800 focus:border-violet-500 dark:focus:border-violet-600" name="option_entry" id="option_entry" type="text" bind:value={option} placeholder="Trage hier deine Optionen ein..."/>
        <div class="relative flex items-center justify-between mx-1">
            <button id="add-option-toggle" type="submit" class="mr-1 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-700 rounded-lg text-sm p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
            </button>
            <button id="delete-entry-content-toggle" type="button" on:click={() => {option = ''; setTimeout(rotateIcon);}} class="text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                  </svg>
            </button>
        </div>
    </div>
</form>
