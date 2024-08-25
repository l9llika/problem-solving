// #### Задача №9 - Условие задачи:

console.log('Задача №9')
// Получать данные из запроса определенное количество раз в случае ошибки

// #### Условие задачи:

// Реализуйте функцию get(url, limit), которая пытается получить данные 
// по указанному URL. 
// Если запрос завершается ошибкой, функция должна повторить попытку до limit раз 
// перед тем, как окончательно выбросить ошибку.

// #### Стартовый код:

function get(url, limit) {
    const attempts = Array.from({ length: limit }, (_, i) => i + 1);
    const requests = attempts.map(() => fetch(url));
    return Promise.race(requests);
}

// Пример использования
get("https://example.com/data", 5)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

// --------------------------------------------------------------