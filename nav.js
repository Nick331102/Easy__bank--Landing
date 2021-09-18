const menu = document.querySelector("#toggle")
const nav = document.querySelector(".nav__links--container")
const lines = document.querySelector(".line")


menu.addEventListener("click", () => {
    nav.classList.toggle("clicked")
    lines.classList.toggle("clicked")
})





