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

// const makeOrder = dish => {
//   const DALEY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Вот ваше блюдо!');
//       }
//       reject('Извини закончились продукты!');
//     }, DALEY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakerOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakerOrderError(error) {
//   console.log('onMakerOrderError');
//   console.log(error);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Живой пример

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Ку-ку это resolve');
//       }
//       reject('Ку-ку это reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Иподром

// Набор коней
// const horses = [
//   'Secretariat',
//   'Eclips',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscult',
// ];

//Переменная для автоматической простановки порядкового номера
// let raceCounter = 0;

// const refs = {
//   startBtn: document.querySelector('.js-race-btn'),
//   winnerFiled: document.querySelector('.winner'),
//   progressField: document.querySelector('.progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// По нажатию на кнопку запускаем всх наших лошадей

// refs.startBtn.addEventListener('click', onStart);

// * Делаем функции

// function onStart() {
//   raceCounter += 1;
// Массив промисов
// const promises = horses.map(run);
// Перед заездом очищаем строку победителя
// updateWinnerFiled('');
// Записываем в текст что заезд начался
//   updateProgresFiled('Заезд начался ставки не принимаються!');

//   determineWinner(promises);
//   waiForAll(promises);
// }

// function updateWinnerFiled(message) {
//   refs.winnerFiled.textContent = message;
// }

// function updateProgresFiled(message) {
//   refs.progressField.textContent = message;
// }

// Чтобы обновлялась таблица
// function updateResultTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerFiled(`Победитель ${horse}, финишировал за ${time} времени`);
//     updateResultTable({ horse, time, raceCounter });
//   });
// }

// function waiForAll(horsesP) {
//   Promise.all(horsesP).then(x => {
//     updateProgresFiled('Заезд окончен, принимаються ставки');
//   });
// }
//???????????????????????????????????????????????????????????????

// console.log(
//   '%c Заезд начался ставки не принимаються!',
//   'color: brown; font-size: 14px;'
// );

// Функция которая будет запускать одного коня
// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// run(horses[0]).then(x => console.log(x));
// run(horses[1]).then(x => console.log(x));

// * Обработка массивов промисов

// race - берет первый который выполнился не дожидаясь всех остальных
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c Победитель ${horse}, финишировал за ${time} времени`,
//     'color: blue; font-size: 14px;'
//   );
// });
// all - берет все которые находтся в масиве
// Promise.all(promises).then(x => {
//   console.log(x);
//   console.log(
//     '%c Заезд окончен, принимаються ставки',
//     'color: red; fond-size: 14px;'
//   );
// });

// функция случайной лошади

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Приклад - запит на сервер

// Без  промісів
// console.log('Request data ...');

// setTimeout(() => {
//   console.log('Prepering data ...');

//   const data = {
//     id: 1,
//     text: 'lorem ipsum dolor sit amet.',
//     statu: 'inpotant',
//   };

//   setTimeout(() => {
//     console.log('Data received:', data);
//   }, 2000);
// }, 2000);

// З промісами
console.log('Request data ...');
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('Prepering data ...');
    const data = {
      id: 1,
      text: 'lorem ipsum dolor sit amet.',
      statu: 'inpotant',
    };

    if (!data.id) {
      rej(new Error('No id!'));
    }
    res(data);
  }, 2000);
});

// Не дуже гарний варіант
// promise
//   .then(data => {
//     const p = new Promise(res => {
//       console.log('Data chanched');
//       data.statu = 'ordinary';
//       res(data);
//     });

//     p.then(data => console.log(data));
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log('Promise end'));

// Ідеальний варіант

promise
  .then(data => {
    return new Promise(res => {
      console.log('Data chanched');
      data.statu = 'ordinary';
      res(data);
    });
  })
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Promise end'));
