<script>
    let display = 0;
    let num1 = 0;
    let num2 = 0;
    let operador = "";
    const tecla = (num) => {
        display = parseInt(display + num);
    };
    const suma = () => {
        num1 = display;
        display = 0;
        operador = "+";
    };

    const resta = () => {
        num1 = display;
        display = 0;
        operador = "-";
    };
    const multi = () => {
        num1 = display;
        display = 0;
        operador = "*";
    };
    const div = () => {
        num1 = display;
        display = 0;
        operador = "/";
    };

    const resultado = () => {
        num2 = display;
        switch (operador) {
            case "+":
                display = parseInt(num1 + num2);
                break;
            case "-":
                display = parseInt(num1 - num2);
                break;
            case "*":
                display = parseInt(num1 * num2);
                break;
            case "/":
                display = parseFloat(num1 / num2);
                break;

            default:
                break;
        }
    };

    const reset = () => {
        display = 0;
        num1 = 0;
        num2 = 0;
        operador = "";
    };
</script>

<main>
    <input type="text" value={display} />
    <div class="calc">
        <button on:click={() => tecla("2")}>2</button>
        <button on:click={() => tecla("8")}>8</button>
        <button on:click={() => tecla("9")}>9</button>
        <button on:click={() => tecla("4")}>4</button>
        <button on:click={() => tecla("5")}>5</button>
        <button on:click={() => tecla("6")}>6</button>
        <button on:click={() => tecla("1")}>1</button>
        <button on:click={() => tecla("2")}>2</button>
        <button on:click={() => tecla("3")}>3</button>
        <button on:click={suma}>+</button>
        <button on:click={() => tecla("0")}>0</button>
        <button on:click={resultado}>=</button>
        <button on:click={reset}>C</button>
        <button on:click={resta}>-</button>
        <button on:click={multi}>*</button>
        <button on:click={div}>/</button>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 2rem;
    }
    .calc {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
    button:hover {
        background-color: rgb(58, 57, 57);
    }

    button:active {
        background-color: rgb(74, 73, 73);
    }
</style>
