class Persona {
    
    nombre = '';
    edad   = '';

    constructor(nombre = 'Sin nombre', edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    set setNombre( nombre ){
        this.nombre = nombre.toUpperCase();
    }
    get getNombre(){
        return this.nombre;
    }
    
    set setEdad( edad ){
        this.edad = edad;
    }

    get getEdad(){
        return this.edad;
    }
    
    saludar(){

        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}, es un gusto conocerte`);
    }

}
const persona = new Persona ('', '33');

persona.setNombre='romualdo';
persona.saludar();

console.log(persona)
console.log(persona.getNombre);



