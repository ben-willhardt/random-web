<script>
    import DarkmodeSwitch from "./DarkmodeSwitch.svelte";
    import { assets } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        var DarkIcon = document.getElementById('dark-icon');
        var LightIcon = document.getElementById('light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            LightIcon.classList.toggle('hidden');
            DarkIcon.classList.toggle('hidden');
        }

        document.addEventListener('ThemeChange', function () {
            LightIcon.classList.toggle('hidden');
            DarkIcon.classList.toggle('hidden');
        });
    });
</script>

<nav class="absolute top-0 left-0 pt-2 h-16 w-full min-w-[267px] transition duration-300 bg-white dark:bg-zinc-900 shadow-md z-40">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-14 pb-1.5">
        <div class="flex-1 flex items-center justify-center">
          <div class="flex-shrink-0 flex items-center w-12 ml-1">
            <div id="random-icon" class="transition ease-in-out duration-300">
              <img id="light-icon" class="h-12 w-12" src="{assets}/button-rand.png" alt="Random">
              <img id="dark-icon" class="hidden h-12 w-12" src="{assets}/silverbutton-rand.png" alt="Random">
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <h1 class="text-2xl">
                Random
            </h1>
          </div>
        </div>
        <div class="flex items-end static">
          <DarkmodeSwitch/>
        </div>
      </div>
    </div>
  </nav>