<script>
    import { result } from "$lib/stores/resultStore";
</script>

<div class="flex h-full">
    <div class="m-auto w-full">
        <span class="m-2">Ergebnis der zufälligen Auswahl:</span>
        <div class="flex mt-1 items-center shadow appearance-none border rounded w-full py-2 px-3 leading-tight dark:bg-zinc-900 dark:border-zinc-500 focus:dark:bg-zinc-800 mb-1">
            <span class="flex-1 text-center overflow-auto">{#if $result.text !== '' } {$result.text} {:else} &nbsp; {/if}</span>
        </div>
    </div>
</div>