// #### Задача №10 - Условие задачи:
// #### Условие задачи:

// Что будет выведено в консоль при выполнении следующего кода?

console.log('Задача №10')
console.log(0.1 + 0.2, 0.3 === 0.3, 0.1 + 0.2 === 0.3);

// 0.30000000000000004 true false

// --------------------------------------------------------------

// Но почему это происходит?

// Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. 
// Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления, 
// на самом деле являются бесконечной дробью в двоичной форме.

// alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
// alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
// alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

// Другими словами, что такое 0.1? Это единица делённая на десять — 1/10, одна десятая. 
// В десятичной системе счисления такие числа легко представимы, по сравнению с одной третьей: 1/3, 
// которая становится бесконечной дробью 0.33333(3).

// Деление на 10 гарантированно хорошо работает в десятичной системе, но деление на 3 – нет. 
// По той же причине и в двоичной системе счисления, деление на 2 обязательно сработает, а 1/10 становится бесконечной дробью.

// В JavaScript нет возможности для хранения точных значений 0.1 или 0.2, используя двоичную систему, 
// точно также, как нет возможности хранить одну третью в десятичной системе счисления.

// Числовой формат IEEE-754 решает эту проблему путём округления до ближайшего возможного числа. 
// Правила округления обычно не позволяют нам увидеть эту «крошечную потерю точности», но она существует.


// --------------------------------------------------------------