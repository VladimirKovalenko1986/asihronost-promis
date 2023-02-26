// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Promis
// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullfill) {
//       resolve('Все ок');
//     }

//     reject('Промис вызван с ошибкой');
//   }, 1000);
// });

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
//* Можно передать внешними функциями

// promise.then(onFulfilled, onRejeccted);

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// * Цепочка промисов
// promise
//   .then(result => {
//     console.log(result);

//     return 5;
//   })
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   });

// * Передача ошибки

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

// Метод который выкидывет ошибку
//   throw new Error('Ошибка во втором ');

//   return 10;
// })
// .then(y => {
//   console.log(y);
// })
// автоматически отлавливает все ошибки
// .catch(error => console.log(error))
// функция которая будет выполнена в любом случае
// .finally(() => console.log('Я буду выполнен в любом случае!!'));

// * Промисификация функции

const makeOrder = dish => {
  const DALEY = 1000;

  setTimeout(() => {}, DALEY);
};

makeOrder('пирожок');

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakerOrderError(error) {
  console.log('onMakerOrderError');
  console.log(error);
}
