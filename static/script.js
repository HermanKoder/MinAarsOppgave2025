mangoPoints = 0
var mangoScoreEl = document.getElementById("mangoScore")
var mangoClickEl = document.getElementById("mangoClick")

mangoClickEl.addEventListener("click", plusPoeng)

function plusPoeng() {
    mangoPoints+=1
    mangoScoreEl.innerText = mangoPoints
}