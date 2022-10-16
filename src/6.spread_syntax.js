/**
 * スプレッド構文
 */
//配列の展開:配列の中身を順番に処理してくれる
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// ↑をスプレッド構文を使ってみる
sumFunc(...arr1);

// // スプレッド構文でまとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1)// 1
// console.log(num2)// 2
// console.log(arr3)// [3, 4, 5]

// // 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; // [10, 20]
// console.log(arr6);

// const arr7 = [...arr4,...arr5];// [10, 20, 30, 40]
// console.log(arr7)

// // わざわざスプレッド構文でコピーしなくてもそのまま代入すればよくないか？と考えた
// const arr8 = arr4;
// console.log(arr8); // [10, 20]
// // 一応この方法でも値は同じになる、では何が問題なのか？
// arr8[0] = 100;
// console.log(arr8); // [100, 20]
// console.log(arr4); // [100, 20]

// // ただ代入しただけでは参照元が全てarr4なので、arr8だけではなく、arr4まで値が変わってしまう
// // 要するに、元の配列の値が変わってしまう不具合の原因となる
// // 俗に言う参照渡しの挙動になる

// スプレッド構文は値が変わらないのかを見る
arr6[0] = 100;
console.log(arr6);
console.log(arr4); // [10, 20]
// 結果、変わらないのでスプレッド構文を使うのが正しいことがわかる

// まとめ
// スプレッド構文を使う時
// 1.配列の展開：配列の中身を順番に処理してくれる
// 2.スプレッド構文と分割代入を併用して配列などでまとめるとき
// 3.配列のコピー、結合：参照私を回避して配列をコピーできる
