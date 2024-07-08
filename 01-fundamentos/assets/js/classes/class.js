class Persona {

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin Frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
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
const ironman = new Persona ('Tony Stark', 'Ironman', 'Yo soy Ironman');


pedro.miFrase();
//ironman.miFrase();

pedro.setComidaFavorita = 'Costillas de Brontosaurio'

console.log( pedro.getComidaFavorita  );

console.log( pedro );

// 50 barras fierro de media ==> 
// 45 barras fierro de 3/8 ==>
// 50 barras fierro de 1/4 ==>