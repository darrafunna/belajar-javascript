const thumbnail = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');

thumbnail.forEach(function(thumb){
    thumb.addEventListener('click', function(e){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbnail.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    });
});

// ------------------------------------------------

// kalau pake container

// const container = document.querySelector('.container');

// container.addEventListener('click', function(e){
//     if(e.target.className == 'thumb'){
//         e.target.parentElement.previousElementSibling.src = e.target.src;
//     }
// });