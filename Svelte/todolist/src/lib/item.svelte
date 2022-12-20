<script>
    export let name = ''
    export let delFn 
</script>

<main>
    <input type="checkbox" name="check" id="check">
    <h1>{name}</h1>
    <button on:click={delFn}>x</button>
</main>

<style>
    main{
        display: flex;
    }           
</style>