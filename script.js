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

// 全td要素（ビンゴカードの数字）の取得
const td = document.querySelectorAll("td");

//==================== ビンゴカードの作成 ====================
class BingoCard {
  constructor() {}
}

//================= ビンゴボール（数字）の取り出し =================
class BingoBallNumber {
  constructor() {
    console.log("ビンゴボールの取り出し");
  }

  makeClass() {
    const bingoCaed = new BingoCard();
    console.log(bingoCaed);
  }
}

//======================== ボタンアクション ========================
// === ビンゴカード作成ボタン ===
createBtn.addEventListener("click", () => {
  const card = new BingoCard();
  console.log(card);

  showBingoCard();
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

// =============ビンゴカードの数字を作成する関数============
function makeRandomNum(plus) {
  let array = [];
  for (let i = 0; i < 15; i++) {
    array.push(i);
  }

  let numArray = [];
  for (let i = 0; i < 5; i++) {
    // ランダムな値を取得
    let randomNum = Math.floor(Math.random() * array.length);
    numArray.push(array[randomNum] + plus);
    // 数字が重複しないよう、元の配列から削除
    array.splice(randomNum, 1);
  }
  return numArray;
}

// ==================上で作成した数字を出力する関数===================
function showBingoCard() {
  const B_Num = makeRandomNum(1);
  const I_Num = makeRandomNum(16);
  const N_Num = makeRandomNum(31);
  const G_Num = makeRandomNum(46);
  const O_Num = makeRandomNum(61);

  // 数字を画面に出力
  for (let i = 0; i < 5; i++) {
    col_B[i].innerHTML = B_Num[i];
    col_I[i].innerHTML = I_Num[i];
    col_N[i].innerHTML = N_Num[i];
    col_G[i].innerHTML = G_Num[i];
    col_O[i].innerHTML = O_Num[i];
  }
  // 中央は常に'free'
  col_N[2].innerHTML = "free";
}
