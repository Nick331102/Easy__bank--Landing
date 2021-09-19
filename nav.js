const menu = document.querySelector("#toggle")
const nav = document.querySelector(".nav__links--container")


menu.addEventListener("click", () => {
    nav.classList.toggle("clicked")
    menu.classList.toggle("clicked")
})





