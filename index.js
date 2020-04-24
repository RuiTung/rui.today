/**
 * @author Rui <ruimavic@smith.com>
 * @description basic functions for the index page's slideshow and scroll button
 */

var portfolios = [
    "CanadaPlace.jpg",
    "CanadaPlaceWaterDrop.jpg",
    "CloverPoint.jpg",
    "CraigdarrochCastle.jpg",
    "EnglishBay.jpg",
    "EnglishBayCloudy.jpg",
    "InnerHabor.jpg",
    "InnerHarborNight.jpg",
    "MapleLeaves.jpg",
    "MountDouglas.jpg",
    "MountMaxwell.jpg",
    "Mushroom.JPG",
    "RedHouseInSnow.jpg",
    "SakuraDrops.jpg",
    "Seattle.jpg",
    "SouthernGulfIsland.jpg",
    "SouthernGulfIslandFerry.jpg",
    "StraitOfGeorgia.jpg",
    "SydneyMarket.jpg",
    "UniersityOfVictoria.jpg",
    "YellowBus.jpg"
];

window.onscroll = function () {
    this.goToTop();
}

function goToTop() {
    var topBtn = document.getElementById("topBtn");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function initTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var section4 = document.getElementById("section-4");
var i = 0;
setInterval(function() {
    if(section4) {
        if(i < portfolios.length) {
            section4.style.backgroundImage = "url(assets/" + portfolios[i] + ")";
            i += 1;
        } else {
            i = 0;
        }
    }
}, 6000);