// Sticky header animation
let front_card_height = document.getElementById("front_card").clientHeight - document.getElementById("top_header").clientHeight
console.log(front_card_height)

window.onscroll = () => {
    if (window.pageYOffset >= front_card_height) {
    }
}