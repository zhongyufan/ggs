// +加法
// var iNum = 3 + 3;
// document.write('[+]iNum=' + iNum + '<br>');
//
// iNum = iNum + 3;
// document.write('[+]iNum=' + iNum + '<br>');
//
// iNum = Number.MAX_VALUE + 1E307;
// document.write('[+]iNum=' + iNum + '<br>');
//
// iNum = iNum + 1E307;
// document.write('[+]iNum=' + iNum + '<br>');
//
// iNum = Number.MAX_VALUE + 1E307 - Number.MAX_VALUE;
// document.write('[+]iNum=' + iNum + '<br>'); //Infinity 机器不再继续算
//
// iNum = Number.INFINITY + 1; //NaN INFINITY不是一个数
// document.write('[+]iNum=' + iNum + '<br>');

// + 字符串的拼接
// var sToken = 'abc' + 'edf';
// document.write('[+] sToken=' + sToken + '<br>');
//
// var sToken = '5' + 5;
// document.write('[+] sToken=' + sToken + '<br>');
//
// var sToken = 5 + '5';
// document.write('[+] sToken=' + sToken + '<br>');
//
// var sToken = '5' - 5;
// document.write('[-] sToken=' + sToken + '<br>');

// - 数字减法、乘法与数学一致
// / 数字除法

// iNum = 4 / 3;
// document.write('[/]iNum=' + iNum + '<br>');
//
// iNum = 4 / 0; //INFINITY
// document.write('[/]iNum=' + iNum + '<br>');
//
// iNum = 0 / 0; //NaN
// document.write('[/]iNum=' + iNum + '<br>');

// % 取模
// iNum = 4 % 3;
// document.write('[%]iNum=' + iNum + '<br>');
//
// iNum = 4.5 % 3;
// document.write('[%]iNum=' + iNum + '<br>');
//
// iNum = 4 % 0; //NaN
// document.write('[%]iNum=' + iNum + '<br>');
//
// iNum = 0 % 0; //NaN
// document.write('[%]iNum=' + iNum + '<br>');

// ++
// iNum = 5; // iNum++ 是表达式 表达式化简（归约）
// document.write('[++]iNum=' + iNum++ + '<br>');
// '[++]iNum= 5 + <br>'
// 6

// iNum = 5;
// document.write('[++]iNum=' + ++iNum + '<br>');
//
// iNum = 5;
// iNum = iNum++ + 10 + ++iNum;
// 面试题
// iNum = iNum++ + 10 + ++iNum;
// iNum = 5 + 10 + ++iNum;
// iNum = 15 + ++iNum;
// iNum = 15 + 7;
// iNum = 22;
// document.write('[++]iNum=' + iNum + '<br>');
//
// iNum = 7;
// iNum = 10 - ++iNum + ++iNum - iNum++ - iNum++;
// iNum = 10- 8 + ++iNum - iNum++ -iNum++ ;
// iNum = 2 + ++iNum - iNum++ -iNum++ ;
// iNum = 2 + 9 - iNum++ -iNum++ ;
// iNum = 11 - iNum++ -iNum++ ;
// iNum = 11 - 9 -iNum++ ;
// iNum = 2 -iNum++ ;
// iNum = 2 -10 ;
// iNum = -8 ;
// document.write('[++]iNum=' + iNum + '<br>');

// --
// iNum = 5;
// --iNum;
// document.write('[--]iNum=' + iNum + '<br>');
//
// iNum = 5;
// iNum = iNum-- + 10 + --iNum;
// document.write('[--]iNum=' + iNum + '<br>');
//
// iNum = 5;
// iNum = (13 % 7) + 4 * 7 / iNum-- - ++iNum;
// document.write('[--]iNum=' + iNum + '<br>');

// =
// += -= *+ /= %=
// >数字比较
// document.write('[>] 2 > 1 ?' + 2 > 1 + '<br>');
// '[>] 2 > 1 ?' + 2 > 1 + '<br>'
// '[>] 2 > 1 ? 2'  > 1 + '<br>'
// '[>] 2 > 1 ? 2'  > '1 <br>'
// document.write('[>] 2 > 1 ?' + (2 > 1) + '<br>');
// document.write('[<] 2 < 1 ?' + (2 < 1) + '<br>');
// document.write('[>=] 2 >= 1 ?' + (2 >= 1) + '<br>');
// document.write('[<=] 2 <= 1 ?' + (2 <= 1) + '<br>');

//字符串比较
//0 -> 30 a -> 41 A ->61
// '25' < 4 引擎自动将字符串转成数字比较
// document.write('[?:] 25>4 ?' + (25 > 4 ? '1' : 's') + '<br>');

//==
// document.write('[==] null == undefined ?' + (null == undefined) + '</br>');
// document.write('[==] \'NaN\' == NaN ?' + ('NaN' == NaN) + '</br>');
// document.write('[==] NaN !== NaN ?' + (NaN !== NaN) + '</br>');
// document.write('[==] false == 0 ?' + (false == 0) + '</br>');
// document.write('[==] true == 1 ?' + (true == 1) + '</br>');
// document.write('[==] true == 2 ?' + (true == 2) + '</br>');
// document.write('[==] undefined == 0 ?' + (undefined == 0) + '</br>');
// document.write('[==] null == 0 ?' + (null == 0) + '</br>');
//
// document.write('[==] \'5\' == 5 ?' + ('5' == 5) + '</br>');
// document.write('[==] \'5\' === 5 ?' + ('5' === 5) + '</br>');
// document.write('[==] \'5\' != 5 ?' + ('5' != 5) + '</br>');
// document.write('[==] \'5\' !== 5 ?' + ('5' !== 5) + '</br>');
//
// //背
// document.write('[==] null == undefined ?' + (null == undefined) + '</br>');
// document.write('[==] null === undefined ?' + (null === undefined) + '</br>');
// document.write('[==] true == 1 ?' + (true == 1) + '</br>');
// document.write('[==] true === 1 ?' + (true === 1) + '</br>');
// document.write('[==] false == 0 ?' + (false == 0) + '</br>');
// document.write('[==] false === 0 ?' + (false === 0) + '</br>');
// document.write('[==] [] == \'\' ?' + ([] == '') + '</br>');
// document.write('[==] [] === \'\' ?' + ([] === '') + '</br>');
// document.write('[==] {} == \'[object Object]\'?' + ({} == '[object Object]') + '<br>');
// document.write('[==] {} === \'[object Object]\'?' + ({} === '[object Object]') + '<br>');
// document.write('[==] \'5\' == 5 ?' + ('5' == 5) + '</br>');
// document.write('[==] \'5\' === 5 ?' + ('5' === 5) + '</br>');

// &&
// var bRst = true;
// var bRst2 = true;
// document.write('[&&] bRst && bRst2 ?' + (bRst && bRst2) + '<br>');
// // 1,都是布尔
// document.write('[&&] true && false ?' + (true && false) + '<br>');
// document.write('[&&] true && true ?' + (true && true) + '<br>');
// document.write('[&&] false && false ?' + (false && false) + '<br>');
// document.write('[&&] false && true ?' + (false && true) + '<br>');
// // 2,x && y 先判断第一个是不是 false  否则返回第二个
// document.write('[&&] 0 && true ?' + (0 && true) + '<br>');
// // 0,undefined,null,NaN,''
// document.write('[&&] undefined && true ?' + (undefined && true) + '<br>');
// document.write('[&&] null && true ?' + (null && true) + '<br>');
// document.write('[&&] NaN && true ?' + (NaN && true) + '<br>');
//
// var iCount = 0;
//
// document.write('[&&] 0 && true ?' + (0 && (++iCount)) + '[' + iCount + ']' + '<br>');
// document.write('[&&] undefined && true ?' + (undefined && (++iCount)) + '[' + iCount + ']' + '<br>');
// document.write('[&&] null && true ?' + (null && (++iCount)) + '[' + iCount + ']' + '<br>');
// document.write('[&&] NaN && true ?' + (NaN && (++iCount)) + '[' + iCount + ']' + '<br>');

// 3, data && fn(data); date如果是空 fn将不会被调用

// ||
// x || y 先判断第一个是不是 true  否则返回第二个
// document.write('[||] true || false ?' + (true || false) + '<br>');
// document.write('[||] true || true ?' + (true || true) + '<br>');
// document.write('[||] false || false ?' + (false || false) + '<br>');
// document.write('[||] false || true ?' + (false || true) + '<br>');
// var event = e || window.event;

//练习
var iNum2 = 123;
var iNum3 = 456;
iNum2 += iNum3;//123 + 456
iNum3 = iNum2 - iNum3;//123
iNum2 = iNum3 - iNum2;//456

var iNum4 = 4;
document.write('[1]' + (30 < 15 ? !true : true, iNum4 * 4 + 5 < 3 == 25 > 24 && false || true) + '<br>');
// 30 < 15 ? !true : true, iNum4 * 4 + 5 < 3 == 25 > 24 && false || true
// false ? !true : true, iNum4 * 4 + 5 < 3 == 25 > 24 && false || true
// false ? false : true, iNum4 * 4 + 5 < 3 == 25 > 24 && false || true
// true, iNum4 * 4 + 5 < 3 == 25 > 24 && false || true
// iNum4 * 4 + 5 < 3 == 25 > 24 && false || true
// 4 * 4 + 5 < 3 == 25 > 24 && false || true
// 21 < 3 == 25 > 24 && false || true
// false == true && false || true
// false && false || true
// false || true
// true
var iNum1 = 4;
document.write('[2]' + (100 > 15 ? (iNum1 = ++iNum1 * 3 + 5 / 3) : false) + '<br>');

var iNum1 = 4;
document.write('[3]' + (1 + 1 + true + null + 'ccc' + 1 + 1 + true + null) + '<br>');