var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var RightArrow = window.document.getElementById("rightarrow")
var LeftArrow = window.document.getElementById("leftarrow")

function RollCarouselRight() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex;"
    RightArrow.style = "display:none"
    LeftArrow.style = "display:flex; margin: 25% 0 0 90%"
}

function RollCarouselLeft() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    RightArrow.style = "display:flex"
    LeftArrow.style = "display:none"
}