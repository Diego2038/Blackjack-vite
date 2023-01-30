import _ from 'underscore'
// Se puede mezclar las exportaciones separadas como por defecto

export const miNombre = 'Juan Diego';

// ! Advertencia
// TODO: para definir mejor lo que tengo que hacer
// ? Pregunta
// * Importante

 
/**
 * Función que se encarga de retornar un mazo aleatorio de cartas
 * @param { Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param { Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns { Array<String> } retorna un mazo de cartas
 */
const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

  if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw 'tiposDeCarta debe de ser un arreglo con elementos';
  if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw 'tiposEspeciales debe de ser un arreglo con elementos';
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

export default crearDeck;