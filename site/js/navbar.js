const menu_btn = document.getElementById('menu-btn');
const navtop = document.querySelector('.navtop');
const navitems = document.querySelector('.nav-items');

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// first set the display to none
console.log(screenWidth, screenHeight);
if(screenWidth <= 449)
{
    navitems.style.display = 'none';
    menu_btn.addEventListener('click', ()=> {
        if(navitems.style.display == 'block') {
            navitems.style.display = 'none';
        } else {
            navitems.style.display = 'block';
        }
    })
}
