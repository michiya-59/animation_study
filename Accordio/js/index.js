'use strict';

{
  const menus = document.querySelectorAll('.menu-content');
  const opan_btns = document.querySelectorAll('.fa-angle-down');
  const close_btns = document.querySelectorAll('.fa-angle-up');

  opan_btns.forEach((opan_btn, index) => {
    opan_btn.addEventListener('click', () => {
      opan_btn.classList.toggle('display-none');
      menus[index].classList.toggle('display-none');
      close_btns[index].classList.toggle('display-none');
    });
  });

  close_btns.forEach((close_btn, index) => {
    close_btn.addEventListener('click', () => {
      close_btn.classList.toggle('display-none');
      menus[index].classList.toggle('display-none');
      opan_btns[index].classList.toggle('display-none');
    }); 
  });
}