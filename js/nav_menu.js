let hamburgerButton     = document.getElementById("nav-hamburger-container")
let everythingButNav    = document.getElementById("articleTag")
let navMenu             = document.getElementById("nav-menu")
let hamburgerIcon       = document.getElementById("hamburger-icon")

let isNavMenuVisible = false
let lastUserScrollDistance = 0


// Hide nav bar when scrolling
let canShowNavBar = true
let navBar = document.getElementById("nav-bar")

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        showNavBar()
    } else {
        hideNavBar()
    }
    prevScrollPos = currentScrollPos;
}

function hideNavBar() {
    navBar.style.top = "-120px"
}

function showNavBar() {
    navBar.style.top = "0px"
}


// Show Nav Menu when Hamburger icon clicked
hamburgerButton.onclick = () => {
    if (isNavMenuVisible) {
        console.log("clicked")
        hideNavMenu()
    } else {
        console.log("clicked")
        showNavMenu()
    }
}

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
    hamburgerIcon.src = "./img/icons/menu-icons/close_button.svg"
}

function onClick_NavMenuItem(linkId) {
    hideNavMenu()
    document.getElementById(linkId).click()
}