"use strict";
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Dichiarazione delle variabili, sia per la parola inserita che per la verifica effettuata dalla funzione "palindroma".
let parola = prompt("inserisce una parola per capire s'è palindroma o no ");
let verificazione = palindroma(parola);
console.log(verificazione);
/**
 *
 * @param {string} parola  "la parola inserita"
 * @returns {string} "Messaggio dopo il controllo fatto sulla parola"
 */
function palindroma(parola) {
  // Dichiarare 'reverseParola' e convertirla in un array, poi puoi riconvertirla in una stringa."
  let reverseParola = parola.split("").reverse().join("");

  //  Controllare se la parola invertita è uguale alla parola che è stata inserita.

  //   la parola invertita  è uguale a quella inserita
  if (parola === reverseParola) {
    return "la parola" + " : " + parola + " è palindroma";
  }
  //   la parola invertita non è uguale a quella inserita
  else return "la parola" + " : " + parola + " non è palindroma";
}
