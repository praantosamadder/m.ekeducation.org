window.onkeydown = (e) => {
    if (e.key === "F12") {
        e.preventDefault()
        window.location.replace("about:blank")
    }
}

window.oncontextmenu = (e) => {
    e.preventDefault()
}
