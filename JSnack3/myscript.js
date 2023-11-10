"use strict";

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let totaleNumeri = 0;
const elencoNumeri = [];

for (let i = 1; i <= 10; i++) {
    const numeroUtente = Number(prompt(`Inserisci il tuo ${i}° numero`));
    elencoNumeri.push(numeroUtente);
    console.log(`Il ${i}° numero che hai inserito è ${elencoNumeri[i - 1]}`);
    totaleNumeri += numeroUtente;
}
if (isNaN(totaleNumeri)) {
    console.log("Hai inserito un valore non numerico");
} else {
    console.log("La somma dei numeri è " + totaleNumeri);
}