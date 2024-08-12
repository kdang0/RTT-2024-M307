//PART ONE
//array that contains ints for testing for sumArray and averageArray
const testNumArray = [1, 2, 3, 4];
const sumArray = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
  //TEST CASE
};
console.log(`${sumArray(testNumArray)}`);
//=======================================
const averageArray = (array) => {
  let sum = sumArray(array);
  return sum / array.length;
};
//TEST CASE
console.log(`${averageArray(testNumArray)}`);
//=======================================

//array containing strings to test for findLongestString function
const testStringArray = ["say", "hello", "in", "the", "morning"];

const findLongestString = (array, num) => {
  let newArray = [];
  for (let string of array) {
    if (string.length > num) {
      newArray.push(string);
    }
  }
  return newArray;
};
//TEST CASE
console.log(`${findLongestString(testStringArray, 3)}`);
//=======================================
//Recursively calling starting from 4 to 1 (idk how to do it from 1 to 4 recursively)
const printNum = (num) => {
  if (num <= 1) {
    return 1;
  } else {
    console.log(num);
    return printNum(num - 1);
  }
};
//TEST CASE
const testPrintNum = printNum(4);
console.log(testPrintNum);
//=======================================

