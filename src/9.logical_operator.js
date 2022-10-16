/**
 * 論理演算子の本当の意味を知ろう &&,||
 */
// // 一般的な使い方
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   // 片方がtrueだったら}
//   console.log("1か2はtrueになります"); // 出力される
// }

// if (flag1 && flag2) {
//   // 両方trueだったら
//   console.log("1か2はtrueになります"); // 出力されない
// }

// // &&や||が「かつ」や「または」ではない理由
// // ||は左側がfalseなら右側を返す、左側の値がtrueなら左側を返すと言う処理をするもの
// const num = null;//数値が入っていたらその数値が返される
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右の値を返す、falseなら左側の値を返す

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

// 要するに、&&も||も左側の値の判定を行なってその結果によってどちらの値を返すか決めているだけの処理
// &&はtrueなら右、falseなら左の値を返す(結果的にかつに見える)
// ||はtrueなら左、falseなら右の値を返す(結果的にまたはに見える)
