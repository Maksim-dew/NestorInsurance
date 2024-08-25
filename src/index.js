import "./styles/index.css";

const texts = [
  "Почему покупая страховку в путешествие ты экономишь?",
  "От жалобы до консультации с врачом 30 мин, хотите так же?",
  "Почему лучше оформлять их у страховых агентов, а не на сайте компании?",
  "Отправляетесь в путешествие?",
];

let index = 0;
const textElement = document.querySelector('.text-main');

const changeText = () => {
  // Убираем текущий текст с анимацией
  textElement.classList.remove('show');
  textElement.classList.add('hide');

  setTimeout(() => {
      // Меняем текст после того, как исчез предыдущий
      index = (index + 1) % texts.length;
      textElement.textContent = texts[index];

      // Показываем новый текст с анимацией
      textElement.classList.remove('hide');
      textElement.classList.add('show');
  }, 500); // Задержка должна совпадать с transition для плавного эффекта
};

setInterval(changeText, 3000); // Меняем текст каждые 3 секунды

// const btnApplication = document.querySelector('.application');
// const popup = document.querySelector('.popup');

// btnApplication.addEventListener('click',  () => {
//   popup.style.opacity = 1;
//   popup.style.position = "fixed";
//   console.info('Заявка на страховку отправлена!')
// });

// const btnPopupExit = popup.querySelector('.popup-exit');

// btnPopupExit.addEventListener('click',  () => {
//   popup.style.opacity = 0;
//   console.info('Заявка на страховку отправлена!')
// });

const dialog = document.getElementById('myDialog')
const dialogOpener = document.querySelector('.openDialogBtn')
const dialogCloser = dialog.querySelector('.closeDialogBtn')

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget
  const isClickedOnBackDrop = target === dialog
  if (isClickedOnBackDrop) {
    close()
  }
}

function openModalAndLockScroll() {
  dialog.showModal()
  document.body.classList.add('scroll-lock')
}

function returnScroll() {
  document.body.classList.remove('scroll-lock')
}

function close() {
  dialog.close()
  returnScroll()
}

dialog.addEventListener('click', closeOnBackDropClick)
dialog.addEventListener('cancel', (event) => {
  returnScroll()
});
dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
});
