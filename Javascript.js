/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in Javascript sono:

String : è un testo scritto racchiuso tra "",'',``. Devono essere uguali.

Number : possiamo scrivere numeri praticamente quasi illimitati, entro però i limiti di Javascript. 

Boolean : In javascript i valori booleani possono essere sono TRUE o FALSE, come per i numeri binari 0 e 1

Null e Undefined: quando una variabile è di tipo null vuol dire che la nostra variabile è volutamente vuota e non contiente niente.
Quando una variabile è di tipo Undefined vuol dire che la nostra variabile non è ancora stata definita,cioè ancora non esiste.

BigInt: viene usato per gestire numeri che superano il valore massimo consentito da Javascript

Symbol: questo valore non prevede una sintassi come per gli altri tipi primitivi, non può essere ripetuta essendo unica.*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è un insieme di variabili che raggruppano dati e funzionalità correlate  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
let somma

somma= 12+20
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Christian"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let result = 4 - x
console.log(result)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "jhon"
let name2 = "Jhon"
console.log(name1 === name2)


let name3 = name1.toLowerCase()
let name4 = name2.toLowerCase()
console.log(name3 === name4)