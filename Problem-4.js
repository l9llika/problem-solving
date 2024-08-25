// #### Задача №4 - Условие задачи:


// Напишите функцию maxSequence(arr), 
// которая находит максимальную сумму последовательных чисел в массиве.

// #### Стартовый код:

function maxSequence(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}
// Примеры использования
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// --------------------------------------------------------------