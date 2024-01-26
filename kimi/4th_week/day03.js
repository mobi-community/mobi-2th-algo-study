function solution(num) {
    let answer = 0;

    for (let i = 0; i < 500; i++){
      //최대 500회가 반복되는 반복문 생성
        if(num != 1){
            num = num%2 == 0? num / 2 : num * 3 + 1;
          // num이 1이 아닐때 실행되는 삼항연산자
        } else{
            return answer = i;
          // 이 외의 조건은 num 이 1이라는 것이므로 반복횟수 i를 리턴
        }
    }
    return answer = -1;
  //반복문이 모두 돌 때까지 1이 안나오면 -1을 리턴
}


//안된거
// function solution(num) {
//     for (i=0; i<500; i++) {
//         if (num != 1) {
//             // 짝수면 나누기 2 아니면 X3 +1
//             num = num % 2 === 0 ? num/2 : num*3+1
//             return num
//         } else {
//             return 0
//         }
//         return -1
//     }
// }

/*
~할 때까지 반ㄴ복: while
짝수 2로나눔 16 -> 8 -> 4 -> 2 -> 1
(/2)

입력된 수 홀수면 X3하고 1더하기
2. 결과에 나온 수 1이될 때까지 반복
10 → 5 → 16 → 8 → 4 → 2 → 1

주어진 수가 1인 경우에는 0
500번 반복할 때까지 1이 되지 않는다면 –1
-> while / break
*/