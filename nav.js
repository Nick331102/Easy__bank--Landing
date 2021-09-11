const menu = document.querySelector("#toggle")
const nav = document.querySelector(".nav__container")
const navLinks = document.querySelector(".nav__link")

menu.addEventListener("click", () => {
    nav.classList.toggle("clicked")
    navLinks.forEach((link) => {
        link.classList.toggle("fade")

    })

})





