
/**
 * Función que se encarga de crear la carta en el HTML
 * @param { String } carta Nombre de la carta para buscarla en los assets
 * @param { HTMLElement } divCarta Div donde se imprimirá la carta
 */
export const crearCarta = ( carta, divCarta) => {

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
  imgCarta.classList.add('carta');
  divCarta.append( imgCarta );

}