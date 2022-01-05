const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output 1.Tesla 2. Mercedes
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output 1. Error. Name doesn't exist. 2. Elon
// console.log(name);
console.log(otherName);

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output 1. 12345 2. Error. variable doesn't exist
console.log(password);
console.log(hashedPassword);

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output 1. False 2. True
console.log(first == second);
console.log(first == third);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output 1.value; 2. [1, 5, 1, 8, 3, 3]; 3. 1; 4. Error. list inside of object. Need to start from obj to access list inside obj.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

