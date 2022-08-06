<script>
    import { addOption, options } from "$lib/stores/optionStore";
    import {rotateIcon} from "$lib/ui-utils";

    const addHandler = () => {
        addOption('');
        console.log("added empty option");
        options.update(options => {
            let added_option_id = options[options.length - 1].id;

            setTimeout(() => {
                let input = document.getElementById("edit-option-" + added_option_id);
                // console.log(input);
                input.focus()
            });

            return options;
        });

        setTimeout(rotateIcon);
    }
</script>

<li class="flex items-center justify-center shadow appearance-none rounded w-full h-14 py-2 px-3 leading-tight text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 text-sm mb-1" on:click={() => {addHandler()}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
</li>