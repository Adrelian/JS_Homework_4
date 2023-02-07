// Задание 1

// let size = 10

// for (let index = 0; index < size; index++) {
//     if (index === 0) {
//         console.log(`${index} - это ноль`)
//     } else if (index % 2 === 0){
//         console.log(`${index} - чётное число`)
//     } else {
//         console.log(`${index} - нечётное число`)
//     }
// }

// Задание 2

// const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 2) 
// console.log(arr)

// Задание 3

// // создать массив рандомных значений
// const myArray = []
// for (let index = 0; index < 5; index++) {
//     let value = Math.floor((Math.random() * 9));
//     myArray[index] = value
// }
// console.log(myArray)
// // Сумма чисел
// let sum = 0 
// for (let index = 0; index < myArray.length; index++) {
//     sum = sum + myArray[index]
// }
// console.log(`${sum} сумма `)
// // Наименьшее число в массиве
// let minValue = myArray[0] // наименьшее число
// for (let index = 0; index < myArray.length; index++) {
//     if (myArray[index] < minValue) {
//         minValue = myArray[index]
//     }
// }
// console.log(`${minValue} наименьшее`)
// // Поиск числа 3
// for (let index = 0; index < myArray.length; index++) {
//     if (myArray[index] === 3){
//         console.log(`3 есть на позиции ${index + 1}`)
//     }
// }

// Задание 4

// for (let i = 0; i < 20; i++) {
//     let symbol = ''
//     for(let j = 0; j < i; j++) {
//       symbol += '✖'
//     }
//     console.log(`${symbol}`)
//   }
