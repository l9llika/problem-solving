// ### Задача 8: Сортировка нечетных чисел
console.log('Задача №8')
// #### Условие задачи:

// Напишите функцию sortOddNumbers(input), 
// которая принимает массив чисел и возвращает новый массив, где все нечетные 
// числа отсортированы по возрастанию, а четные числа остаются на своих местах.

// #### Стартовый код:

function sortOddNumbers(input) {
    const oddNumbers = input.filter(number => number % 2 !== 0);
    const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);
    return input.filter(number => number % 2 === 0).concat(sortedOddNumbers);
}

const input = [5, 4, 1, 6, 3, 8];
console.log(sortOddNumbers(input)); // Ожидаемый вывод: [1, 4, 3, 6, 5, 8]

// --------------------------------------------------------------