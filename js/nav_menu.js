let hamburgerButton     = document.getElementById("nav-hamburger-container")
let everythingButNav    = document.getElementById("everything-but-nav")
let navMenu             = document.getElementById("nav-menu")

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
}

function showNavMenu() {
    navMenu.style.display = "inherit"
    everythingButNav.style.display = "none"
    isNavMenuVisible = true
}

function onClick_NavMenuItem(linkId) {
    hideNavMenu()
    document.getElementById("nav-menu-link-courses").click()
}