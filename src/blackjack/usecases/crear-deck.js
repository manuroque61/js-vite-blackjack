import _ from "underscore";
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} cardtype Ejemplo: ['C','D','H','S']
 * @param {Array<String>} cardesp Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (cardtype, cardesp) => {

    if (!cardtype || cardtype === 0) throw new Error("cardtype es obligatorio como un arreglo de string");
    if (!cardesp || cardesp === 0) throw new Error("cardesp es obligatorio como un arreglo de string");

    let deck =[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cardtype ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cardtype ) {
        for( let esp of cardesp ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

