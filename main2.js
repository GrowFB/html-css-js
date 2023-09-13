//반복문
// while
//와일문 안의 조건식이 참일때 안에 있는 코드를 사용
// let num = 1; 
// while(num<=100){
  // console.log(num);
  // num++;

// }
// do wuile
/*do{
  //do 안에 있는 것은 무조건 한번은 실행 되게 함
  console.log('do')
}while(false) */

//for 반복문
// for 문은 ( 초기값 , 조건 식 , 증감식)으로 구성
/*for(let i = 0 ; i<=5 ; i++){
  console.log(i);
}*/
//다중 반복

/*for(let i = 0; i<2 ; i++){
  console.log(` i : ${i}`);
  for(let k = 0 ; k<2 ; k++){
    console.log(` k: ${k}`);
  }

}*/
const arr = ['apple', 'banana', 'orange'];
const abj ={
  name : '철수',
  age : 20 ,
};
  for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
  }
// fot in , in 오른쪽에는 반복이 되는 대상 , let 오른쪽에는 반환 되는 대상
for(let index in arr){
  console.log(arr[index]);
}

for(let key in abj){
  console.log(abj[key]);
}

// break와 continue 
for(let i = 0 ; i<5; i++){
  if( i === 3) break;
  console.log(i);
  // continue는 해당 순서를 건너뜀
}

