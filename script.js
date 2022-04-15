const reachNum = document.querySelector("#reach-num");
const bingoNum = document.querySelector("#bingo-num");
const ballNum = document.querySelector("#ball-num");
const ballBtn = document.querySelector("#ball-btn");
const resetBtn = document.querySelector("#reset-btn");

const col_B = document.querySelectorAll(".col-B");
console.log(col_B);
for (let i = 0; i < 5; i++) {
  col_B[i].innerHTML = Math.floor(Math.random() * 15) + 1;
}

//==================== ビンゴカードの作成 ====================
class BingoCard {
  constructor(x) {
    this.sum = Math.floor(Math.random() * x);
    console.log(this.sum);
  }
  calc() {
    console.log(this.sum * 10);
  }
}

//================= ビンゴボール（数字）の取り出し =================
class BingoBallNumber {
  constructor() {
    console.log("ビンゴボールの取り出し");
  }
}
const bingoBallNumber = new BingoBallNumber();

////////////////////////

ballBtn.addEventListener("click", () => {
  let ballNumArray = [];
  for (let i = 1; i <= 75; i++) {
    ballNumArray.push(i);
  }
  console.log(ballNumArray);

  const randomNum = Math.floor(Math.random() * 75) + 1;
  console.log(randomNum);

  let numArr = ballNumArray;
  if (numArr.includes(randomNum)) {
    console.log("success");
    ballNum.innerHTML = randomNum;
  }

  const card = new BingoCard(100);
  card.calc();
});
