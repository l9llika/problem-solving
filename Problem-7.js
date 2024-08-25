// ### Задача 7: Реализация кастомного метода Map()

// #### Условие задачи:

// Реализуйте функцию customMap(array, callback), 
// которая имитирует поведение метода массива .map(). 

// Функция должна принимать массив и колбэк функцию, которая применяется 
// к каждому элементу массива, 
// результаты выполнения колбэк функции формируют новый массив.

// #### Стартовый код:

function customMap(array, callback) {
    const mappedArray = [];
    array.forEach((element, index) => {
        mappedArray[index] = callback(element, index, array);
    });
    return mappedArray;
}

// Пример использования
const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, (num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// --------------------------------------------------------------