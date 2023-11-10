"use strict";

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let totaleNumeri = 0;

for (let i = 0; i < 10; i++) {
    const numeroUtente = Number(prompt(`Inserisci il tuo numero`));
    totaleNumeri += numeroUtente;
}

console.log("La somma dei numeri è " + totaleNumeri);