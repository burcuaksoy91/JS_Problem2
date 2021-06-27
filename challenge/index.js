
function twice(user_word){
    let word ="";
    for (i = 0; i< user_word.length; i++){
        
        word += user_word[i] + user_word[i];
    }
    return word
}

let user_word = prompt("enter a word");
console.log(twice(user_word));



