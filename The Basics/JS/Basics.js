console.log("Greetings from the console");

let random = Math.random() * 2;

if (random <= 0.5) {
    console.log(`Here's a Number: ${random}`);
}
else if (random > 0.5 && random < 1) {
    console.log(`Here's a Different Number: ${random}`);
}
else {
    console.log(`I Got Nothing For You`);
}

let objectLiteral = {
    Title: `Testing Object Literals`,
    Result: `Hey, It Works`
};

for (let index = 1; index < 11; index++) {
    console.log(index);
}

// let guess = parseInt(prompt(`Enter a Number from 0 to 20`));
// let numOfGuess = 1;

// while (guess != 15) {
//     guess = prompt(`Wrong Number`);
//     numOfGuess++;
// }

// alert(`Good Job, It Took You ${numOfGuess} ${numOfGuess === 1 ? "Guess" : "Guesses"}`);

const list = [`Eggs`, `Milk`, `Flour`, `Butter`]
for (const item of list) {
    console.log(item);
}

// **************************************Higher Order Functions******************************************
function roll20() {
    const roll = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
};

function roll6d20(func) {
    for (let i = 0; i < 6; i++) {
        func();
    };
};

roll6d20(roll20);

// *****************************************Returning Functions********************************************

function makeFunc(min = 1, max = 10) { //default params are added in case none are passed
    console.log(`min is ${min} and max is ${max}\n Enter a Number using myFunc()`);
    return function (num) {
        return num >= min && num <= max;
    }
}

const myFunc = makeFunc(Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * (1000 - 50 + 1)) + 50);

// ****************************************Custom Methods********************************************************

const numberFive = {
    multiply(x) {
        return x * 5;
    },

    divide(x) {
        return x / 5;
    },

    exponent(x) {
        return 5 ** x;
    },

    base: function (x) {
        return x ** 5;
    }
};

//*******************************Map and Arrow ***************************************************

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const exp = arr.map((num) => {
    return num ** 2;
});

const add = (a, b) => (a + b);  // Implicit Returns only work when there is only one expression, in case of a single line then brackets can be removed: const add = (a,b) => a + b;

//NOTE: in object methods, the arrow syntax does not work with the "this" keyword

//******************************************************Filter*****************************************************

const odds = arr.filter(n => n % 2 === 1); //Implicit Return used, filter accepts a callback function that returns a boolean then stores the elements that return "true"
const oddsSquared = arr.filter(n => n % 2 === 1).map(n => n ** 2); //testing combined callbacks

//************************************************************** Some and Every***********************************

const someNums = [80, 92, 100, 32, 50, 99, 65, 68, 92];
const isEvery = someNums.every(n => n > 80); //Every returns true if ALL elements are true, else false
const isSome = someNums.some(n => n > 80); //Some returns true if AT LEAST ONE element is true, if none are true then false

//**************** Reduce Function

const findMin = someNums.reduce((min, curr) => curr < min ? curr : min); //reduce(accumulator, currentValue), the function stores a return into the accumulator and sets the next element in an array to currentValue, it keeps going until the end of the array, then returns the accumulator

const sumOfNums = someNums.reduce((sum, current) => {
    return sum + current; //the return is stored in "sum" until the array ends, then sum is returned
})

// second argument can be used to set the initial value of the accumulator: array.reduce((acc,curr)=>func , initial value)

// *******************************************************Spread****************************************

const arrnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let maxOfNums = Math.max(...arrnums); //max(...arrnums) is equivalent to max(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
// console.log(..."hello") == console.log("h","e","l","l","o")

const years = [2000, 2001, 2002, 2003];
const yearsCont = [2004, 2005, 2006, 2007];
const allYears = [...years, ...yearsCont, 2008, 2009, 2010];

const apple = {
    color: 'red',
    type: 'fruit'
};

const carrot = {
    color: "orange",
    type: 'vegetable'
};

const appleRetail = { ...apple, price: 5.99 };

const vegfruit = { ...apple, ...carrot } //order matters, since there are conflicting properties, the later one wins out 

const spreadObj = { ...["anna", 'beth', 'jake', 'kyle'] }; //indices are used as key and the elements are used as values, also works when spreading strings into an object


// *************************************Rest Parameters*********************************

// Rest collects arguments into an array

function sum(...nums) { //input would be sum(1,2,3,4,5,6,7,8,9,etc....), the input is grouped into the array named "nums"
    return nums.reduce((total, current) => total + current);
}

function contest(first, second, ...others) {
    console.log(`First Place Goes to ${first}`);
    console.log(`Second Place Goes to ${second}`);
    console.log(`The Rest of the Participants: ${others}`);
}

//******************************* Destructuring*****************************

const arrOfNums = [14561, 951951, 1951951, 9519518];
const [first, second, ...theRest] = arrOfNums; // first = 14561, second = 951951, theRest = [1951951, 9519518], if no rest operator is used, then theRest = 1951951 only




const user = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}
//const email = user.email;
const { email } = user; //order doesn't matter, but the property must exist by name, const {mail} = user would not work
const { born: birthYear } = user; //vairable will be named birthYear
const { city, state, died = 'N/A' } = user; //this sets the default value for died ONLY IF the property does not exist in the object




// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) { //destructuring an object that is passed as a param
    return `${firstName} ${lastName}`;
}