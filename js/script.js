let bur = document.querySelector(".header-menu")
bur.addEventListener("click", () => {
    document.querySelector(".header-burger").style.display = "block"
})

let burClose = document.querySelector(".header-burger-menu-nav div")
burClose.addEventListener("click", () => {
    document.querySelector(".header-burger").style.display = "none"
})