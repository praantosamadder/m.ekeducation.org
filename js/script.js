let md = new MobileDetect(navigator.userAgent)

if (md.os() === "AndroidOS" && md.userAgent() === "Chrome") {
    document.getElementById("top_header_css").href = "./css_v8/top_header.css"
    document.getElementById("styles_css").href = "./css_v8/styles.css"
    document.getElementById("wye_css").href = "./css_v8/wye.css"
    document.getElementById("nav_menu_css").href = "./css_v8/nav_menu.css"
    document.getElementById("courses_offered_css").href = "./css_v8/courses_offered.css"
    document.getElementById("root_css").href = "./css_v8/root.css"
    document.getElementById("admissions_css").href = "./css_v8/admissions.css"

    console.log(document.styleSheets)
}
