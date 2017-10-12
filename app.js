var GoombaInputElem = document.querySelector("#goomba");
var BobbomdInputElem = document.querySelector("#bobbombs");
var CheapsInputElem = document.querySelector("#cheaps");

GoombaInputElem.addEventListener("change", function() {
  var GoombaInputValue = parseInt(GoombaInputElem.value);
  var BobbomdInputValue = parseInt(BobbomdInputElem.value);
  var CheapsInputValue = parseInt(CheapsInputElem.value);

  if (isNaN(GoombaInputValue) || isNaN(BobbomdInputValue) || isNaN(CheapsInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;

  } else {
    document.querySelector("#num1").innerHTML = (GoombaInputValue * 5);
    document.querySelector("#mytotal").innerHTML = (GoombaInputValue * 5) + (BobbomdInputValue * 7) + (CheapsInputValue * 11);
    document.querySelector("#goom").classList.add("animated");
    document.querySelector("#goom").classList.add("bounce");
    setTimeout(function() {
      document.querySelector("#goom").classList.remove("bounce");
    }, 2000)
  }
});

BobbomdInputElem.addEventListener("change", function() {
  var GoombaInputValue = parseInt(GoombaInputElem.value);
  var BobomdInputValue = parseInt(BobbomdInputElem.value);
  var CheapsInputValue = parseInt(CheapsInputElem.value);

  if (isNaN(GoombaInputValue) || isNaN(BobbomdInputValue) || isNaN(CheapsInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
    5
  } else {
    document.querySelector("#mytotal").innerHTML = (GoombaInputValue * 5) + (BobbomdInputValue * 7) + (CheapsInputValue * 11);
    document.querySelector("#num2").innerHTML = (BobbomdInputValue * 7);


    document.querySelector("#bob").classList.add("animated");
    document.querySelector("#bob").classList.add("bounce");
    setTimeout(function() {
      document.querySelector("#bob").classList.remove("bounce");
    }, 3000)

  }
});

CheapsInputElem.addEventListener("change", function() {
  var GoombaInputValue = parseInt(GoombaInputElem.value);
  var BobbomdInputValue = parseInt(BobbomdInputElem.value);
  var CheapsInputValue = parseInt(CheapsInputElem.value);
  (BobbomdInputValue * 7)

  if (isNaN(GoombaInputValue) || isNaN(BobbomdInputValue) || isNaN(CheapsInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;

  } else {
    document.querySelector("#mytotal").innerHTML = (GoombaInputValue * 5) + (BobbomdInputValue * 7) + (CheapsInputValue * 11);
    document.querySelector("#num3").innerHTML = (CheapsInputValue * 11);
    document.querySelector("#cheap").classList.add("animated");
    document.querySelector("#cheap").classList.add("bounce");
    setTimeout(function() {
      document.querySelector("#cheap").classList.remove("bounce");
    }, 3000)
  }
});

var GoombaInputValue = parseInt(GoombaInputElem.value);
var BobbomdInputValue = parseInt(BobbomdInputElem.value);
var CheapsInputValue = parseInt(CheapsInputElem.value);

if (isNaN(GoombaInputValue) || isNaN(BobbomdInputValue) || isNaN(CheapsInputValue)) {
  document.querySelector("#mytotal").innerHTML = 0;

} else {
  document.querySelector("#mytotal").innerHTML = (GoombaInputValue * 5) + (BobbomdInputValue * 7) + (CheapsInputValue * 11);
}
