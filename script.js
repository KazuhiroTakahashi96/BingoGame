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
const col_BINGO = [...col_B, ...col_I, ...col_N, ...col_G, ...col_O];
console.log(col_BINGO);

// 全td要素（ビンゴカードの数字）の取得
const td = document.querySelectorAll("td");
// console.log(td);

// ==============================================================
// ==============================================================
//=============== ビンゴボール（数字）の取り出しクラス ===============
class BingoBallNumber {
  constructor() {
    // 0〜74を持った長さ75の配列の作成
    this.bingoBallArray = [];
    for (let i = 0; i < 75; i++) {
      this.bingoBallArray.push(i);
    }
    // ビンゴボールの数字を格納する配列の作成
    this.ballNumArray = [];
  }

  // ============= ビンゴボールの数字を作成する関数 ============
  makeBingoBall() {
    // 0〜74の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * this.bingoBallArray.length);
    // 上記で取得したランダムな数字に1を足して、配列に格納
    this.ballNumArray.unshift(this.bingoBallArray[randomNum] + 1);
    // 数字が重複しないよう、元の配列から削除
    this.bingoBallArray.splice(randomNum, 1);

    // 画面に数字を表示
    if (this.bingoBallArray.length === 0) {
      ballNum.innerHTML = "終了";
    } else {
      ballNum.innerHTML = this.ballNumArray[0];
    }

    this.checkNumber();
  }

  // =========== ボールの数字とカード上の数字のチェックをして =============
  // ======== 一致した場合、カード上のその数字をハイライトする関数 =========
  checkNumber() {
    // 引いた数字の値がカード上にある場合、
    if (bingoCard.cardNumArray.includes(this.ballNumArray[0])) {
      // インデックス番号を取得する
      const indexNum = bingoCard.cardNumArray.indexOf(this.ballNumArray[0]);
      // 背景色を変える＝穴を開ける
      col_BINGO[indexNum].ariaChecked = "true";
    }
  }
}

// ==============================================================
// ==============================================================
//==================== ビンゴカードの作成クラス ====================
class BingoCard {
  constructor() {
    // ビンゴカードの数字を格納する配列
    this.cardNumArray = [];
  }

  // =========== ビンゴカードの数字を作成する関数 ===========
  makeRandomNum(plus) {
    // 0〜14を持った長さ15の配列の作成
    const array = [];
    for (let i = 0; i < 15; i++) {
      array.push(i);
    }

    for (let i = 0; i < 5; i++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * array.length);
      this.cardNumArray.push(array[randomNum] + plus);
      // 数字が重複しないよう、元の配列から削除
      array.splice(randomNum, 1);
    }
    return this.cardNumArray;
  }

  // =========== 上で作成した数字を出力する関数 ============
  makeBingoCard() {
    // 上の関数で作成したランダムな数字を、それぞれ変数に格納
    const B_Num = this.makeRandomNum(1);
    const I_Num = this.makeRandomNum(16);
    const N_Num = this.makeRandomNum(31);
    const G_Num = this.makeRandomNum(46);
    const O_Num = this.makeRandomNum(61);

    // 数字を画面に出力
    for (let i = 0; i < 5; i++) {
      col_B[i].innerHTML = B_Num[i];
      col_I[i].innerHTML = I_Num[i + 5];
      col_N[i].innerHTML = N_Num[i + 10];
      col_G[i].innerHTML = G_Num[i + 15];
      col_O[i].innerHTML = O_Num[i + 20];
    }
    // 中央は常に'free'
    col_N[2].innerHTML = "free";
    col_N[2].ariaChecked = "true";

    // return bingoCardNumbers;
  }
}

// ============= リーチ数とビンゴ数をチェックする関数 ===============
function checkingReachBingo() {}

// ====================== インスタンス化 ======================
const bingoBallNumber = new BingoBallNumber();
const bingoCard = new BingoCard();

//======================== クリックイベント ========================
// ========= ビンゴカード作成ボタン =========
createBtn.addEventListener("click", () => {
  bingoCard.makeBingoCard();

  createBtn.classList.add("hide");
  ballBtn.classList.remove("hide");
  resetBtn.classList.remove("hide");
});

//
// ========= ビンゴボールを引く（数字を表示する）ボタン =========
ballBtn.addEventListener("click", () => {
  bingoBallNumber.makeBingoBall();
});

//
// ========= リセットボタン =========
resetBtn.addEventListener("click", () => {});
