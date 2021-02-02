let hamburgerButton     = document.getElementById("nav-hamburger-container")
let everythingButNav    = document.getElementById("everything-but-nav")
let navMenu             = document.getElementById("nav-menu")
let hamburgerIcon       = document.getElementById("hamburger-icon")

let isNavMenuVisible = false

hamburgerButton.onclick = () => {
    if (isNavMenuVisible) {
        console.log("clicked")
        hideNavMenu()
    } else {
        console.log("clicked")
        showNavMenu()
    }
}

// showNavMenu()

function hideNavMenu() {
    navMenu.style.display = "none"
    everythingButNav.style.display = "inherit"
    isNavMenuVisible = false
    hamburgerIcon.src = "./img/icons/menu_hamburger.svg"
}

function showNavMenu() {
    navMenu.style.display = "inherit"
    everythingButNav.style.display = "none"
    isNavMenuVisible = true
    hamburgerIcon.src = "./img/icons/x.svg"
}

function
onClick_NavMenuItem(linkId) {
    hideNavMenu()
    document.getElementById(linkId).click()
}