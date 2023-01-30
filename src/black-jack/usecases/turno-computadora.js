// turno de la computadora
import { pedirCarta, valorCarta, crearCarta } from "./";
/**
 * 
 * @param { Number } puntosMinimos Puntos mínimos que necesita la computadora
 * @param { Number } puntosComputadora Puntos de la computadora
 * @param { HTMLElement } puntosHTML HTML donde se imprimirán los puntos
 * @param { Element } divCartasComputadora Elemento div donde se imprimirá la carta
 * @param { Array<String> } deck Mazo de cartas
 */
 export const turnoComputadora = ( puntosMinimos, puntosComputadora, puntosHTML, divCartasComputadora, deck = [] ) => {
  if( !puntosMinimos ) throw 'puntosMinimos es necesario';
  if( !puntosComputadora && puntosComputadora !== 0 ) throw 'puntosComputadora es necesario';
  if( !puntosHTML ) throw 'puntosHTML es necesario';
  if( !divCartasComputadora ) throw 'divCartasComputadora es necesario';
 
 
  do {
      const carta = pedirCarta( deck );

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora; 

      crearCarta( carta, divCartasComputadora );

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}