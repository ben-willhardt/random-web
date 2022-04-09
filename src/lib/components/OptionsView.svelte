<script>
    import Option from "$lib/components/Option.svelte";
    import {options} from "$lib/stores/optionStore.js";
    
    import {flip} from 'svelte/animate';

    let hovering = null;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move'; 
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        options.update((options) => {
            if (start < target) {
                options.splice(target + 1, 0, options[start]);
                options.splice(start, 1);
            } else {
                options.splice(target, 0, options[start]);
                options.splice(start + 1, 1);
            }
            return options;
        });

        hovering = null;
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        const start = i;
        event.dataTransfer.setData('text/plain', start);
    }
</script>

<ul class="w-full">
    {#each $options as option, optionIndex (option.id)}
        <div animate:flip
            draggable={true} 
            on:dragstart={event => dragstart(event, optionIndex)}
            on:drop|preventDefault={event => drop(event, optionIndex)}
            ondragover="return false"
            on:dragenter={() => hovering = optionIndex}
            class:is-hovering={hovering === optionIndex}>
            <Option option={option} optionIndex={optionIndex}/>
        </div>
    {/each}
</ul>