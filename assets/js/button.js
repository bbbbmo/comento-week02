price1 = 1000;
price2 = 1500;
price3 = 1800;
price4 = 2000;

document
  .getElementById("item_btn1")
  .addEventListener("click", function (event) {
    const money = inputMoney();
    onClickBtn();
    saveMoney(money, price3);
    console.log(saveMoney());
  });

function onClickBtn() {
  const btn1 = document.getElementById("item_btn1");
  const btn2 = document.getElementById("item_btn2");
  const btn3 = document.getElementById("item_btn3");
  const btn4 = document.getElementById("item_btn4");
  const btn5 = document.getElementById("item_btn5");
  const btn6 = document.getElementById("item_btn6");

  btn1.innerText = "🔘";
  btn2.innerText = "🔘";
  btn3.innerText = "🔘";
  btn4.innerText = "🔘";
  btn5.innerText = "🔘";
  btn6.innerText = "🔘";
}

function saveMoney(money, price) {
  const result = money - price;
  return result;
}
