// #### Задача №3 - Условие задачи:

console.log('Задача №3')
// Реализуйте функцию customPromiseAll(promises), которая работает 
// подобно Promise.all().

// Функция должна принимать массив промисов и возвращать промис, 
// который разрешается массивом результатов исходных промисов.

// #### Стартовый код:

function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let numResolved = 0;

        promises.forEach(promise => {
            promise.then(value => {
                results[numResolved] = value;
                numResolved++;
                if (numResolved === promises.length) {
                    resolve(results);
                }
            }, reject);
        });
    });
}

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

customPromiseAll([promise1, promise2, promise3])
    .then(results => console.log(results)) // [1, 2, 3]
    .catch(error => console.error(error));