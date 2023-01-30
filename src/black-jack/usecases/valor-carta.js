
/**
 * Función que se encarga de retornar un valor númerico según la carta que recibe en el parámetro
 * @param {String} carta String el cual tiene el nombre de la carta
 * @returns {Number} Valor de la carta
 */
const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
    ( valor === 'A' ) ? 11 : 10
    : valor * 1;
}

export default valorCarta;