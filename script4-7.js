console.log ("You are at: " + window.location);

function haveEnough (gotSum, applesBought, breadsBought, applePrice, breadPrice) {
	return applesBought * applePrice + breadsBought * breadPrice <= gotSum ? 
	"Вам хватает денег на покупки" : "Вам не хватает денег"
}

document.querySelector ('p').innerHTML = haveEnough (
	Number (prompt ("Сколько у вас денег?")),
	Number (prompt ("Сколько яблок?")),
	Number (prompt ("Сколько булок?")),
	Number (prompt ("Цена яблока?")),
	Number (prompt ("Цена булки?"))
)