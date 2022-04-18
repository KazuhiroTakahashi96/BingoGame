// 要素取得
const reachNum = document.querySelector("#reach-num");
const bingoNum = document.querySelector("#bingo-num");
const ballNum = document.querySelector("#ball-num");
const span = document.querySelector("span");
const end = document.querySelector("#end");

// ボタン取得
const createBtn = document.querySelector("#create-btn");
const ballBtn = document.querySelector("#ball-btn");

// B, I, N, G, O 列の取得（縦列）
const col_B = document.querySelectorAll(".col-B");
const col_I = document.querySelectorAll(".col-I");
const col_N = document.querySelectorAll(".col-N");
const col_G = document.querySelectorAll(".col-G");
const col_O = document.querySelectorAll(".col-O");
const col_BINGO = [...col_B, ...col_I, ...col_N, ...col_G, ...col_O];

// 横列の取得
const row_1 = document.querySelectorAll(".row-1");
const row_2 = document.querySelectorAll(".row-2");
const row_3 = document.querySelectorAll(".row-3");
const row_4 = document.querySelectorAll(".row-4");
const row_5 = document.querySelectorAll(".row-5");

// 対角線の取得
const cross1 = document.querySelectorAll(".cross1");
const cross2 = document.querySelectorAll(".cross2");

// 配列のメソッドについて
// https://ja.javascript.info/array-methods

// ==============================================================
// =============== ビンゴボール（数字）の取り出しクラス ===============
// ==============================================================
class BingoBallNumber {
  constructor() {
    // 1〜75を持った長さ75の配列の作成
    this.bingoBallArray = [];
    for (let i = 1; i <= 75; i++) {
      this.bingoBallArray.push(i);
    }
    // 出たビンゴボールの数字を格納していく配列の作成
    this.ballNumArray = [];

    // 何個目のボールか（初期値＝1）
    this.ball = 1;
  }

  // ============= ビンゴボールの数字を作成する関数 ============
  makeBingoBall() {
    // n個目のボール
    span.innerHTML = this.ball;
    this.ball = this.ball + 1;

    // 0〜74の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * this.bingoBallArray.length);
    this.ballNumArray.unshift(this.bingoBallArray[randomNum]);
    // 数字が重複しないよう、元の配列から削除
    this.bingoBallArray.splice(randomNum, 1);

    // 画面に数字を表示
    if (this.bingoBallArray.length == 0) {
      ballNum.innerHTML = this.ballNumArray[0];
      ballBtn.classList.add("hide");
      setTimeout(() => {
        end.innerHTML = "終了";
      }, 1500);
    } else {
      ballNum.innerHTML = this.ballNumArray[0];
    }

    this.checkNumber();
  }

  // =========== ボールの数字とカード上の数字のチェックをして =============
  // ======== 一致した場合、カード上のその数字の背景色を変更する関数 =========
  checkNumber() {
    // 引いた数字の値がカード上にある場合、
    if (bingoCard.cardNumArray.includes(this.ballNumArray[0])) {
      // インデックス番号を取得する
      const indexNum = bingoCard.cardNumArray.indexOf(this.ballNumArray[0]);
      // 背景色を変える＝穴を開ける
      col_BINGO[indexNum].ariaChecked = "true";
    }

    this.showReachBing();
  }

  // ========== リーチ数、ビンゴ数をチェック、出力する関数 ============
  // ===== リーチ数をチェックする関数 =====
  checkReachNum(el) {
    let reachNum = 0;
    for (let i = 0; i < 5; i++) {
      // true(穴が空いてる)なら
      if (el[i].ariaChecked === "true") {
        reachNum += 1;
      }
    }
    return reachNum / 4 === 1 ? 1 : 0;
  }

  // ===== ビンゴ数をチェックする関数 =====
  checkBingoNum(el) {
    let bingoNum = 0;
    for (let i = 0; i < 5; i++) {
      // true(穴が空いてる)なら
      if (el[i].ariaChecked === "true") {
        bingoNum += 1;
      }
    }
    return bingoNum / 5 === 1 ? 1 : 0;
  }

  // ===== 画面に出力する関数 =====
  showReachBing() {
    // リーチ数
    const totalReachNumber =
      this.checkReachNum(col_B) +
      this.checkReachNum(col_I) +
      this.checkReachNum(col_N) +
      this.checkReachNum(col_G) +
      this.checkReachNum(col_O) +
      this.checkReachNum(row_1) +
      this.checkReachNum(row_2) +
      this.checkReachNum(row_3) +
      this.checkReachNum(row_4) +
      this.checkReachNum(row_5) +
      this.checkReachNum(cross1) +
      this.checkReachNum(cross2);

    // ビンゴ数
    const totalBingoNumber =
      this.checkBingoNum(col_B) +
      this.checkBingoNum(col_I) +
      this.checkBingoNum(col_N) +
      this.checkBingoNum(col_G) +
      this.checkBingoNum(col_O) +
      this.checkBingoNum(row_1) +
      this.checkBingoNum(row_2) +
      this.checkBingoNum(row_3) +
      this.checkBingoNum(row_4) +
      this.checkBingoNum(row_5) +
      this.checkBingoNum(cross1) +
      this.checkBingoNum(cross2);

    reachNum.innerHTML = totalReachNumber;
    bingoNum.innerHTML = totalBingoNumber;
  }
}

// ==============================================================
// ==================== ビンゴカードの作成クラス ====================
// ==============================================================
class BingoCard {
  constructor() {
    // ビンゴカードの数字を格納する配列
    this.cardNumArray = [];
  }

  // =========== ビンゴカードの数字を作成する関数 ===========
  makeRandomNum(plus) {
    // 1〜15を持った長さ15の配列の作成
    const array = [];
    for (let i = 1; i <= 15; i++) {
      array.push(i);
    }

    for (let i = 0; i < 5; i++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * array.length);
      this.cardNumArray.push(array[randomNum] + plus);
      // 数字が重複しないよう、元の配列から削除
      array.splice(randomNum, 1);
    }
  }

  // =========== 上で作成した数字を出力する関数 ============
  makeBingoCard() {
    // カードの各列に入るランダムな数字を作る
    this.makeRandomNum(0);
    this.makeRandomNum(15);
    this.makeRandomNum(30);
    this.makeRandomNum(45);
    this.makeRandomNum(60);

    // 数字を画面に出力
    col_BINGO.map((el, i) => {
      el.innerHTML = this.cardNumArray[i];
    });

    // 中央は常に'free'、穴が空いている(=true)状態
    col_N[2].innerHTML = "free";
    col_N[2].ariaChecked = "true";
  }
}

// ====================== インスタンス化 ======================
const bingoBallNumber = new BingoBallNumber();
const bingoCard = new BingoCard();

//======================== クリックイベント ========================
// ========= ビンゴカード作成ボタン =========
createBtn.addEventListener("click", () => {
  bingoCard.makeBingoCard();

  createBtn.classList.add("hide");
  ballBtn.classList.remove("hide");
});

// ========= ビンゴボールを引く（数字を表示する）ボタン =========
ballBtn.addEventListener("click", () => {
  bingoBallNumber.makeBingoBall();
});
