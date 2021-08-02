'use strict';



    document.querySelector('pop-up-img').addEventListener('click',function(){
        console.log('btn clicked');
});
document.querySelector('.visible').addEventListener('click',function(){
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.pop-up').style.display = 'flex';
});


