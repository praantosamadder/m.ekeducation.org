// detect if running on Safari-iOS

let runningOniOS = () => {
    return navigator.platform.toLowerCase() === "iphone";
}

if (runningOniOS()) {
    document.ontouchmove = (event) => {
        if (event.scale !== 1) {
            event.preventDefault()
        }
    }
}
