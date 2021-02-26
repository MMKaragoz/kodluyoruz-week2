const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"],["BRA", "TR"], ["USA","USA"], ["TR", "BRA"], ["UAE", "JPN"], ["TR", "FR"], ["FR", "USA"]];
// const tickets = [['d','a'],['b','e'],['b','d'],['d','e'],['e','c'],['a','b']]

// const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"],["UAE", "JPN"]];

// obtain departure and destination
const departures = tickets.map((country) => country[0]);
const destinations = tickets.map((country) => country[1]);

// find out what is in destinations but not in departures.
const lastDestination = destinations.filter( country => !departures.includes(country));

const result = [...lastDestination];
let temp = lastDestination;

// Actually, country[0] gives us in departures
// and country[1] gives us in destinations.
// To sum up, temp[0] we obtained which country's destination ?
while(result.length < tickets.length + 1) {
    tickets.map((country) => {          
        if(country[1] === temp[0]) {                           
            temp[0] = country[0];        
            result.unshift(temp[0]);                
        }             
    })  
}


console.log(result);
console.log(tickets.length + 1 === result.length);




