

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){

        console.log( this.nombre ); // esto retornara undefined
        console.log('Hola a Todos, soy un metodo estatico');
    }
    
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin Frase') {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;

    }

    set setComidaFavorita ( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita (){
        return `La comida favorita de ${ this.nombre } es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi iedentidad es ${ this.codigo } `);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const pedro = new Persona ('Pedro Picapiedra' , 'Pedro', 'yabadabadu');
//const ironman = new Persona ('Tony Stark', 'Ironman', 'Yo soy Ironman');


pedro.miFrase();
//ironman.miFrase();

pedro.setComidaFavorita = 'Costillas de Brontosaurio';

console.log( pedro.getComidaFavorita  );

console.log( pedro );

//Persona._conteo = 2;

console.log('conteo estatico', Persona._conteo);

console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );


// 50 barras fierro de media ==> 
// 45 barras fierro de 3/8 ==>
// 50 barras fierro de 1/4 ==>
