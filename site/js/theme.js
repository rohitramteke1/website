const themeToggler = document.getElementById('theme-btn');

const container = document.querySelector('.container');

themeToggler.addEventListener('click', () => {
    container.classList.toggle('theme');
})