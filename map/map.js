// before map

const ages = [5, 7, 10, 20, 2, 5, 6, 22]; 
// length is 8 from ages.length

// index in ages 
console.log(2 in ages) // true
console.log(8 in ages) // false
console.log(7 in ages) // true
console.log(20 in ages) // false

// Actually we do that does ages have such an index ? 


// map

// map gives us a new array and 
// it does this without mutating the original array.
// Remember that!


const cities = ["Mugla", "Eskisehir", "Ankara", "Istanbul", "Izmir", "Bursa"];

const newCity = cities.map((city) => {
    return `${city} Metropolitan Municipality`
})

console.log(newCity) // yeap like you guess
// ["Mugla Metropolitan Municipality", "Eskisehir Metropolitan Municipality", "Ankara Metropolitan Municipality", "Istanbul Metropolitan Municipality", "Izmir Metropolitan Municipality", "Bursa Metropolitan Municipality"]


//

const reg = /[^aeiou]/gi;

const consonants = newCity.map((city) => {
    return city.match(reg).join("");
})

console.log(consonants) 

// ["Mgl Mtrpltn Mncplty", "skshr Mtrpltn Mncplty", "nkr Mtrpltn Mncplty", "stnbl Mtrpltn Mncplty", "zmr Mtrpltn Mncplty", "Brs Mtrpltn Mncplty"]

//

const grades = [0, 50, 100, 90, 24, 48, 70];

const passing50 = grades.map( (grade) => {
    return grade > 50 ? "passed" : "didn't pass"
})

console.log(passing50)

// ["didn't pass", "didn't pass", "passed", "passed", "didn't pass", "didn't pass", "passed"]


// if the process will take a single line, we can not return.

const randomNumbers = [2, 5, 7, 1, 9, -2, 5];

const squareRandomNumbers = randomNumbers.map(number => number ** 2) // like this

console.log(squareRandomNumbers)

// [4, 25, 49, 1, 81, 4, 25]

const students = [
    {name: "a", grade: 0},
    {name: "b", grade: 10},
    {name: "c", grade: 20},
    {name: "d", grade: 40},
    {name: "e", grade: 50},
    {name: "f", grade: 70},
    {name: "g", grade: 80},
    {name: "h", grade: 100}
];

console.log(students.length); // what do you think about it ? It's 8.

// get grades of the students

const average = students.map((student) => student.grade)

console.log(average)

// [0, 10, 20, 40, 50, 70, 80, 100]