// Count down from 10 to 1.
// Output odd numbers from 1 to 10.
// Output even number from 1 to 10.
// Output multiples of 3, starting at 6 and ending at 60.
// Output an increasing number of # symbols, from 1 to 7, as shown below.

console.log("=============================")
console.log("PROBLEM 1:")
for(let num=10; num >= 1; num--){
    console.log(num);
}
console.log("=============================")
console.log("PROBLEM 2:")
for(let num=1; num <= 10; num++){
    if(num % 2 != 0){
        console.log(num);
    }
}
console.log("=============================")
console.log("PROBLEM 3:")

for(let num=1; num <= 10; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}
console.log("=============================")
console.log("PROBLEM 4:")

for(let num=1; num <= 10; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}

console.log("=============================")
console.log("PROBLEM 5:")

for(let num=6; num <= 60; num++){
    if(num % 3 == 0){
        console.log(num);
    }
}

console.log("=============================");
console.log("PROBLEM 6:");

let hashtag = ""

{
    for(let num=1; num <= 7; num++){
        hashtag += "#";
        console.log(hashtag);
    }
}
console.log("BUH " + hashtag);