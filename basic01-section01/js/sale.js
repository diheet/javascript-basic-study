function showPrice() {
  var oPrice = document.querySelector("#originalPrice").value;
  var rate = document.querySelector("#rate").value;

  if (oPrice > 0 && rate > 0) {
    var savePrice = oPrice * (rate/100);
    var resultPrice = oPrice - savePrice;
  }

  document.querySelector("#showResult").innerHTML =
    "상품의 원래 가격:" + oPrice + "할인율 : " + rate + "절약된 금액 : " + savePrice + "최종 가격 : " + resultPrice;
}
