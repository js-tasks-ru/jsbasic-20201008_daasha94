function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let txt = document.querySelector('#text');
  let isHidden = txt.hasAttribute('hidden'); //true
   
  btn.addEventListener("click", handler);
  //else
  //btn.addEventListener("click", () => txt.removeAttribute('hidden'));
  function handler() {
    if(isHidden){
    txt.removeAttribute('hidden');
    isHidden = false;
    }
    else {
      txt.setAttribute('hidden', 'true');
      isHidden = true;
    }

  }
}

