<script>
import { browser } from '$app/env';

    import {closeOverlay, overlayContent, rotateIcon, showOverlay} from '$lib/ui-utils';
    import ResultOrder from './ResultOrder.svelte';
    import ResultSelection from './ResultSelection.svelte';
    import Settings from './Settings.svelte';

    let touchstartX = 0
    let touchendX = 0

    if (browser) {
        const slider = document.getElementById('main');

        function handleGesture() {
            if (touchendX < touchstartX) closeOverlay();
            if (touchendX > touchstartX) showOverlay();
        }

        slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        })

        slider.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        })
    }
</script>

<div id="overlay" class="transition-all ease-in-out duration-[500ms] absolute h-full w-full z-20 top-0 -left-full pointer-events-none">
    <div id="overlay-container" class="w-full h-[calc(100%_-_4.5rem_-_theme('margin.2'))] container mx-auto max-w-xl mt-[4.5rem] mb-2 bg-white dark:bg-zinc-900 border rounded border-zinc-200 dark:border-zinc-700 p-2 pointer-events-auto">
        <div class="w-full h-full flex flex-col">
            <div class="flex-grow h-full">
                {#if $overlayContent === null}
                <span>Error: No content specified</span>
                {:else if $overlayContent === 'settings'}
                <Settings/>
                {:else if $overlayContent === 'result-selection'}
                <ResultSelection/>
                {:else if $overlayContent === 'result-order'}
                <ResultOrder/>
                {:else}
                <span>Error: specified content not found</span>
                {/if}
            </div>
            <button type="button" on:click={() => {rotateIcon(); closeOverlay();}} class="flex-grow-0 w-full h-16 justify-center text-zinc-500 dark:text-zinc-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 rounded-lg text-sm p-2.5">
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</div>
<div id="overlay-bg" class="absolute top-0 left-0 h-full w-full z-10 transition-all ease-in-out duration-500 bg-black opacity-0 hidden" on:click={() => {rotateIcon(); closeOverlay();}}></div>
