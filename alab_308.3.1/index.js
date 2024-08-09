//PART ONE
//Loop through all numbers from 1 to 100.

console.log("PART ONE");
console.log("=======================");
for(let i=1; i<=100;i++){
    //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if(i%5==0 && i%3==0){
        console.log("Fizz Buzz");
    }
    //If a number is divisible by 3, log “Fizz.”
    else if(i%3==0){
        console.log("Fizz");
    } 
    //If a number is divisible by 5, log “Buzz.”
    else if(i%5==0){
        console.log("Buzz");
    }
    //If a number is not divisible by either 3 or 5, log the number.
    else{
        console.log(i);
    }
}


console.log("PART TWO");
console.log("=======================");
//PART TWO
function getNextPrime(n){
    let current = n+1;
    while(true){
        //if prime return current value 
        if(isPrime(current)){
            return current;
        }
        //else continue looping
        current++; 
    }  
}

//helper function that checks whether current val is a prime value
function isPrime(num){
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1; 
}

//test cases
const result = getNextPrime(9);
console.log(result);
const resultTwo = getNextPrime(4);
console.log(resultTwo);
const resultThree = getNextPrime(1087);
console.log(resultThree);
const resultFour = getNextPrime(1);
console.log(resultFour);

//PART THREE
console.log("PART THREE");
console.log("-----------------------------");
function parseCSV(data){
    let row_string = ""
    let col_string = ""
    console.log("-----------------------------");
    for(let i=0; i<data.length; i++){
        let current_index = i;
        //loop until we either hit a character that is a comma or a new line
        while(data[current_index] !== "," && current_index !== data.length-1 && data[current_index] !== '\n'){
            col_string += data[current_index];
            current_index++;
        }
        //if the current char is a new line print out the row and start the next iteration of the loop
        if(data[current_index] === '\n'){
            row_string += `${col_string}|`;
            console.log(`${row_string} \n-----------------------------`);
            //reset the substrings for both row and column
            row_string = ""
            col_string =""
            i = current_index;
            continue;
        //if not then set i to the current index of what we already parsed and concatenate the row string with the new substring that was parsed and reset column substring
        } else{
            i = current_index;
            row_string += `${col_string}|`;
            col_string = "";
        }
    }
    return;
}

//test cases
const parseTest = parseCSV("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");
const parseTestOne = parseCSV("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232");

