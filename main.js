const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.close-button');
const dialog = document.querySelector('dialog');

openModal.addEventListener('click', () => {
  dialog.classList.remove('modal-close');
  dialog.showModal();
  dialog.classList.add('modal');
  // dialog.classList.add('modal');
});
// dialog.classList.remove()
closeModal.addEventListener('click', () => {
  dialog.classList.remove('modal');
  dialog.classList.add('modal-close');
  dialog.getAttribute('modal-close');
  dialog.close();
  // dialog.classList.add('modal-close');
});
