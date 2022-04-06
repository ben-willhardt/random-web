<script>
    import DarkmodeSwitch from "./DarkmodeSwitch.svelte";
    import { onMount } from 'svelte';

    let dark_icon_url = "./silverbutton-rand.png";
    let light_icon_url = "./button-rand.png";

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

<nav class="transition duration-300 dark:bg-zinc-900 shadow-md">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center w-12 ml-1">
            <img id="light-icon" class="h-12 w-auto" src="{light_icon_url}" alt="Random">
            <img id="dark-icon" class="hidden h-12 w-auto" src="{dark_icon_url}" alt="Random">
          </div>
          <div class="flex-1 flex items-center justify-center mr-10">
            <h1 class="text-2xl">
                Random
            </h1>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <DarkmodeSwitch/>
        </div>
      </div>
    </div>
  </nav>