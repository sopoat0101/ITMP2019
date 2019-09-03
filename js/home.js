
var statePage = 0;

function getNext() {
    let title = document.querySelector('.title');
    let button = document.querySelector('.next');
    if (statePage == 0) {
        title.classList.add('fadeOut');
        title.style.opacity = 0;
        button.classList.add('fadeOut');
        button.style.transform = 'rotate(180deg)';
        statePage = 1;
    } else {
        title.classList.remove('fadeOut');
        title.style.opacity = 1;
        button.classList.remove('fadeOut');
        button.style.transform = 'rotate(0deg)';
        statePage = 0;
    }


}