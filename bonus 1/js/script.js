// DIAGRAMMA CONCETTUALE
// avvio un ciclo for che conta da 1 a 100 e svolgo tutte gli altri passaggi all'interno di questo ciclo.
// assegno fizz ai numeri divisibili per 3 e buzz a quelli divisibili per 5.
// assegno fizzbuzz ai numeri che soddisfano entrambe le condizioni.
// stampo i risultati in console.

for (let i = 1; i <=100; i++) {

    let fizzBuzz;

    // definisco prima i multipli di 15 e poi i multipli di 3 e 5
    if (i % 15 === 0) {
        fizzBuzz = "fizzbuzz";
    } else if (i % 3 === 0) {
        fizzBuzz = "fizz";
    } else if (i % 5 === 0) {
        fizzBuzz = "buzz";        
    } else {
        fizzBuzz = i;
    }

    // stampo in console
    console.log(fizzBuzz);

    // BONUS

    // aggiungo la variabile per riempire le caselle
    const row = document.querySelector('.row');

    // aggiungo una visualizzazione nell'html
    row.innerHTML += `<div class="box">${fizzBuzz}</div>` 
}