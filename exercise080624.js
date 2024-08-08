/*================================================================================= */

//EXERCISE ONE
console.log("===================================================");
console.log("                  EXERCISE ONE");
console.log("===================================================");
//Person class that contains properties of age and name
class Person{
    constructor(age, name){
        this.age = age;
        this.name = name;
        this.hasMoney = false;
    }
}

//Person instances
const John = new Person(16, "John");
John.hasMoney = true;
const Billy = new Person(21, "Billy");
const Steven = new Person(9, "Steven");
const Tom = new Person(16, "Tom");

//function to test age
function isOfAge(age, name, hasMoney){
    if(age >= 18){
        return `come on in ${name}`.toUpperCase();
    } else if(age < 18 && age > 10){
        if(hasMoney){
            return `Alright ${name} just this one time...`
        }
        return `Sorry ${name}...go home`;
    } else{
        return `??????????? where are your parents ${name} ??????????????????????`;
    }
} 

//Test Cases
const resultJohn  = isOfAge(John.age, John.name, John.hasMoney);
const resultBilly  = isOfAge(Billy.age, Billy.name);
const resultTom  = isOfAge(Tom.age, Tom.name, Tom.hasMoney);
const resultSteven  = isOfAge(Steven.age, Steven.name);
console.log(resultJohn);
console.log(resultBilly);
console.log(resultSteven);
console.log(resultTom);


console.log("===================================================");
console.log("                  EXERCISE TWO");
console.log("===================================================");
/*=============================================================================*/

//EXERCISE TWO


//Learner class containing score and is inheriting from Person class
class Learner extends Person{
    constructor(name, score){
        super("N/A", name); //Declaring properties from person class  
        this.score = score; 
    }
}
//Learner instances
const learnerA = new Learner("Ethan", 93);
const learnerB = new Learner("Sofia", 85);
const learnerC = new Learner("Liam", 72);
const learnerD = new Learner("Isabella", 58);
const learnerF = new Learner("Oliver", 54);

function calculateGrade(score){
    if(score >= 90){
        return "A";
    } else if(score >= 80){
        return "B";
    } else if(score >= 70){
        return "C";
    } else if(score >= 55){
        return "D";
    } else{
        return "F";
    }
}

//Test cases
const resultA = calculateGrade(learnerA.score);
console.log(`${learnerA.name} has a ${resultA}`);

const resultB = calculateGrade(learnerB.score);
console.log(`${learnerB.name} has a ${resultB}`);

const resultC = calculateGrade(learnerC.score);
console.log(`${learnerC.name} has a ${resultC}`);

const resultD = calculateGrade(learnerD.score);
console.log(`${learnerD.name} has a ${resultD}`);

const resultF = calculateGrade(learnerF.score);
console.log(`${learnerF.name} has a ${resultF}`);




