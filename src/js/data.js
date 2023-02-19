// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Создание времени

// const date = new Date(60000);
// console.log('🚀 ~ date', date);

// console.log(date.getMonth());

// console.log(date.getTime());

// Разница

// const date1 = Date.now();

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('🚀 ~ date1', date1);
//   console.log('🚀 ~ setTimeout ~ date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Таймер

const timer = {
  strat() {
    // Сохраняем текущее время старта
    const statrTime = Date.now();

    setInterval(() => {
      // На момент вызова этой функции
      const currentTime = Date.now();
      //   console.log('🚀 ~ setInterval ~ currentTime', currentTime);

      // Отнимаем время текущее от стартового
      console.log(currentTime - statrTime);

      // Делаем чтобы в консоле выводилось в формате время (хх:хх:хх)
    }, 1000);
  },
};

timer.strat();

// Функция которая будет делать чтобы в консоле выводилось в формате время (хх:хх:хх)
// Код взят с адской копипасты со стека

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}
