mangoScoreEl = 0
var mangoScoreEl = document.getElementById("mangoScore")
var mangoClickEl = document.getElementById("mangoClick")

mangoClickEl.addEventListener("click", plusPoeng)

function plusPoeng() {
    mangoScoreEl.innerText = mangoScoreEl++
}