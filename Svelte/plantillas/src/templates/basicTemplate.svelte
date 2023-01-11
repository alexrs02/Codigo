<script>
    import Footer from "../lib/footer.svelte";
    import Header from "../lib/header.svelte";
    import Nav from "../lib/nav.svelte";

</script>

<main>
    <Header titulo="X Madrid"/>
    <Nav />
    <div class="slot">

        <slot name="x"></slot>
    </div>
    <Footer />

</main>

<style>
    :global(body){
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
    }

    main{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .slot{
        flex-grow: 1;
    }
</style>