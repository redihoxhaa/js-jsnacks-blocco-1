// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

const n = Number(prompt("Inserisici il numero di array da generare"));

for (let i = 0; i < n; i++) {
    const array = [];
    for (j = 0; j < 10; j++) {
        randomNumber = Math.floor(Math.random() * 100);
        array.push(randomNumber);
    }
    console.log(`L'array ${i + 1} è composta da ${array}`);
}