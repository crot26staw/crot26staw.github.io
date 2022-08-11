const toursDropDawnList = {
    arrow: document.querySelectorAll('.programms-item-arrow'),
    item: document.querySelectorAll('.programms-item-info'),
    all: document.querySelector('.programms-head-btn'),
    block: document.querySelectorAll('.programms-item')
  }
  
  toursDropDawnList.block.forEach(function(item, i){
    item.addEventListener('click', () =>{
      toursDropDawnList.item[i].classList.toggle('programms-item-info-active')
      toursDropDawnList.arrow[i].classList.toggle('programms-item-arrow-active')
    })
  })

  toursDropDawnList.arrow.forEach(function(arrow, i){  //Разворачиваем и закрывает по стрелочке
    arrow.addEventListener('click', () =>{
      toursDropDawnList.item[i].classList.toggle('programms-item-info-active')
      toursDropDawnList.arrow[i].classList.toggle('programms-item-arrow-active')
    })
  })
  
  toursDropDawnList.all.addEventListener('click', () =>{ //Разворачиваем и закрывает все сразу
    if(!toursDropDawnList.all.classList.contains('programms-head-btn-active')){
      toursDropDawnList.all.classList.add('programms-head-btn-active')
      toursDropDawnList.item.forEach((item) =>{
        item.classList.add('programms-item-info-active')
      })
      toursDropDawnList.arrow.forEach((arrow) =>{
        arrow.classList.add('programms-item-arrow-active')
      })
      toursDropDawnList.all.textContent = "Закрыть всё"
    } else{
      toursDropDawnList.all.classList.remove('programms-head-btn-active')
      toursDropDawnList.item.forEach((item) =>{
        item.classList.remove('programms-item-info-active')
      })
      toursDropDawnList.arrow.forEach((arrow) =>{
        arrow.classList.remove('programms-item-arrow-active')
      })
      toursDropDawnList.all.textContent = "Раскрыть всё"
    }  
  })