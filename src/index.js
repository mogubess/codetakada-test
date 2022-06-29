/**
 * const let などの変数宣言
 */
// var val1 = "var変数";

// // var変数は上書き可能
// val1 = "上書き";

// let val2 = "let 変数";

//let 上書き可能
//let は再宣言できない

//const 上書き不可、再宣言不可

// const val4 = {
//   name: "てけ",
//   age: 28
// };
// console.log(val4);
// val4.name = "ほげ";
// console.log(val4);
// val4.adress = "Gotannda";

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 *  テンプレート文字列
 * */
//従来の方法
// const name = "ひふぇ";
// const age = 30;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です　年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `name ${myProfile.name} age${myProfile.age}`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `name ${name} age${age}`;
// console.log(message2);

// const myProfile = [`ってｓ`, 28];
// const message3 = `name ${myProfile[0]} age${myProfile[1]} dest`;
// console.info(message3);

//これで配列の第一要素にnameでアクセスできる、第２要素はage
// const [name, age] = myProfile;

/**
 * デフォルト値,引数など
 */
// const sayHello = (name = `ゲスト`) => console.log(`こんにちは!${name}さん!`);
// sayHello(`じゃｙけ`);
// sayHello();

/**
 * スプレッド構文
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// //応用
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(...arr3);
// console.log(arr3);

// 配列のコピー、結合（参照渡しではない方法）
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = [`tanaka`, `yamada`, `jyake`];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//nameArr.map((name) => console.log(name));

// nameArr.map((name, index) => console.log(`${index + 1}bame ${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "tanaka") {
//     return name;
//   } else {
//     return `${name}san`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val3 = 1 < 0 ? `true` : `false`;
// console.log(val3);
// const num = 1300;
// num.toLocaleString();
// //3桁区切り表示
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

/**
 * 論理演算子の本当の意味s && ||
 */
// || は左側がfalseなら右側を返す
// const num = null; //2
// const fee = num || "未設定";
// console.log(fee);

// && は左側がtureなら右側を返す
const num = 2; //2
const fee = num && "なにか設定されまｓちあ";
console.log(fee);
