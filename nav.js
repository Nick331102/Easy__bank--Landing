const menu = document.querySelector("#toggle")
const nav = document.querySelector(".nav__links--container")
const overlay = document.querySelector(".clicked__overlay")


menu.addEventListener("click", () => {
    nav.classList.toggle("clicked")
    menu.classList.toggle("clicked")
    overlay.classList.toggle("show")
})





