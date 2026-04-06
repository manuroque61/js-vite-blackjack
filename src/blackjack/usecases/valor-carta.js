
/**
 * Esta funcion retorna el valor de la carta que se le pasa.
 * @param {String} carta Ejemplo: "2C"
 * @returns {Number} Retorna el valor de la carta Ej: 10.
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
