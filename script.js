// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

const numbersArray = [];
let numbersSum = 0;

while (numbersSum < 50) {
    const userNumber = prompt("Inserisci il numero da sommare");
    if (isNaN(userNumber)) {
        alert("Per favore inserisici un numero in cifre")
    } else {
        numbersArray.push(userNumber);
        numbersSum += +userNumber;
    }
}

console.log("La somma dei numeri che hai inserito è " + numbersSum);
console.log("I numeri che hai inserito sono: ")

for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
}
