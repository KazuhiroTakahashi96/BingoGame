const reachNum = document.querySelector("#reach-num");
const bingoNum = document.querySelector("#bingo-num");
const ballNum = document.querySelector("#ball-num");
const ballBtn = document.querySelector("#ball-btn");
const resetBtn = document.querySelector("#reset-btn");

const ballNumArray = [];
for (let i = 1; i <= 75; i++) {
  ballNumArray.push(i);
}
console.log(ballNumArray);

ballBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 75 + 1);
  console.log(randomNum);

  let numArr = ballNumArray;
  if (numArr.includes(randomNum)) {
    console.log("success");
  }

  ballNum.innerText = randomNum;
});

//==================== ビンゴカードの作成 ====================
class BingoCard {
  constructor(x) {
    console.log("クラス作成");
    this.sum = Math.floor(Math.random() * x);
    console.log(this.sum);
  }
  calc(x) {
    console.log(x * 20);
  }
}
const card = new BingoCard(100);
console.log(typeof card.sum);
card.calc(50);

//================= ビンゴボール（数字）の取り出し =================
class BingoBallNumber {
  constructor() {
    console.log("ビンゴボールの取り出し");
  }
}
const bingoBallNumber = new BingoBallNumber();
