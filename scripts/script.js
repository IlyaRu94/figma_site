document.addEventListener('DOMContentLoaded', function(){
twimg=document.querySelectorAll('.twi');
simg=document.querySelectorAll('.si');
next=document.querySelector('.next');
down=document.querySelector('.down');
next2=document.querySelector('.str2');
down2=document.querySelector('.str1');
next3=document.querySelector('.nx');
down3=document.querySelector('.dw');

next.addEventListener('click',function(){
    nxt("twi-block",twimg);
});
down.addEventListener('click',function(){
    dwn("twi-block",twimg);
});
next2.addEventListener('click',function(){
    nxt("twi-block",twimg);
});
down2.addEventListener('click',function(){
    dwn("twi-block",twimg);
});
next3.addEventListener('click',function(){
    nxt("si-block",simg);
});
down3.addEventListener('click',function(){
    dwn("si-block",simg);
});


function nxt(block,img){
    console.log(block);
    active=document.querySelector('.'+block);
active.classList.remove(block); 
if (active!==img[img.length -1]){
active.nextElementSibling.classList.add(block);
}else{   
img[0].classList.add(block);
}
active=document.querySelector('.'+block);
}


function dwn(block,img){
    active=document.querySelector('.'+block);
 active.classList.remove(block); 
if (active !== img[0]){
active.previousElementSibling.classList.add(block);
}else{
img[img.length -1].classList.add(block);
}
active=document.querySelector('.'+block);
}



});