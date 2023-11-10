"use strict";

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let totaleNumeri = 0;
const elencoNumeri = [];
let ordineNumero = 1;

for (let i = 0; i < 10; i++) {
    const numeroUtente = Number(prompt(`Inserisci il tuo ${ordineNumero}° numero`));
    elencoNumeri.push(numeroUtente);
    totaleNumeri += numeroUtente;
    ordineNumero++;
}

ordineNumero = 1;

for (let counter = 0; counter < 10; counter++) {
    console.log(`Il ${ordineNumero}° numero che hai inserito è ${elencoNumeri[counter]}`);
    ordineNumero++;
}


console.log("La somma dei numeri è " + totaleNumeri);