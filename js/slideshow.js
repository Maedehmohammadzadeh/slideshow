let slide_container = document.getElementsByClassName('slide');
let next = document.getElementById('next_button');
let index = 0;

next.addEventListener('click', function () {
    slide_container[index].style.display = 'none';
    index++;
    if (index == slide_container.length) {
        index = 0;
    }
    slide_container[index].style.display = 'block';
});
let back = document.getElementById('back_button');
back.addEventListener('click', function () {
    slide_container[index].style.display = 'none';
    index--;
    if (index == -1) {
        index = slide_container.length - 1;
    }
    slide_container[index].style.display = 'block';
});