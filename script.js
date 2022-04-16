// 要素取得
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
// console.log(td);

//==================== ビンゴカードの作成クラス ====================
class BingoCard {
  constructor() {}
}

//=============== ビンゴボール（数字）の取り出しクラス ===============
class BingoBallNumber {
  constructor() {
    console.log("ビンゴボールクラスの取り出し");
  }
}

//
// ========= ボールの数字とカード上の数字のチェックをする関数 =========
function checkingNumber(cardNum) {
  console.log(cardNum);
}

//
// ================= ビンゴカードの数字を作成する関数 ===============
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

//
// ================= 上で作成した数字を出力する関数 ==================
function makeBingoCard() {
  // 上の関数で作成したランダムな数字を、それぞれ変数に格納
  const B_Num = makeRandomNum(1);
  const I_Num = makeRandomNum(16);
  const N_Num = makeRandomNum(31);
  const G_Num = makeRandomNum(46);
  const O_Num = makeRandomNum(61);
  const bingoCardNumber = B_Num.concat(I_Num)
    .concat(N_Num)
    .concat(G_Num)
    .concat(O_Num);
  checkingNumber(bingoCardNumber);

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
  col_N[2].ariaChecked = "true";
}

//
// ============= ビンゴボール（数字）を作成する関数 ===============
const bingoBallArray = [];
for (let i = 0; i < 75; i++) {
  bingoBallArray.push(i);
}
const ballNumArray = [];

function makeBingoBall() {
  // ランダムな値を取得
  let randomNum = Math.floor(Math.random() * bingoBallArray.length);
  ballNumArray.unshift(bingoBallArray[randomNum] + 1);
  // 数字が重複しないよう、元の配列から削除
  bingoBallArray.splice(randomNum, 1);

  console.log(bingoBallArray);
  console.log(ballNumArray);

  ballNum.innerHTML = ballNumArray[0];
}

//
//
//
//
//
//======================== クリックイベント ========================
// === ビンゴカード作成ボタン ===
createBtn.addEventListener("click", () => {
  const card = new BingoCard();
  console.log(card);

  makeBingoCard();
  createBtn.classList.add("hide");
  ballBtn.classList.remove("hide");
  resetBtn.classList.remove("hide");
});

//
// === ビンゴボールを引く（数字を表示する）ボタン ===
ballBtn.addEventListener("click", () => {
  makeBingoBall();
  checkingNumber();
});

//
// === リセットボタン ===
resetBtn.addEventListener("click", () => {});
