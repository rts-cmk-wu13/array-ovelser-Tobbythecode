document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];
 

    // --- Løs opgaverne herunder --- 


    // Opgave 1

// let isbelow = (currentValue) => currentValue < 20;

// console.log(numbersArray.every(isbelow));

const result = numbersArray.filter(checknumberval);

function checknumberval(number){
    return number >= 20;
}

console.log(result);

}) // ends DOMContentLoaded