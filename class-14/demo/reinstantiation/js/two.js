'use strict';

const catbutton = document.getElementById('catbutton');

const handleCatButtonClick = function(){
  if(localStorage.cats) {
    const catsFromLS = JSON.parse(localStorage.cats);
    console.log('allCats array after retrieving from local storage', Cat.allCats);
    for (let i = 0; i < catsFromLS.length; i++){
      const newCat = new Cat(catsFromLS[i].name);
      newCat.render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', Cat.allCats);
  }
  
};

catbutton.addEventListener('click', handleCatButtonClick);
