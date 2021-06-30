//Girilen ifadeyi, girilen sayı kadar tekrar eden algoritma

let word = prompt("Enter a string: ").toUpperCase().trim();
let num = Number(prompt("Enter a number: "));
console.log(word.repeat(num));