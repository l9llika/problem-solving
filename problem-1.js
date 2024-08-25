// #### Задача №1 - Условие задачи:

// Напишите функцию checkBrackets(str), которая принимает 
// строку содержащую скобки трех видов: (), {}, []. Функция должна вернуть true, 
// если скобки в строке закрыты и вложены корректно, и false в противном случае.

// #### Стартовый код:

function checkBrackets(str) {
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    const bracketStack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (openBrackets.includes(char)) {            
            bracketStack.push(char);
        } else if (closeBrackets.includes(char)) {
            const lastOpenBracket = bracketStack.pop();
            if (!lastOpenBracket || closeBrackets.indexOf(char) !== openBrackets.indexOf(lastOpenBracket)) {
                return false;
            }
        }
    }

    return bracketStack.length === 0;
}

// Примеры использования
console.log(checkBrackets("{Hi(good day)!}")); // true
console.log(checkBrackets("{nice[day}")); // false
console.log(checkBrackets("(delicious[food])")); // true

// --------------------------------------------------------------