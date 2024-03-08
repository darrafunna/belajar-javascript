// Event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// for( let i=0; i<close.length; i++){
//     close[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });
// }

// kalau pake foreach
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});

// DOM Traversal Method
// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element