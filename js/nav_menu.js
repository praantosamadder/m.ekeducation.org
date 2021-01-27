let hamburgerButton     = document.getElementById("nav-hamburger-container")
let everythingButNav    = document.getElementById("everything-but-nav")
let navMenu             = document.getElementById("nav-menu")

let isNavMenuVisible = false

hamburgerButton.onclick = () => {
    if (isNavMenuVisible) {
        console.log("clicked")
        hideNavMenu()
        isNavMenuVisible = false
    } else {
        console.log("clicked")
        showNavMenu()
        isNavMenuVisible = true
    }
}

function hideNavMenu() {
    navMenu.style.display = "none"
    everythingButNav.style.display = "inherit"
}

function showNavMenu() {
    navMenu.style.display = "inherit"
    everythingButNav.style.display = "none"
}