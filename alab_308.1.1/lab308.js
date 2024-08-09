// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//PART ONE
//Verify if all numbers are divisible by 5
const isDivisible = n1%5==0  && n2%5==0 && n3%5==0 && n4%5==0;
console.log(isDivisible);
//Check if the first number is larger than the last. Cache the result in a variable.
const isLarger = n1 > n4;
console.log(isLarger);
//Accomplish the following arithmetic chain:
const chain = ((n1-n2)*n3)/n4;
console.log(chain);
//Change the way that isOver25 calculates 
const isUnder25 = n1<25 || n2<25 || n3<25 || n4<25;

//PART TWO
//Total distance = 1500 miles
const distance = 1500;
//Budget 
const budget = 175
//Cost per gallon
const cost = 3
//Fuel efficiency
const fiftyFiveMiles = 30
const sixtyMiles = 28
const seventyFiveMiles = 23


//Fiftyfive miles
//QUESTION ONE: How many gallons of fuel will you need for the entire trip?
console.log('======================================')
const fiftyFiveGallons = distance / 30;
console.log(fiftyFiveGallons + " gallons of fuel");
const fiftyFiveIsWithin = (distance / 30) * 3 <= budget;
//QUESTION TWO: Is it within budget?
console.log("Is it within budget?: "+ fiftyFiveIsWithin);
const fiftyFiveHours = distance / 55;
//QUESTION THREE: How long is the destination?
console.log(`It will take ${fiftyFiveHours} hours`);
console.log('======================================')
//Sixty miles
//QUESTION ONE: How many gallons of fuel will you need for the entire trip?
const sixtyGallons = distance / 28;
console.log(sixtyGallons + " gallons of fuel");
const sixtyIsWithin = (distance / 28) * 3 <= budget;
//QUESTION TWO: Is it within budget?
console.log("Is it within budget?: "+ sixtyIsWithin);
const sixtyHours = distance / 60;
//QUESTION THREE: How long is the destination?
console.log(`It will take ${sixtyHours} hours`);
console.log('======================================')
//Seventyfive miles
//QUESTION ONE: How many gallons of fuel will you need for the entire trip?
const seventyFiveGallons = distance / 23;
console.log(seventyFiveGallons + " gallons of fuel");
//QUESTION TWO: Is it within budget?
const seventyFiveIsWithin = (distance / 23) * 3 <= budget;
console.log("Is it within budget?: "+ seventyFiveIsWithin);
const seventyFiveHours = distance / 75;
//QUESTION THREE: How long is the destination?
console.log(`It will take ${seventyFiveHours} hours`);
console.log('======================================')
