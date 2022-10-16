/**
 * 三項演算子？：
 * ※使い過ぎには注意
 */
// 三項演算子を使うとifとelse ifなどで書くことが1行で書ける(要するにtrue時とfalse時の対応が書ける)
// 使い方：ある条件 ? 条件がtrueの時:条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // toLocaleString()メソッドで3桁区切りで「,」を入れるお金の計算などで使う表記にできる
// // ※文字列では使用不可、そのまま出力される
// console.log(num.toLocaleString());

// // この条件時は~する、この条件に合わないときは~すると言うことが1行でできる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// 関数のreturn部分に三項演算子を使う例
// 関数のreturn部分で条件式を用いる場合に三項演算子を使う
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(10, 90));
console.log(checkSum(10, 100));
