'use strict';

{
  const open_button = document.getElementById('open_button');
  const modal_content = document.getElementById('modal_content');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');

  open_button.addEventListener('click', () => {
    modal_content.classList.toggle('add');
    mask.classList.toggle('add_mask');
  });

  close.addEventListener('click', () => {
    modal_content.classList.toggle('add');
    mask.classList.toggle('add_mask');
  });

  mask.addEventListener('click', () => {
    modal_content.classList.toggle('add');
    mask.classList.toggle('add_mask');
  });
}