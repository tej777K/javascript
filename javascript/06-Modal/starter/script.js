'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openmodel = function(){
    console.log('Button clicked');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i =0 ; i<btnsOpenModel.length;i++){
     btnsOpenModel[i].addEventListener('click' , openmodel);  
}


const closeModel = function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click' , closeModel);
overlay.addEventListener('click' , closeModel);


document.addEventListener('keydown' , function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !model.classList.contains('hidden')) {
       
            closeModel();
    } 
})