// add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// Toogle Navbar for small screens
const navbar = document.getElementById("navbar");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const togglerNavbar = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", togglerNavbar);

// header active header when window scroll down to 100px
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
})