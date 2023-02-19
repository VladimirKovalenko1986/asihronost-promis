// * Надаедалка

// import BSN from 'bootstrap.native';

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DALAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// const modal = new BSN.Modal('#subscription-modal');

// console.log(modal);

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное количество надоеданий или человек подписался!');
//     return;
//   }

// Открываем модалку через определенный период времени
//   setTimeout(() => {
//     console.log('Открываем надоедалку!');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DALAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }

// * через интервал

// let hasSubscribed = true;
// let promptCounter = 0;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Нужно останавить интервал!');
//     clearInterval(intervalId);
//     return;
//   }

//   console.log('Подпишись на рассылку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DALAY);
