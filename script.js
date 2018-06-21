let gotSum = Number (prompt ("Сколько у вас денег?"));
let applesBought = Number (prompt ("Сколько яблок?"));
let breadsBought = Number (prompt ("Сколько булок?"));
let applesPrice = Number (prompt ("Цена яблока?")) * applesBought;
let breadsPrice = Number (prompt ("Цена булки?")) * breadsBought;
let enoughMoney = applesPrice + breadsPrice <= gotSum;
document.body.innerHtml = "<p>" + String (enoughMoney) + "</p>"
