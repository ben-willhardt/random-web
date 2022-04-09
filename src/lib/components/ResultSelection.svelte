<script>
    import { getRandom, result_selection } from "$lib/stores/resultStore";
    import { changeOverlayContent, rotateIcon } from "$lib/ui-utils";
</script>

<div class="m-2 mt-0 mb-0 flex flex-row h-8">
    <h2 class="flex-grow text-2xl">Ergebnisse:<span class="ml-2">Auswahl</span></h2>
    <button type="button" on:click={() => { rotateIcon(); getRandom();}} class="flex-none ml-2 w-8 h-8 text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-1">
        <div class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
        </div>
    </button>
</div>
<div class="flex flex-col justify-center items-center h-[calc(100%_-_theme('height.16')_-_theme('height.8')_-_theme('margin.2'))]">
    <div class="m-auto w-full">
        <span class="m-2">Ergebnis der zufälligen Auswahl:</span>
        <div class="flex mt-1 items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
            <span class="flex-1 text-center overflow-auto">{#if $result_selection.text !== '' } {$result_selection.text} {:else} &nbsp; {/if}</span>
        </div>
    </div>
</div>
<button id="close-overlay-btn" type="button" on:click={() => {rotateIcon(); changeOverlayContent('result-order');}} class="w-full h-16 mb-2 justify-center bg-violet-600  dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-2xl p-2.5">
    Reihenfolge
</button>