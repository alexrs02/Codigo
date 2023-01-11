<script>
    export let name = "";
    export let delFn;
    export let check;
    export let checkTask;
    export let important;
</script>

<main>
    {#if important}
        <img src="" alt="" />
    {/if}
    <input
        on:click={checkTask(check)}
        type="checkbox"
        name="check"
        id="check"
        bind:checked={check}
    />
    <h1 class={check ? "tachado" : "normal"}>{name}</h1>
    <button on:click={delFn}>x</button>
</main>

<style>
    main {
        display: flex;
    }

    .tachado {
        text-decoration: line-through;
        color: red;
    }
    .normal {
        text-decoration: none;
    }
</style>
