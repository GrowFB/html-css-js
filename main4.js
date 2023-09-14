// 자바 스크립트 객체 다루기 
//객체란 자료형적 관점에서 키와 값으로 구성된 속성의 집합
const person = {
  name : 'sang' , // 이것이 속성
  age : 20 ,
  "phone num" : '010-2222',
  //객체 안에 있는 함수자료형은 함수가 아닌 매서드라는 용어로 구분
  printInfo: function(){
    console.log('printInfo');
  },
}; // 중괄호를 열었다 닫아서 객체선언 안에 아무것도 없으면 빈객체

person.name = 'yeon ' // 객체 재할당
// 한번 정의함 객체 변수에 정보를 추가하고 싶다면 객체 재할당 하는 법과 비슷함(동적 속성 추가)
person.tall = 178 ;
// 동적 속적 삭제
delete person.age;

console.log(person.name); // 마침표 연산자
console.log(person['age']); // 대괄호 연산자 
console.log(person['phone num']);
person.printInfo();
console.log(person.tall);

// 얕은 복사 , 깊은 복사 추가 공부 