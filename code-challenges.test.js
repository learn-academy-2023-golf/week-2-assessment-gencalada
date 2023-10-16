// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.
// describe('multipliedByThree',() => {
//     it('takes in an array of numbers and returns an array with all the numbers multiplied by 3',() => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         // Expected output: [18, 21, 24, 27, 30]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         // Expected output: [72, 81, 90, 99, 108]
//         expect(multipliedByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//         expect(multipliedByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
// })


// // const numbersArray1 = [6, 7, 8, 9, 10]
// // // Expected output: [18, 21, 24, 27, 30]
// // const numbersArray2 = [24, 27, 30, 33, 36]
// // // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // Pseudo code:
// //input:
// //output:
// //iterate through the array using .map
// //each interaction multiplies the current value by three
// //the product is returned in the new array made

// const multipliedByThree = (arr) => {
//     return arr.map(num => {
//         return num * 3
//     })
// }

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.
// describe('divisibleByThree',() => {
//     it('takes a object as an argument and decides if the number inside it is evenly divisible by three or not',() => {
//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
//         expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//         expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })

// // const object1 = { number: 15 }
// // // Expected output: "15 is divisible by three"
// // const object2 = { number: 0 }
// // // Expected output: "0 is divisible by three"
// // const object3 = { number: -7 }
// // // Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// // Pseudo code:
// //Input: An object with numbers
// //Output: An object that decides if the numbers inside are divisible by three
// //using % iterate through each object's number
// //using string interpelation, each product returns a string describing the outcome

// const divisibleByThree = (string) => {
//     let num1 = object1
//     let num2 = object2
//     let num3 = object3
//     if(num1 % 3 === 0) {
//         retrun `${num1} is divisible by three`
//     }
//     if(num2 % 3 === 0) {
//         return `${num2} is divisible by three`
//     }
//     if(num3 %  3 === 0) {
//         return `${num3} is divisible by three`
//     }
// }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.
describe('nounsCapetalized', () => {
    it('takes in an array of words and returns an array with all the words capitalized')
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(nounsCapetalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(nounsCapetalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
})

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
//input: an array of words
//output: an array with all words capetalized
//using the .toUpperCase we will capetalize all input to receive expected output

const nounsCapetalized = (arr) => {
    return (arr.charAt(0)).toUpperCase
}