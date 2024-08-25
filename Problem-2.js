// #### Задача №2 - Условие задачи:

console.log('Задача №2')
// Реализуйте функцию counter(), которая возвращает другую функцию, 
// позволяющую при каждом вызове увеличивать счетчик на 1. 

// Также реализуйте функцию counter2(x), которая принимает начальное значение 
// счетчика и возвращает функцию, увеличивающую счетчик на произвольное целое число.

// #### Стартовый код:

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// Примеры использования
const setCounter = counter();
console.log(setCounter()); // 1
console.log(setCounter()); // 2
console.log(setCounter()); // 3

function counter2(x) {
    let count = x;
    return function(x) {
        count += x;
        return count;
    };
}

// Примеры использования
console.log(counter2(2)(3)); // 5

// --------------------------------------------------------------