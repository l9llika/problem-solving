// #### Задача №12 - Условие задачи: Объясните код

console.log('Задача №12')

// #### Условие задачи:

// Объясните, что происходит в данном коде и какой будет вывод в консоль при 
// его выполнении.

({
    method() {
        return () => {
            console.log(this);
        };
    },
}).method()();

// --------------------------------------------------------------

// В этом коде создается объект, который содержит метод 'method'. 
// Метод 'method' возвращает функцию, которая при вызове выводит в консоль значение this. 
// Затем метод 'method' вызывается, и возвращенная им функция также вызывается.


// --------------------------------------------------------------