// Event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

// DOM Traversal

// const close = document.querySelectorAll('.close');

// for( let i=0; i<close.length; i++){
//     close[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// }

// kalau pake foreach
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();

//         // kita pengen ketika kita klik close itu cards event listener dibawah itu gausah jalan, jadi stop disini aja
//         e.stopPropagation(); //
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });

// DOM Traversal Method
// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element

// ------------------------------------------------

// Kalau kita pake containernya buat ngecek close mana yang kita klik

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});