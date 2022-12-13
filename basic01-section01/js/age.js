function calc() {
  var currentYear = 2022;
  var birthYear = prompt("태어난 연도를 입력하세요", "YYYY");
  var age = 0;
  age = currentYear - birthYear + 1;
  //document = 현재 웹브라우저 페이지 그 잡채
  //querySelector = id가 result인 웹요소(div)를 의미
  //.innerHTML = 대입한 값으로 html을 대체
  document.querySelector("#result").innerHTML = age + "살 이네용";
}
