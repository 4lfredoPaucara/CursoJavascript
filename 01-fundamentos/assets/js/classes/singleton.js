class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre= '' ) {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Heman');

console.log(instancia1 == instancia2);

console.log(`Nombre en la Instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la Instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la Instancia 3 es: ${instancia3.nombre}`);