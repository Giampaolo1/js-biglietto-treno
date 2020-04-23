// Il programma dovrà chiedere
// all’utente il numero di chilometri e
// l’età e dovrà calcolare il prezzo totale
// del viaggio.
// Il prezzo del biglietto è definito in
// base ai km (0.21 €cent al km) ma c’è
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65

// prompts

// quanti km vuoi percorrere? (0.21 eur x km)
var askkm = prompt("Quanti KM vuoi percorrere??");
// quanti anni hai ? (sconti under 20 and over 65)
var askage = parseInt(prompt("Quanti anni hai?"));


// creo numero random per il biglietto
var ticketnumber = Math.floor(Math.random()*1000 + 1);

// creo data odierna per biglietto
var date = new Date()

// assegno a data uns stringa
date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

// calcola il prezzo in base ai km (imputuser x 0.21)
var prezzo = askkm * 0.21;

// : capire come calcolare lo sconto
// if minore di 18 apply 20% discount
// if maggiore di 65 apply 40% discount
// else don't apply discount

// var scontounder = prezzopuro / 100 * 20;
// var scontoover = prezzopuro / 100 * 40;
//
// var prezzo18 = prezzopuro - scontounder;
// var prezzo65 = prezzopuro - scontoover;

// vari output in base all input:

// variabile sconto;
var sconto;

if (askage < 18) {
  sconto = (prezzo/100) * 20;
  prezzo -= sconto;
} else if (askage > 65) {
  sconto = (prezzo/100) * 40;
  prezzo -= sconto;
}

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("price");

htmlElement.innerHTML = "PREZZO: " + prezzo.toFixed(2) + " € <br> Buon Viaggio!";

// stampo prezzo
// stampo codice biglietto
// stampo data





// sconto = numero / 100 * tasso
// poi sottrai questa tua variabile al prezzo come avevi pensato di fare
// if (eta < 18) {
// fai una cosa
// } else if (altra condizione) {
// fai altro
// }
// output finale su elemento selezionato
