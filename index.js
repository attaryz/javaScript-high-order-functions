const companies = [
  { name: "company 1", category: "finance", start: 1975, end: 2003 },
  { name: "company 2", category: "retail", start: 2004, end: 2020 },
  { name: "company 3", category: "auto", start: 1999, end: 2001 },
  { name: "company 4", category: "retail", start: 1965, end: 1995 },
  { name: "company 5", category: "technology", start: 2000, end: 2010 },
  { name: "company 6", category: "finance", start: 1985, end: 2012 },
  { name: "company 7", category: "auto", start: 1981, end: 2013 },
  { name: "company 8", category: "technology", start: 1992, end: 1993 },
  { name: "company 9", category: "retail", start: 2010, end: 2014 },
];

const age = [33, 12, 20, 5, 88, 56, 21, 35, 7, 11, 45];
/* for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
} */

// foreach

/* companies.forEach(function (company) {
  console.log(company.name);
  
}); */

// filter
/* let canDrink = [];
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 21) {
    canDrink.push(age[i]);
  }
} */

/* const canDrink = age.filter((age) => {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink); */

/* const retailCompanies = companies.filter((company => {
    if(company.category === 'retail'){
        return true
    }
}))
console.log(retailCompanies) */

// map
// create array of company names
/* const companyNames = companies.map((company)=>{
return company.name
})
console.log(companyNames) */

/* const test = companies.map((company) => {
return `${company.name} [${company.start} - ${company.end}]`
})
console.log(test) */

/* const ageSquare = age.map(age => Math.sqrt(age)) 
console.log(ageSquare)
 */

// sort

/* const sortedCompanies = companies.sort((c1,c2) => {
if(c1.start > c2.start){
    return 1
}else{
    return -1
}
})
console.log(sortedCompanies) */

/* const sortedCompanies = companies.sort((a,b) => (a.end > b.end ? 1:-1))
console.log(sortedCompanies) */

// sort ages

/* const sortAge = age.sort((a, b) => a - b);
console.log(sortAge); */

// reduce

/* let ageSum = 0
for(let i =0; i<age.length; i++){
    ageSum += age[i]
} */

/* const ageSum = age.reduce((total, age) => {
    return total+age
},0)
console.log(ageSum) */

/* const totalYears = companies.reduce((total,company) => {
return total + (company.end - company.start)
},0)

console.log(totalYears) */


const combined = age.map((age) => age * 2)
.filter((age) => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b , 0)
console.log(combined);