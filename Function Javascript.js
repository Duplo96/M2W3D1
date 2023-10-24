console.log(
  "ESERCIZIO 1 Scrivi una funzione chiamata crazySum che riceve due numeri interi come parametri.\n La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3"
);

/* SCRIVI QUI LA TUA RISPOSTA */
let crazySium = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
let risultato1 = crazySium(2, 2);
let risultato2 = crazySium(2, 4);

console.log(risultato1);
console.log();
console.log(risultato2);
console.log();
console.log(
  " ESERCIZIO 2 Scrivi una funzione chiamata boundary, che accetta un numero intero come parametro e ritorna true \n se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400."
);
console.log();
/* SCRIVI QUI LA TUA RISPOSTA */
let boundary = function (num3) {
  return (num3 >= 20 && num3 <= 100) || num3 === 400;
};

let numeroCompreso = boundary(50);
let numeroEsatto = boundary(400);
console.log(numeroCompreso);
console.log();
console.log(numeroEsatto);
console.log();
console.log(
  "ESERCIZIO 3 Scrivi una funzione chiamata reverseString, che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE)"
);
console.log()
/* SCRIVI QUI LA TUA RISPOSTA */
// let reverseString = function (text) {
// return text.split("").reverse().join("")
// }
// let stringaDaInvertire = "EPICODE" // CAMBIARE IL VALORE CON UNA PAROLA DA INVERTIRE //
// let stringaInverita = "STRINGA INVERTITA = " + reverseString(stringaDaInvertire)
// console.log(stringaInverita)

let reverseString = function(text) {
  let stringa = "";
  for(let i =text.length -1;i>= 0;i--) {
    stringa += text[i];
  }
  return stringa;
}
let text = "EPICODE";
let stringaInvertita = reverseString(text);
console.log(stringaInvertita);
console.log()
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst = function (text) {
let parola  = text.split(" ")
for (let i = 0; i < parola.length; i++) {
 let lettera = parola [i]
 parola[i]= lettera.charAt(0).toUpperCase() + lettera.slice(1)
}
return parola.join("")
};
let parolaFinale = upperFirst("pippo franco")
console.log(parolaFinale)
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log()
let giveMeRandom = function (n) {
let array = []
for (let i = 0; i < n ; i++){
  let randomnumber = Math.round(Math.random() *11); 
  array.push(randomnumber)
}
return array
};
let result = giveMeRandom(7)
console.log(result)





console.log("//EXTRA:")
console.log()
console.log("ESERCIZIO 1 Scrivi una funzione chiamata area che riceve due parametri l1, l2 e calcola l'area del rettangolo associato.")
console.log()

/* SCRIVI QUI LA TUA RISPOSTA */
let area = function (lato1, lato2) {
if( lato1 != lato2 ){
    return (lato1)*(lato2) 
}
};
let lato1 = 5
let lato2 = 10
let AreaDelRettangolo = area (lato1,lato2)
console.log(AreaDelRettangolo)
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazyDiff = function () {};
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let codify = function () {};
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let check3and7 = function () {};
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cutString = function () {};
