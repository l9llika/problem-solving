// #### Задача №11 - Условие задачи: Вывести поле объекта

console.log('Задача №11')

// #### Условие задачи:

// Напишите функцию get(obj, path), которая возвращает значение 
// по указанному пути в объекте. 
// Если путь не существует, функция должна возвращать undefined.

// #### Стартовый код:

function get(obj, path) {
    const parts = path.split('.');
    let result = obj;
    for (let part of parts) {
        if (!result || !result.hasOwnProperty(part)) {
            return undefined;
        }
        result = result[part];
    }
    return result;
}

const obj = {
    a: {
        b: {
            c: "d",
        },
    },
};

console.log(get(obj, "a.b.c")); // Ожидаемый вывод: d

// --------------------------------------------------------------