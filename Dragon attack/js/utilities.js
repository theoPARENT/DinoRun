"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max) {
  // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max) {
  let integer;

  /*
   * La boucle s'exécute tant que l'entier n'est pas un nombre (fonction isNaN()) et
   * n'est pas compris entre les arguments min et max.
   */
  do {
    // On demande à l'utilisateur de saisir un nombre entier.
    integer = parseInt(window.prompt(message, 1));
  } while (isNaN(integer) == true || integer < min || integer > max);

  return integer;
}
