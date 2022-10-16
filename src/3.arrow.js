/**
 * アロー関数
 */
// 従来の関数の書き方1
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// 従来の関数の書き方2(無名関数)
const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

// 注意点1：引数が一つの時は()を省略できるが、基本つけた方が可読性が高い
// 注意点2：関数内が１行で終わるような関数であれば{}とreturnを省略できる。
//        ただし、{}で囲ってしまった場合はreturnが必要
const func4 = (str) => str;
console.log(func4("func4です"));

// アロー関数を使った関数のサンプル
// 引数を二つ受け取り、足し算した値を返す関数を作る

// returnを用いた場合
const sum1 = (a, b) => {
  return a + b;
};
// returnを用いなかった場合
console.log(sum1(10, 20));

const sum2 = (a, b) => a + b;
console.log(sum2(20, 30));
