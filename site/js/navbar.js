const menu_btn = document.getElementById('menu-btn');
const navtop = document.querySelector('.navtop');
const navitems = document.querySelector('.nav-items');


// first set the display to none
navitems.style.display = 'none';
menu_btn.addEventListener('click', ()=> {
    if(navitems.style.display == 'block') {
        navitems.style.display = 'none';
    } else {
        navitems.style.display = 'block';
    }
})

