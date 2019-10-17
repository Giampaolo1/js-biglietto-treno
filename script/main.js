// Il programma dovrà chiedere
// all’utente il numero di chilometri e
// l’età e dovrà calcolare il prezzo totale
// del viaggio.
// Il prezzo del biglietto è definito in
// base ai km (0.21 €cent al km) ma c’è
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65


// quanti km vuoi percorrere? (0.21 eur x km)
var askkm = prompt("Quanti KM vuoi percorrere?");
// quanti anni hai ? (sconti under 20 and over 65)
// var askage = prompt("Quanti anni hai?");

// calcola il prezzo in base ai km (imputuser x 0.21)
// askkm x 0.21

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("price");
// output finale su elemento selezionato
htmlElement.innerHTML = "PREZZO: " + askkm * 0.21;
