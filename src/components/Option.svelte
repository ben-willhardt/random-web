<script>
    import {deleteOption, selectOption} from "../stores/optionStore";
    export let option;
    export let showActions = true;
</script>

<li class="flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
    {#if showActions}
    <div class="relative">
        <input id="input_{option.id}" class="form-tick appearance-none bg-white dark:bg-zinc-800 h-6 w-6 border border-gray-300 dark:border-gray-400 rounded-md checked:bg-violet-500 dark:checked:bg-violet-600 checked:border-transparent dark:checked:border-transparent focus:outline-none" name="selected" type="checkbox" checked={option.selected} on:change={() => selectOption(option.id)}/>
        <svg id="tick_{option.id}" xmlns="http://www.w3.org/2000/svg" class="text-white dark:text-zinc-100 h-6 w-6 absolute top-0 left-0 pointer-events-none {option.selected === true ? '' : 'hidden'}" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </div>
    {/if}
    <span class="flex-1 ml-3">{#if option.text !== '' } {option.text} {:else} &nbsp; {/if} </span>
    {#if showActions}
    <button id="delete-entry-content-toggle" type="button" on:click={() => deleteOption(option.id)} class="text-red-600 dark:text-red-500 hover:bg-red-200 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-700 rounded-lg text-sm p-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </button>
    {/if}
</li>