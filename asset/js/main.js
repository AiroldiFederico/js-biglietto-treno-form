
// function getUserInput() {

//     // kilometers
//     let km = document.getElementById('km').value;
//     let age = document.getElementById('age').value;
//     const prckm = 0.21;

//     document.getElementById('priceresult').innerHTML = (prckm * km).toFixed(2);

//     if (age < 18) {
//         document.getElementById('priceresult').innerHTML = ((prckm * km) * 0.8).toFixed(2);
//     } else if (age > 65) {
//         document.getElementById('priceresult').innerHTML = ((prckm * km) * 0.6).toFixed(2);
//     }

// }



// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1: ( obbiettivo di ieri )
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const prckm = 0.21;

function getUserInput() {

    let InputNameLastname = document.getElementById("InputNameLastname").value;
    let Inputkm = document.getElementById("Inputkm").value;
    let Inputage = document.getElementById("Inputage").value;

    document.getElementById('OutName').innerHTML = InputNameLastname


    document.getElementById('priceresult').innerHTML = (prckm * Inputkm ).toFixed(2);
    if (Inputage < 18) {
        document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.8).toFixed(2);
        document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
    } else if (Inputage > 65) {
         document.getElementById('priceresult').innerHTML = ((prckm * Inputkm) * 0.6).toFixed(2);
         document.getElementById('ticket').innerHTML = `Biglietto ridotto`;
     }


    document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('code').innerHTML = Math.floor(Math.random() * 100000 + 1);
}