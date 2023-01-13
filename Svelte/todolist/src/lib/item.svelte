<script>
    export let name = "";
    export let delFn;
    export let check;
    export let checkTask;
    export let important;

    $: if (check) {
        checkTask(true);
    } else {
        checkTask(false);
    }
</script>

<main>
    <div>
        {#if important}
            <i class="fa-solid fa-triangle-exclamation" />
        {/if}
        <input type="checkbox" name="check" id="check" bind:checked={check} />
    </div>

    <h1 class={check ? "tachado" : "normal"}>{name}</h1>
    <button on:click={delFn}>x</button>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        color: black;
        background-color: white;
        opacity: 0.8;
        border-radius: 0.5rem;
        width: 90%;
        height: 4rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin: 1rem;
    }
    h1 {
        font-size: 1.5rem;
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 0.8rem;
        border: 0px;
        background-color: gray;
        box-shadow: rgba(58, 61, 64, 0.2) 0px 8px 24px;
    }
    button:hover {
        background-color: rgb(205, 205, 205);
        cursor: pointer;
    }

    .tachado {
        text-decoration: line-through;
        color: red;
    }
    .normal {
        text-decoration: none;
    }
</style>
