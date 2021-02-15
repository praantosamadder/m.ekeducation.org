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


// Add text to HTML

let text = {
    whyEkE__title: "The excellence of O/A Level education.",
    whyEkE__subTitle: "Lorem ipsum dolor",
    whyEkE__text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatYouGet__text: "Taught by experienced teachers in Dhaka",
    whatYouGet__subTitle: "A promise to provide the best support for your child's academic career",
    admissionPromise__subtitle: "ekeducation ensures that your child receives the best educare. " +
        "Here, your child can decide which academic passion to pursue. Providing an unique academic community, your child's passion" +
        "will build a bright future from liberal arts to the sciences."
}

setText("whyEkE__title", text.whyEkE__title)
setText("whyEkE__text", text.whyEkE__text)

setText("whatYouGet__text", text.whatYouGet__text)
setText("whatYouGet__subTitle", text.whatYouGet__subTitle)

setText("admissionPromise__subtitle", text.admissionPromise__subtitle)

function setText(id, text) {
    document.getElementById(id).innerText = text
}

// Init carousel
let flickity = new Flickity(".main-carousel", {
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false
})
