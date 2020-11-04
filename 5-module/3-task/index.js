function initCarousel() {
  let carousel__inner = document.querySelector('.carousel__inner');//Карусель
  let carousel__arrow_right = document.querySelector('.carousel__arrow_right');//Стрелка вправо
  let carousel__arrow_left = document.querySelector('.carousel__arrow_left');//Стрелка влево
  hide(carousel__arrow_left);
  let i = 0;
  let max = document.querySelectorAll('.carousel__slide').length; //Всего фоток в карусели
  carousel__arrow_right.addEventListener("click", () => right(carousel__inner));
  carousel__arrow_left.addEventListener("click", () => left(carousel__inner));

  function right(elem) {
    i++;
    elem.style.transform = 'translateX(-' + (elem.offsetWidth * i) +'px)';
    if (i == (max-1))
      hide(carousel__arrow_right);
    if (i > 0)
      show(carousel__arrow_left);
  }
  function left(elem) {
    i--;
    elem.style.transform = 'translateX(-' + (elem.offsetWidth * i) +'px)';  
    if (i == 0)
      hide(carousel__arrow_left);
    if (i < (max-1)) 
      show(carousel__arrow_right);
  }
  function hide(elem) {
    elem.style.display = 'none';
  }
  function show(elem) {
    elem.style.display = '';
  }

}