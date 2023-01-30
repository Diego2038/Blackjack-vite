import _ from 'underscore'
// Se puede mezclar las exportaciones separadas como por defecto

export const miNombre = 'Juan Diego';

const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

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