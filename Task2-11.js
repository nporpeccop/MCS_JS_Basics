let gotMoney = Number (window.prompt ("Сколько у вас денег?"));
let applesBought = Number (window.prompt ("Сколько яблок желаете?"));
let breadsBought = Number (window.prompt ("Сколько булок желаете?"));
let applesPrice = Number (window.prompt ("Сколько стоит яблоко?")) * applesBought;
let breadsPrice = Number (window.prompt ("Сколько стоит булка?")) * breadsBought;
let enoughMoney = applesPrice + breadsPrice <= gotMoney;
document.write ("<p>" + String (enoughMoney) + "</p>")