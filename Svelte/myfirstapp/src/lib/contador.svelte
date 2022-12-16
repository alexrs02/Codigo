<script>
    export let contador = 0;
    const incrementar = () =>{
        contador++
    }
    const decrementar = () =>{
        contador = (contador>0) ? contador - 1 : 0;

    }
</script>

<main>
    <button on:click={incrementar}>+</button>
    <h1>{contador}</h1>
    <button on:click={decrementar}>-</button>
</main>

<style>
    main {
        display: flex;
        column-gap: 1rem;
        align-items: center;
    }

    button {
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        border: none;
        color: white;
        background-color: rgb(33, 32, 32);
        font-size: 1.5rem;
        cursor: pointer;
    }
    button:hover{
        background-color: rgb(58, 57, 57);
    }

    button:active{
        background-color: rgb(74, 73, 73);
    }
</style>
