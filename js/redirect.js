// If current device is not mobile, THEN redirect to m.ekeducation.org

// Detect mobile
const isCurrentDeviceMobile = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return false;
    }
    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua);
};

if (isCurrentDeviceMobile()) {
    console.log("Current device is mobile")
    // Do nothing
} else {
    console.log("Current device is not mobile")
    window.location.replace("https://ekeducation.org/")
}