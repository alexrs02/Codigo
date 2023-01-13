<script>


</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <div class="cabecera"></div>
    <slot />
    <div class="footer"></div>
</main>

<style>
    .cabecera{
        height: 3rem;
        background-color: rgb(252, 113, 113);
    }

    .footer{
        height: 2rem;
        background-color: rgb(140, 140, 255);
    }
</style>


