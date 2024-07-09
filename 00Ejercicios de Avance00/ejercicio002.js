class Estudiante extends Persona{
    
    grado;

    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    set setGrado(grado) {
        this.grado = grado;
    }

    get getGrado() {

        return this.grado;

    }

    estudianteSaluda(){
        console.log(`Hola soy el Estudiante ${this.nombre}, tengo ${this.edad} y estoy en ${this.grado}`);
    }

}


const estudiante = new Estudiante('Ana', 20, 'Segundo Año');
console.log(estudiante.getNombre); // Ana
console.log(estudiante.getEdad); // 20
console.log(estudiante.getGrado); // Segundo Año

estudiante.estudianteSaluda();

estudiante.setNombre = 'Geronimo';
estudiante.setEdad = '19';
estudiante.setGrado = 'Primero';
estudiante.estudianteSaluda(); // Hola, me llamo María, tengo 21 años y estoy en el grado Tercer Año.