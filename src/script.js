/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota per i non creativi:
Se non vi sentite particolarmente creativi, nello screenshot in allegato trovate un esempio di layout grafico. Potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/



const app = document.getElementById('app');

const ageBox = app.querySelector('input[name="age"]');
const kmBox = app.querySelector('input[name="km"]');


const buttonCalc = document.getElementById('btnCalc');
console.log(buttonCalc);

const buttonCanc = document.getElementById('btnCanc');
console.log(buttonCanc)

const ticket = document.querySelector('#ticket');



buttonCalc.addEventListener('click', function(){
    let age = ageBox.value;
    let km = kmBox.value;
    let pricexkm = 0.21;
    let prezzo = km * pricexkm;

    //messaggio 
    let messaggio = 'Il prezzo del biglietto è :';
    let sconto = 'Con uno sconto di : ';
    let tot = 'Il totale sarà di : ';


    document.getElementById('ticket').innerHTML = 
    `
    <h3>${messaggio}${prezzo}€</h3>
    ` ;
    if (age < 18 ) {
        document.getElementById('ticket').innerHTML =
    `
    <h3>
        ${messaggio} ${prezzo} € 
    </h3>
    <h3>
        ${sconto} ${prezzo * 0.20} € 
    </h3>
    <h3>
        ${tot}    ${(prezzo * 0.80).toFixed(2)}
    </h3>
    `;
    } 
    if (age > 65 ) {
        document.getElementById('ticket').innerHTML =
    `
    <h3>
        ${messaggio} ${prezzo} € 
    </h3>
    <h3>
        ${sconto} ${prezzo * 0.40} € 
    </h3>
    <h3>
        ${tot}    ${(prezzo * 0.60).toFixed(2)}
    </h3>
    `;
    }
    ticket.classList.remove('d-none');

})

buttonCanc.addEventListener('click', function(){
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = ''
    ticket.classList.add('d-none');
})



