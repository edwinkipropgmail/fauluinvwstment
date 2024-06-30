'use strict';
const modal =document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//const btnOpenModalOne = document.querySelector('.shower-modal');
//const btnOpenModalTwo = document.querySelector('.showet-modal');

const openModalBtn = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for (let i = 0; i<btnOpenModal.length; i++) btnOpenModal[i].addEventListener('click', openModalBtn);
   // const openModalBtnOne = function () {
       // message.classList.remove('hidden');
        //overlay.classList.remove('hidden'); };

       // const openModalBtnTwo = function () {
       //     messageone.classList.remove('hidden');
        //    overlay.classList.remove('hidden');};

//btnOpenModal.addEventListener('click', openModalBtn);
//btnOpenModalOne.addEventListener('click', openModalBtnOne);
//btnOpenModalTwo.addEventListener('click', openModalBtnTwo);


const closemodalBtn = function () {
    modal.classList.add('hidden');
        overlay.classList.add('hidden');
}
    btnClosedModal.addEventListener('click', closemodalBtn);
    overlay.addEventListener('click', closemodalBtn);

    document.addEventListener('keyup', function(e) {
        console.log(e.key);
        if (e.key ==='Escape' && !modal.classList.contains('hidden')) {
            closemodalBtn();
        }
    });


