<script>
    import { text } from "svelte/internal";
    import Item from "../lib/item.svelte";
    import { browser } from "$app/environment";

    let tareas = [];
    if (browser) {
        tareas = JSON.parse(localStorage.getItem("lista")) || [];
    }
    const saveList = () => {
        if (browser) {
            localStorage.setItem("lista", JSON.stringify(tareas));
        }
    };

    let textoTarea = "";

    class Task {
        constructor(nombre) {
            this.completado = false;
            this.nombre = nombre;
        }
    }

    const addTask = () => {
        const nuevaTarea = new Task(textoTarea);
        tareas.push(nuevaTarea);
        textoTarea = "";
        tareas = tareas;
        saveList()
    };

    const removeTask = (n) => {
        tareas.splice(n, 1);
        tareas = tareas;
        saveList()
    };

    const recheckTask = (check,n) => {
        tareas[n].completado = check
        console.log(tareas[n])
        tareas = tareas;
        saveList()
    }
</script>

<h1>Lista de tareas</h1>

<input type="text" name="" id="" bind:value={textoTarea} />
<button on:click={addTask}>Añadir tarea</button>

{#each tareas as tarea, i}
    <Item name={tarea.nombre} delFn={() => removeTask(i)} checkTask={(check) => recheckTask(check,i)} check={tarea.completado}/>
{/each}
