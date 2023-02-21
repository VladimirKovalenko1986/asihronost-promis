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

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// * Пишем через класс
class Timer {
  // Добавляем свойства функции которые написали ниже в конструктор
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  // Добвляем метод для того чтобы отображался интерфейс при начале
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  // Копируем метод из нижней задачи
  start() {
    if (this.isActive) {
      return;
    }
    const starTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - starTime;

      const time = this.getTimeComponents(deltaTime);

      // Передаем наш агумент  функции
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;

    // Ставим очищение интерфейса
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
}

const timer = new Timer(
  // Передаем функцию обновления
  { onTick: updateClockface }
);
// * Пишем через методы
// {
// Делаем свойства которые передадим в интервал слиеан
// intervalId: null,
// Добавляем состаяние таймера
// isActive: false,

// start() {
// Делаем проверку активности таймера
// if (this.isActive) {
//   return;
// }
// Если не активный запускаем его
// Сохраняем текущее время старта
// const starTime = Date.now();
// this.isActive = true;

// this.intervalId = setInterval(() => {
// На момент вызова этой функции
// const currentTime = Date.now();
//   console.log('🚀 ~ setInterval ~ currentTime', currentTime);
// Вычисляем разницу
// const deltaTime = currentTime - starTime;

// Отнимаем время текущее от стартового
// console.log(currentTime - starTime);
// timeComponents переменную зменили на { hours, mins, secs } провели деструктаризацию
// заменяем { hours, mins, secs } на time так как он уже не нужен
// const time = getTimeComponents(deltaTime);
// Прописываем формат времени как он должен выглядить
// console.log(`${hours}:${mins}:${secs}`);
// Дорисовываем интерфейс
// updateClockface(time);

// Записываем форму времени
// console.log(
//   `${pad(new Date(deltaTime).getUTCHours())}:${pad(
//     new Date(deltaTime).getMinutes()
//   )}:${pad(new Date(deltaTime).getSeconds())}`
// );
// }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// Метод который добавляет в начало 0 если число меньше 2-х знаков
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// Функция которая будет делать чтобы в консоле выводилось в формате время (хх:хх:хх)
// Код взят с адской копипасты со стека

// Переносим в класс
// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
