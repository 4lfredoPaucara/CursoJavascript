class Profesor extends Persona{
    materia;
    especialidad;
    carrera;

    constructor(nombre, edad, materia, especialidad, carrera) {
        super(nombre, edad);
        this.materia = materia;
        this.especialidad = especialidad;
        this.carrera = carrera;
    }

    set setDocente( {materia, especialidad, carrera} ){
        this.materia = materia;
        this.especialidad = especialidad;
        this.carrera = carrera;
    }
    get getDocente(){
        return {
            materia: this.materia,
            especialidad: this.especialidad, 
            carrera: this.carrera};
    }

    saludaDocente(){
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy docente de la materia ${this.materia}\n en la carrera ${this.carrera} y tengo la especialidad ${this.especialidad}`);
    }

}

const docente = new Profesor('','','','','');

docente.setNombre = 'Mario Cadena';
docente.setEdad = '41';
docente.setDocente = {
    materia: 'Estadísticas',
    especialidad: 'Gestion de Aduanas',
    carrera: 'Comercio Internacional'
};

console.log(docente);

docente.saludaDocente();