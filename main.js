const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];



//-->FILTER
console.log("-->FILTER")

// 1. Print out an array of the inventors whose name starts with 'A'.
console.log("1)",inventors.filter((name)=> name.startsWith('A')))

// 2. Print out an array of the inventors whose name contains 'n'.
console.log("2)",inventors.filter((name)=> name.includes('n')))

// 3. Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let doubleLetter = inventors.filter (name => {
    let splitName = name.split('')
    let result = false
    for (let i = 0; i < splitName.length; i++){
      if(splitName[i] === splitName[i+1]){
      result = true}
    }
  
    return result
  })
  console.log("3)",doubleLetter)

// 4. Print out an array of the numbers which are odd.
let oddNumber = numbers.filter(n => n % 2 === 0)
console.log("4)",oddNumber)

// 5. Print out an array of the numbers that have two digits.
let twoDigit = numbers.filter(n => n >= 10 && n <= 99)
console.log("5)", twoDigit)

// 6. Print out an array of the numbers which are prime.
let primeNumber = numbers.filter(num =>{
    if(num<2){
      return false
    }
    for(let i=2;i<num;i++){
      if(num%i==0){
          return false
      }
    }  
    return true
  })
  console.log("6)",primeNumber)

  

//-->MAP
console.log("-->MAP")

// 1. Print out the first name of each inventor.
let firstName = inventors.map((name) => {
    let arrayName = name.split(" ")
    console.log(arrayName[0])
})
console.log("1)",firstName)

// 2. Print out the length of every inventor's full name.
let nameLength = inventors.map(function (name) {
    let len = name.length;
    return len;
});
console.log("2)", nameLength)

// 3. Print out all the inventors' names in uppercase.
let upperCase = inventors.map((name) => {
    let arrayName = name.toUpperCase()
    console.log("3)", arrayName)
})

// 4. Print out initials of all inventors(e.g. A.E., I.N., ...)
let initials = inventors.map(name=>{
    let inventorSplit = name.split(' ')
    let result = inventorSplit[0][0]+"."+inventorSplit[1][0] 
  
    return result
  })
console.log("3)",initials)

// 5. Print out an array of every number multiplied by 100.
let x100 = numbers.map((number) => {
    return number * 100;
});
console.log("4)", x100);



//-->SORT
console.log("-->SORT")

// 1. Sort all the inventors in alphabetical order, A-Z.
let sortedName = inventors.sort()
console.log("1)", sortedName)

// 2. Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let reverseSortedName = inventors.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log("2)", reverseSortedName)

// 3. Sort all the inventors by length of name, shortest name first.
let sortByShort = inventors.sort((a,b)=>{
    a.length - b.length
  })
  console.log("3)",sortByShort)

// 4. Sort all the inventors by length of name, longest name first. Do not use the reverse method.
let sortByLong = inventors.sort((a,b)=>{
    b.length - a.length
  })
  console.log("4)",sortByLong)



//-->REDUCE
console.log("-->REDUCE")

// 1. Find the sum of all the numbers.
let sum = numbers.reduce((total, item) => {
    total += item
    return total
}, 0)
console.log("1)",sum)

// 2. Find the sum of all the even numbers.
let even = numbers.filter(number => number % 2 === 0)
let sumEven = even.reduce((total, item) => {
    total += item
    return total
}, 0)
console.log("2)", sumEven)

// 3. Create a string that has the first name of every inventor.
let firstNameString = inventors.reduce((total,name) => {
    total += name.split(' ')[0]  
    return total
  },'')
console.log("3)", firstNameString)



//-->SOME/EVERY
console.log("-->SOME/EVERY")

// 1. Does any inventor have the letter 'y' in their name?
let checkY = inventors.some(name => name.includes('y'))
console.log("1)", checkY)

// 2. Does every inventor have the letter 'e' in their name?
let checkE = inventors.every(name => name.includes('e'))
console.log("2)", checkE)

// 3. Does every inventor have first name that's longer than 4 characters?
let charCheck = inventors.every(name=>{
    name.split(' ')[0].length>1
  })
  console.log("3)",charCheck)


  
//-->FIND
console.log("-->FIND")

// 1. Find the inventor that has a middle name.
let haveMiddleName = inventors.find(name => name.split(' ').length >= 3)
console.log("1)", haveMiddleName)


// 2. Bonus: Return a new array, that only has inventors without a middle name. 
// (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
let noMiddleName = inventors.filter((name) => {
    return name.split(" ").length <= 2
})
console.log("2)", noMiddleName)

// 3. Find the number divisible by 7.
let numberDivSeven = numbers.find(number => number % 7 === 0)
console.log("3)", numberDivSeven)

// 4. Bonus: Return a new array, that only has the numbers that are not divisible by 7.
let notDivSeven = numbers.find(number => {
    let result = true
    for (let i = 0; i < numbers.length; i++) {
        if (number % 7 === 0)
            return false;
    }
    return result
})
console.log("4)", notDivSeven)
