<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar/>
<div class="container mx-auto max-w-xl">
    <slot/>
</div>