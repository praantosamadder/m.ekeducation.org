// If current device is not mobile, THEN redirect to m.ekeducation.org

// Detect mobile
const isCurrentDeviceMobile = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return false;
    }
    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua);
};

let mobileWebsiteLink = "http://m.ekeducation.org/index.html"

if (isCurrentDeviceMobile()) {
    console.log("Currently running on mobile.")
    window.location.replace(mobileWebsiteLink)
} else  {
    console.log("Currently running on desktop/tablet")
    window.close()
}
