// Detect device type
const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};

// If not mobile
if (getDeviceType() !== "mobile") {
    // TODO redirect to desktop site
    console.log("Not running on a mobile device")
    // window.location.replace("")
}

alert("Issue with Safari on iOS")
// alert("AppCodeName" + navigator.appCodeName)

