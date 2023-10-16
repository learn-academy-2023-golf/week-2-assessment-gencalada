// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
console.log(cohort.split(" "))

// a) Your answer: The output will be a new string where each letter its going to to separate. example: G o l f 2 0 2 3
// b) Verify and explain: This actually gave us an array with the two elements "Golf" and "2023". split is a string method that will return an array. I was condusing this with a different method.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: `Hello LEARN Student` will be returned
// b) Verify and explain: I was wrong. the output was actually undefuned. this is probbly due to 'name' not being given a value.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: the output will be a new array with the numbers [11, 13, 15] in it.
// b) Verify and explain: I was correct. This is because whats being filtered or nulled out of the array is all numbers that are divisible by 2. you can see this in number % 2 !==0.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: 'Javascript' will be returned
// b) Verify and explain: I was correct. This is because, in the console.log, we are searching for what is taking uo the zero inde inside the language array.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: undefined will the displayed.
// b) Verify and explain: i was incorrect. Gearge was dispayed. I simply had my doubts. Since this.student is the only iten that can take a new value.
