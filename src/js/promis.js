// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Promis
const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullfill) {
      resolve('Все ок');
    }

    reject('Промис вызван с ошибкой');
  }, 2000);
});

// Выводим значение промиса

// 1 способ
// * Внутрение результаты
// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

// 2 способ
// Можно передать внешними функциями
