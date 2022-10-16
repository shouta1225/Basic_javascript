/**
 * const, let等の変数宣言
 */
// //val
// var val1 = "var変数";
// console.log(val1);

// //val変数は上書き可能
// val1 = "変数は上書き可能";
// console.log(val1);

// //var変数は再宣言可能性
// var val1 = "var変数を再宣言";
// console.log(val1);

// // ※varでは上書きも再宣言も可能

// // const
// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";
// // ↑エラー

// // const変数は再宣言も不可
// // const val3 = "const変数を再宣言"
// // ↑エラー

// // ※constは上書きも再宣言も不可能

// // 配列やオブジェクトに関しては中身を変えることが可能
// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "JK",
//   age: 17
// };

// val4.name = "jak";
// console.log(val4);

// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey"); //pushで配列の一番後ろにプロパティを追加
console.log(val5);

// 配列とオブジェクトはほとんどの場合、constで宣言する
