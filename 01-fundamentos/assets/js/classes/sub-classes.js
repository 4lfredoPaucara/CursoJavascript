

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

class Heroe extends Persona{

    clan = 'Sin Clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Bufalos Mojados';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const pedro = new Heroe('Pedro Picapiedra' , 'Pedro', 'yabadabadu');
//const ironman = new Persona ('Tony Stark', 'Ironman', 'Yo soy Ironman');


console.log( pedro );
pedro.quienSoy();