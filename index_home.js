// Задание 1

let size = 10

for (let index = 0; index < size; index++) {
    if (index === 0) {
        console.log(`${index} - это ноль`)
    } else if (index % 2 === 0){
        console.log(`${index} - чётное число`)
    } else {
        console.log(`${index} - нечётное число`)
    }
}