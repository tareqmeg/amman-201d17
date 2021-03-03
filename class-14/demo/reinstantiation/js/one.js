'use strict';

if (localStorage.cats) {
  const catsFromLS = JSON.parse(localStorage.cats);

  // catsFromLS is now an array of generic object 
  // Cat.allCats = catsFromLS;

  // let obj = {
  //   'name': 'Omer'
  // };

  // console.log(catsFromLS);
  // console.log(new Cat(catsFromLS[0]));

  for (let i = 0; i < catsFromLS.length; i++) {
    let obj = new Cat(catsFromLS[i].name);
    // console.log(Cat.allCats)
    obj.render();
  }
}

catform.addEventListener('submit', handleCatSubmit);
