class Ayudante extends (Profesor, Estudiante){

    aula;
    horasSemana;

    constructor(nombre, edad, grado, materia, carrera, aula, horasSemana) {
        super(nombre, edad, grado, materia, carrera);
        this.aula        = aula;
        this.horasSemana = horasSemana;
    }

    set setAyudante ({aula, horasSemana}){
        this.aula        = aula;
        this.horasSemana = horasSemana;
    };
    get getAyudante (){
        return {
            aula: this.aula,
            horasSemana: this.horasSemana
        }
    };

    saludarAyudante(){
        console.log(
            `Mi nombre es: ${this.nombre} y tengo ${this.edad} años, soy estudiante de la ${this.carrera}
            y ayudante del docente de la materia ${this.materia} del grado ${this.grado}.
            Las clases se llevaran a cabo ${this.horasSemana} horas 2 veces por semana,
            en el aula ${this.aula}`
        );
    }

}

const ayudante = new Ayudante ();

ayudante.nombre = 'Pedro Navajas';
ayudante.edad = '21';
ayudante.materia = 'Estructura de Datos';
ayudante.carrera = 'Ingenieria en Sistemas';
ayudante.grado = 'Segundo';
ayudante.setAyudante ={
    aula: 'B110',
    horasSemana: '8'
};

ayudante.saludarAyudante();

console.log(ayudante);

// Inserción de datos en la tabla
document.getElementById('nombre').textContent = ayudante.nombre;
document.getElementById('edad').textContent = ayudante.edad;
document.getElementById('grado').textContent = ayudante.grado;
document.getElementById('materia').textContent = ayudante.materia;
document.getElementById('carrera').textContent = ayudante.carrera;
document.getElementById('aula').textContent = ayudante.aula;
document.getElementById('horasSemana').textContent = ayudante.horasSemana;