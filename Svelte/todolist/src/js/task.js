export default class Task {
    constructor(nombre, completado=false,important=false) {
        this.completado = completado;
        this.nombre = nombre;
        this.important = important;
    }
}

