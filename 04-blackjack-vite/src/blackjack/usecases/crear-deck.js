import _ from "underscore";
//  export const a='Holamundo';
// Esta funcion crea un nuevo deck

/**
 *s
 * @param {array} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta ) throw new Error ('TiposDeCarta es obligatorio')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    
    return deck;
}

//export default crearDeck;