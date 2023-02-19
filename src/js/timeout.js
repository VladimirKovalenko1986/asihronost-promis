// const logMessage = () => {
//   console.log('Лог при вызове callback-function через 3 секунды');
// };

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('Внутри callback для setTimeout');
// }, 2000);

// console.log('После выщова setTimeout');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Очистка інтервалу

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// const TimerId = setTimeout(logger, 2000, 2000);
// console.log('🚀 ~ TimerId', TimerId);

// const shouldCancellTime = Math.random() > 0.3;
// console.log('🚀 ~ shouldCancellTime', shouldCancellTime);

// if (shouldCancellTime) {
//   clearTimeout(TimerId);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * вызов через промижуток времени

// const logger = time => console.log(`Лог каждые ${time} - ${Date.now()}`);

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Очистка интервала

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancellTime = Math.random() > 0.3;
// console.log('🚀 ~ shouldCancellTime', shouldCancellTime);

// if (shouldCancellTime) {
//   clearInterval(intervalId);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
