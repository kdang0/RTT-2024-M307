const subtract = (a,b) => console.log(`${a}-${b}=${a-b}`);

const calculate = (a,b,operator) => {
    let result;
    switch(operator){
        case 'add':
            result = a+b;
            break;
        case 'subtract':
            result = a-b;
            break;
        case 'multiply':
            result = a*b;
            break;
        case 'divide':
            result = a/b;
            break;
        default:
            result = a+b;         
    }
    return result;
}

//Test cases
subtract(10,5);

console.log(`The answer is ${calculate(10,5,'multiply')}`);



//PRACTICE ONE
const computeArea = (width, height) => {
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
}
//Test Cases
console.log(`${computeArea(8,3)}`);
console.log(`${computeArea(2,3)}`);
console.log(`${computeArea(5,5)}`);


//PRACTICE TWO
const planetHasWater = (planet) => {
    const planetString = planet[0].toUpperCase()+planet.substring(1).toLowerCase();
    const result = (planetString === "Earth" || planetString  === "Mars") ? true : false;
    return result;
} 
//Test Cases
console.log(`${planetHasWater('Earth')}`);
console.log(`${planetHasWater('EARTH')}`);
console.log(`${planetHasWater('earth')}`);
console.log(`${planetHasWater('eaRTh')}`);
console.log(`${planetHasWater('Mars')}`);
console.log(`${planetHasWater('MaRs')}`);
console.log(`${planetHasWater('MARS')}`);
console.log(`${planetHasWater('mars')}`);
console.log(`${planetHasWater('Mercury')}`);


// function hoistExample(){
//     console.log(x);
//     var x = 25;
//     console.log(x);
// }

// hoistExample();