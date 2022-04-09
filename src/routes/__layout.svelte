<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar/>
<main id="main" class="absolute top-0 left-0 w-full h-full min-w-[267px] z-0">
    <slot/>
</main>