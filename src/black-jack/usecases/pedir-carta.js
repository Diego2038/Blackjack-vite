
 
/**
 * Esta función permite tomar una carta del mazo de cartas (deck)
 * @param {Array<String>} deck Arreglo el cual contiene strings que son las cartas
 * @returns {String}
 */
const pedirCarta = ( deck ) => {
  // if( !deck || deck.length === 0 ) throw ' deck debe ser un arreglo con elementos'
  console.log('Dentro del deck', deck)

  if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}

export default pedirCarta;