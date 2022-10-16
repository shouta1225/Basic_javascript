/**
 * 分割代入
 */

// const myProfile = {
//   name: "翔太",
//   age: 22
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// // これだと変数名が長すぎて可読性が低くなってしまう。
// // そこで分割代入を活用することで可読性を上げる

// // 分割代入：オブジェクトから指定のプロパティをオブジェクト名を使わずに使えるようにする
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 配列から上記のオブジェクトと同じようなメッセージを設定する
const myProfile = ["翔太", 22];

const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

// 配列で分割代入
// 配列には名前は無く、順番しかないので、指定した変数名が順番通りに指定される
// 今回だと0番目→name, 1番目→age
const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
