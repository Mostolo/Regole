var gameData = {
Unità: 0,
UnitàPerClick: 1,
CostoUnitàPerClick: 5
}

var mainGameLoop = window.setInterval(function() {
ObtainUnits()
}, 1000)

function ObtainUnits() {
gameData.Unità += gameData.UnitàPerClick
if (gameData.Unità == 1) {
    document.getElementById("SonoGroot").innerHTML = gameData.Unità + " sola Unità"
} else {
    document.getElementById("SonoGroot").innerHTML = gameData.Unità + " Unità!"
}
}

function CompraUnitàPerClick() {
    if (gameData.Unità >= gameData.CostoUnitàPerClick) {
        gameData.Unità -= gameData.CostoUnitàPerClick
        gameData.UnitàPerClick += 1
        gameData.CostoUnitàPerClick *= 2
        if (gameData.Unità == 1) {
            document.getElementById("SonoGroot").innerHTML = gameData.Unità + " sola Unità"
        } else {
            document.getElementById("SonoGroot").innerHTML = gameData.Unità + " Unità!"
        }
        document.getElementById("SonoBruceLee").innerHTML = "Più unità! attualmente ottieni: " + gameData.UnitàPerClick + " unità per click! Per migliorare ulteriormente, necessiti di " + gameData.CostoUnitàPerClick + " unità!"
    }
}
