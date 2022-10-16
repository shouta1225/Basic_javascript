/**
 * mapやfilterを使った配列の処理
 */

/*map*/

// 従来の配列処理
// const nameArr = ["中山", "中村", "向井"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapでの配列処理
// まずはmapがどう言うものか理解する
// mapは配列に対して使える関数で、配列名で指定した配列の中身を引数として順番に処理し、変数名に代入する関数
// 使い方：const 変数名 = 配列名.map((引数名) => {処理});

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // 上記for文で作ったコードを簡略化した処理で書いてみる
// nameArr.map((name) => console.log(name));
// // 結果、1行で従来の配列処理と同じ処理が可能となった

// map使い方まとめ
// 1.for文の代わりで配列をループして何か処理を行う場合
// 2.処理を行い、returnされた結果に基づいて新しい配列を生成する場合

// /*filter*/
// // filter：ある条件に一致したものを取り出して新しい配列を生成する関数
// // 使い方：const 変数名 = 配列名.filter((引数名) => {処理(処理内のreturnで条件式を用いる)});
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr); // [1, 3, 5]

// 従来の配列処理で配列の何番目が何かを出力したい場合
const nameArr = ["中山", "中村", "向井"];
// for (let index = 0; index < nameArr.length; index++) {
// console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// 配列の何番目が何かをmap関数で表す方法
// mapメソッドの引数は(第一引数：value(配列の中身),第二引数:index(配列のインデックス番号),第三引数：array(配列自体))
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// 最後に実践的なmapの使い方
// 配列の指定の要素だけ要素名に「さん」を付け加える

const newnameArr2 = nameArr.map((name) => {
  if (name === "中山") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newnameArr2);
