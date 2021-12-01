"use strict";

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max) {
  let integer;

  do {
    integer = parseInt(window.prompt(message, 1));
  } while (isNaN(integer) == true || integer < min || integer > max);

  return integer;
}
