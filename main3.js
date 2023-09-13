//함수 

// 어떠한 목적을 가지고 작성한 코드를 모아둔 것을 함수라고 함 함수만 적으면 적어놓은 코드를 
    // 불러 놓을 수 있음

//함수선언문
// 식별자는 함수를 구별하기 위한것
// 매개변수와 인수 

function ggd (/* 매개변수*/ a ){
  for(let i = 1; i<=9 ; i++){
    console.log(` ${a} * ${i} = ${ a * i} `);
  }
}

ggd(/*인수*/2);
ggd(3);

//리턴문 - 함수 외부로 데이터를 반환할때
function sum(num1 , num2){
  const result = num1 + num2 ;
  return result ; 

}
 const result1 = sum(10,20);
const result2 =  sum(50,100);
console.log(result1 + result2);



// 함수 표현식 함수를 변수에 할당하는 형식
/*const gugu = function gugu (){
  for(let i = 1; i<=9 ; i++){
    console.log(` 5 * ${i} = ${ 5 * i} `);
  }
};


//화살표 함수 es6에서 추가 된것
const gugudan = () => {
  for(let i = 1; i<=9 ; i++){
    console.log(` 5 * ${i} = ${ 5 * i} `);
  }
} */

// 자바 스크립트 스코프  
// 함수 중괄호 안에 있는 것은 지역 스코프 그 외적인것은 전역 스코프 , 블록스코프는 let과 const에 한해서만 해당

let a = 10 ;
function summ(){
  console.log(`함스 내부에서 a 참조 : ${a}`);
}
summ();
console.log(`함수 외부에서 a 참조 : ${a}`);

    // 함수 호이스팅 - 호이스팅은 선언문을 최상위로 끓어올리는것

    // 즉시 실행함수 전역 스코프의 오염을 막기 위하여 최고 한번 실행하고자 하는 함수를 ()소괄호로 감싼다
    (() => {
      console.log('init');
    }) ();
