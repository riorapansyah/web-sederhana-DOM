// toggele class active

const navbarNav = document.querySelector('.navbar-nav')

// ketika menu di klik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilang kan navbar

const hamburger = document.querySelector('#hamburger-menu');

function removeActive (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}
document.addEventListener('click', removeActive);