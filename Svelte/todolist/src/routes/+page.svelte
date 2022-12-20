<script>
    import { text } from "svelte/internal";
    import Item from "../lib/item.svelte";

    let tareas = []

    tareas = localStorage.getItem('lista')
    localStorage.setItem('lista', tareas)

    let textoTarea = ''

    class Task{
        constructor(nombre){
            this.completado = false
            this.nombre = nombre
        }
    }

    const addTask = () =>{
        const nuevaTarea = new Task(textoTarea)
        tareas.push(nuevaTarea)
        textoTarea = ''
        tareas = tareas
    }

    const removeTask = (n) =>{
        tareas.splice(n,1)
        tareas = tareas
    }

</script>


<h1>Lista de tareas</h1>

<input type="text" name="" id="" bind:value={textoTarea}>
<button on:click={addTask}>Añadir tarea</button>

{#each tareas as tarea,i}
    <Item name = {tarea.nombre} delFn={() => removeTask(i)}/>
{/each}