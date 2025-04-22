const mangoScoreEl = document.getElementById("mangoScore") //The score that is displayed
const mangoClickEl = document.getElementById("mangoClick") //Image ID that activates on click
const strongerHandsPriceEl = document.getElementById("strongerHandsPrice") // More per click cost
const farmerPriceEl = document.getElementById("farmerPrice") // farmer cost
const upgradeFarmerPriceEl = document.getElementById("upgradeFarmerPrice") // more clicks per farmer cost
const strongerHandsHeaderEl = document.getElementById("strongerHandsHeader") // more per click cost DISPLAY
const farmerHeaderEl = document.getElementById("farmerHeader") // farmer cost DISPLAY
const upgradeFarmerHeaderEl = document.getElementById("upgradeFarmerHeader") //  more clicks per farmer cost DISPLAY
const strongerHandsBuyEl = document.getElementById("strongerHandsBuy") // Button for buying upgrade 
const farmerBuyEl = document.getElementById("farmerBuy") // Button for buying upgrade 
const upgradeFarmerBuyEl = document.getElementById("upgradeFarmerBuy") // Button for buying upgrade 
const notEnoughMangosEl = document.getElementById("notEnoughMangos") // Not enough mangos message
const notLoggedInEl = document.getElementById("notLoggedIn") // Not logged in message
const saveScoreButton = document.getElementById("saveScore") // Button for saving score

mangoOnClick = 1 //The amount of points that is raised on click
mangoPoints = 0 //The standard amount of points u start with
strongerHands = 1 //The standard amount of strongerHands u start with
farmer = 0 //The standard amount of farmers u start with
upgradeFarmer = 0 //The standard amount of upgraded Farmers u start with
prices = [10, 50, 100] // start prices

mangoClickEl.addEventListener("click", mangoClickJS);
function mangoClickJS() {
    mangoPoints += mangoOnClick;
    mangoScoreEl.innerText = mangoPoints;
    notEnoughMangosEl.innerHTML = "";
}

strongerHandsBuyEl.addEventListener("click", strongerHandsBuyJS);
function strongerHandsBuyJS() {
    if (mangoPoints >= prices[0]) {
        strongerHands += 1;
        mangoOnClick += 1;
        mangoPoints -= prices[0];
        prices[0] = Math.round(prices[0] * 1.2);
        strongerHandsPriceEl.innerHTML = prices[0];
        strongerHandsHeaderEl.innerHTML = "Stronger Hands: " + strongerHands;
        mangoScoreEl.innerText = mangoPoints;
        notEnoughMangosEl.innerHTML = "";
    } else {
        notEnoughMangosEl.innerHTML = "Not enough Mangos";
    }
}

farmerBuyEl.addEventListener("click", farmerBuyJS);
function farmerBuyJS() {
    if (mangoPoints >= prices[1]) {
        farmer += 1;
        mangoPoints -= prices[1];
        prices[1] = Math.round(prices[1] * 1.2);
        farmerPriceEl.innerHTML = prices[1];
        farmerHeaderEl.innerHTML = "Farmer: " + farmer;
        mangoScoreEl.innerText = mangoPoints;
        notEnoughMangosEl.innerHTML = "";
    } else {
        notEnoughMangosEl.innerHTML = "Not enough Mangos";
    }
}

upgradeFarmerBuyEl.addEventListener("click", upgradeFarmerBuyJS);
function upgradeFarmerBuyJS() {
    if (mangoPoints >= prices[2]) {
        upgradeFarmer += 1;
        mangoPoints -= prices[2];
        prices[2] = Math.round(prices[2] * 1.2);
        upgradeFarmerPriceEl.innerHTML = prices[2];
        upgradeFarmerHeaderEl.innerHTML = "Upgrade Farmers: " + upgradeFarmer;
        mangoScoreEl.innerText = mangoPoints;
        notEnoughMangosEl.innerHTML = "";
    } else {
        notEnoughMangosEl.innerHTML = "Not enough Mangos";
    }
}

setInterval(function () {
    if (farmer > 0) {
        mangoPoints += farmer * (1 + upgradeFarmer);
        mangoScoreEl.innerText = mangoPoints;
    }
}, 1000);

