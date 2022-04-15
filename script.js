const reachNum = document.querySelector("#reach-num");
const bingoNum = document.querySelector("#bingo-num");
const ballNum = document.querySelector("#ball-num");

// ボタン取得
const createBtn = document.querySelector("#create-btn");
const ballBtn = document.querySelector("#ball-btn");
const resetBtn = document.querySelector("#reset-btn");

// B, I, N, G, O 列の取得
const col_B = document.querySelectorAll(".col-B");
const col_I = document.querySelectorAll(".col-I");
const col_N = document.querySelectorAll(".col-N");
const col_G = document.querySelectorAll(".col-G");
const col_O = document.querySelectorAll(".col-O");

//==================== ビンゴカードの作成 ====================
class BingoCard {
  constructor() {
    console.log(this);

    for (let i = 0; i < 5; i++) {
      col_B[i].innerHTML = Math.floor(Math.random() * 15) + 1;
      col_I[i].innerHTML = Math.floor(Math.random() * 15) + 16;
      col_N[i].innerHTML = Math.floor(Math.random() * 15) + 31;
      col_G[i].innerHTML = Math.floor(Math.random() * 15) + 46;
      col_O[i].innerHTML = Math.floor(Math.random() * 15) + 61;
      // 中央は常に'free'
      col_N[2].innerHTML = "free";
    }
  }
}

//================= ビンゴボール（数字）の取り出し =================
class BingoBallNumber {
  constructor() {
    console.log("ビンゴボールの取り出し");
  }
}
const bingoBallNumber = new BingoBallNumber();

//======================== ボタンアクション ========================
// === ビンゴカード作成ボタン ===
createBtn.addEventListener("click", () => {
  const card = new BingoCard();
  console.log(card);
});

// === ビンゴボールを引くボタン ===
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
});

// === リセットボタン ===
resetBtn.addEventListener("click", () => {});
