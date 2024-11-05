// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari
let pariOdispari = prompt("Fai la tua scelta (Pari , Dispari)");
if (pariOdispari === "Pari" || pariOdispari === "Dispari") {
  console.log("L'utente ha scelto: " + pariOdispari);
} else {
  console.log("inserisce una scelta valida ");
}

// inserisce un numero da 1 a 5
let numero = parseInt(prompt("scegli un numero tra [1..5]"));
if (numero <= 5 && numero >= 1) {
  console.log("L'utente ha scelto il numero: " + numero);
} else {
  console.log("inserisce un numero valido ");
}
/**
 *
 * @returns {number} numero random (da 1 a 5)
 */
// un numero random (da 1 a 5) per il computer
function randComputer() {
  return Math.floor(Math.random() * 5 + 1);
}
let computer = randComputer();
console.log("Il numero random del computer è: " + computer);

// la somma dei due numeri
let somma = computer + numero;
console.log("La somma dei due numeri è: " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari

let controllo = verificazioneSomma();
console.log("La somma dei due numero è: " + controllo);

/**
 *
 * @param {number} somma  La somma dei due numeri (computer e utente)
 * @returns {string}  verificare se la somma e un numero pari o dispari
 */
function verificazioneSomma(somma) {
  if (somma % 2 === 0) {
    return "Pari";
  } else {
    return "Dispari";
  }
}
// Dichiariamo  chi ha vinto
if (
  (controllo === "Pari" && pariOdispari === "Pari") ||
  (controllo === "Dispari" && pariOdispari === "Dispari")
) {
  console.log("Ha vinto l'utente ");
} else {
  console.log(" ha vinto il computer  ");
}
