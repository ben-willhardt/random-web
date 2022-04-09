<script context="module">
    export const prerender = true;
</script>

<script>
    import EntryField from "$lib/components/EntryField.svelte";
    import {rotateIcon, showOverlay, changeOverlayContent} from "$lib/ui-utils.js";
    import OptionsView from "$lib/components/OptionsView.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import { getRandom } from "$lib/stores/resultStore";

    let mode = 'selection';
</script>

<Overlay/>
<div class="container h-[calc(100%_-_h-14_-_m-2)] mx-auto max-w-xl mt-14">
    <div class="pt-5 m-2 h-full">
        <div class="ml-2 mr-2 mb-1 h-11">
            <EntryField/>
        </div>
        <div class="flex flex-col h-[calc(100%_-_h-11_-_m-2_-_h-16)] sm-height:h-[calc(100%_-_theme('height.11'))] w-full items-stretch p-2">
            <OptionsView/>
        </div>
    </div>
</div>
<div class="absolute bottom-0 sm-height:bottom-[-4.5rem] left-0 w-full h-16 mb-2">
    <div class="container mx-auto max-w-xl pl-2 pr-2">
        <!-- <div class="flex items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
            <span class="flex-1 text-center overflow-auto">{#if result.text !== '' } {result.text} {:else} &nbsp; {/if}</span>
        </div> -->
        <div class="flex flex-row">
            <button type="button" on:click={() => {getRandom(); changeOverlayContent('result-'+mode); rotateIcon(); showOverlay();}} class="flex-grow-0 w-full h-16 bg-violet-600  dark:bg-violet-700 text-white dark:text-zinc-100 hover:bg-violet-600 dark:hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-3xl p-2.5">
                R@ŊðØm
            </button>
            <button type="button" on:click={() => {changeOverlayContent('settings'); rotateIcon(); showOverlay();}} class="flex-none ml-2 w-16 h-16 text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5 pl-5">
                <div class="grid grid-col-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>    
            </button>
        </div>
    </div>
   
</div>