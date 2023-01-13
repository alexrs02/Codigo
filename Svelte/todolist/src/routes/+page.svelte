<script>
    //import { text } from "svelte/internal";
    import Item from "../lib/item.svelte";
    import { browser } from "$app/environment";
    import Task from "../js/task";

    // Array Tareas y el texto introducido
    let tareas = [];
    let textoTarea = "";
    let checkImportant = false;

    // Almacenar la informacion en el browser

    if (browser) {
        tareas = JSON.parse(localStorage.getItem("lista")) || [];
    }
    const saveList = () => {
        if (browser) {
            localStorage.setItem("lista", JSON.stringify(tareas));
        }
    };

    // Añadir una tarea

    const addTask = () => {

        let formateado = textoTarea.trim()

        // Para poder filtrar por el contenido de una propiedad de una clase dentro de un array
        
        let repetido = tareas.filter(t => t.nombre === formateado).length !== 0;
        if (!repetido) {
            const nuevaTarea = new Task(formateado, false, checkImportant);
            tareas.push(nuevaTarea);
            textoTarea = "";
            tareas = tareas;
            saveList();
        }
    };

    // Borrar una tarea

    const removeTask = (n) => {
        tareas.splice(n, 1);
        tareas = tareas;
        saveList();
    };

    // Check a una tarea

    const recheckTask = (check, n) => {
        tareas[n].completado = check;
        tareas = tareas;
        saveList();
    };
</script>

<main>
    <h1>Lista de tareas</h1>

    <div class="intro">
        <input type="text" name="" id="" bind:value={textoTarea} />
        <button on:click={addTask}>Añadir tarea</button>
        <p>Importante</p>
        <input type="checkbox" name="checkIm" id="checkIm" bind:checked={checkImportant}/>
    </div>

    {#each tareas as tarea, i}
        <Item
            name={tarea.nombre}
            delFn={() => removeTask(i)}
            checkTask={(check) => recheckTask(check, i)}
            check={tarea.completado}
            important={tarea.important}
        />
    {/each}
</main>

<style>
    :global(body) {
        margin: 0;
        font-family:'Roboto', sans-serif;
        background-color: rgb(65, 65, 65);
        color: white;
    }
    main {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .intro {
        display: flex;
        align-items: center;
        flex-direction: row;
        column-gap: 1rem;
    }
</style>
