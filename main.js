/*변수*/

var a = 10;
console.log(a);

//자료형
let str = "hello";
let str2 = 'hello';
console.log(str, str2);

//이스케이프 문자를 사용하면 따옴표의 중복을 피할 수 있음 \ <-- 이거 
let str3 = '문자열은 큰 따옴표("") 또는 작은 따옴표로(\'\')정의합니다.'
console.log(str3);

//숫자형
const num = 20;

//논리형
const aa = 1 == 1 ;
console.log(aa);

//연산자 
let num1 = 10;
let strnum = '10';
let result = num1 === strnum ;
console.log(result);

//&& and연산자 :: 둘중에 하나만 참이어도 됌 ! 부정연산자는 값의 결과가 반대
// ? : 삼항 연산자 값이 참이면 ? 를 거짓이면 : 를  

let abc = 10 < 5 ? '참입니다' : '거짓입니다';
console.log(abc);

// 조건문
// if , swith
let num3 = 10 ;
if(num3 < 20){
  // 실행할 코드 조건문이 참일때만 실행 
  console.log('num은 20보다 작습 입니다');
}else{
  console.log('num은 20보다 큽니다');
}

let food = 'melon';
switch (food){
  case 'melon':
    console.log('fruit');
    break;
  
  case 'apple':
    console.log('fryit');
    break;

}
//if문 안에 if문 다중 if문이라고 부르지만 되도록이면 한번 안에서 끝내느게 좋음!

