/**
 * テンプレート文字列
 */
const name = "翔太";
const age = 22;
// 「私の名前は翔太です。年齢は28歳です」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
