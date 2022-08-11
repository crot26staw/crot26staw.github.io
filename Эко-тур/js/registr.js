// Страница бронирования номера выбор кол-ва человек

const choisNumberPeople = {
    prevArrowAdult: document.getElementById('registration-age-minwrapper-btn-prev-adult'),
    prevArrowChild: document.getElementById('registration-age-minwrapper-btn-prev-child'),
    nextArrowAdult: document.getElementById('registration-age-minwrapper-btn-next-adult'),
    nextArrowChild: document.getElementById('registration-age-minwrapper-btn-next-child'),
    child: document.querySelector('.registration-age-minwrapper-input-child'),
    adult: document.querySelector('.registration-age-minwrapper-input-adult')
  }
  
  let adulstIndicator = Number(choisNumberPeople.adult.value);
  let childIndicator = Number(choisNumberPeople.child.value);
  
  choisNumberPeople.nextArrowAdult.addEventListener('click', () =>{ // Прибавляем взрослого человека
    adulstIndicator += 1;
    choisNumberPeople.adult.value = String(adulstIndicator);
  })
  
  choisNumberPeople.prevArrowAdult.addEventListener('click', () =>{ // Уменьшаем взрослого человека
    if(adulstIndicator < 1){
      adulstIndicator = 0
    } else {
      adulstIndicator -= 1;
      choisNumberPeople.adult.value = String(adulstIndicator);
    }
  })
  
  choisNumberPeople.nextArrowChild.addEventListener('click', () =>{ // Прибавляем ребёнка 
    childIndicator += 1;
    choisNumberPeople.child.value = String(childIndicator);
  })
  
  choisNumberPeople.prevArrowChild.addEventListener('click', () =>{ // Уменьшаем ребёнка
    if(childIndicator < 1){
      childIndicator = 0
    } else {
      childIndicator -= 1;
      choisNumberPeople.child.value = String(childIndicator);
    }
  })