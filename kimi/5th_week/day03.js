function solution(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += '박';
        } else {
            result += '수';
        }
    }
    return result;
}

/**
 * 홀수: 수
 * 짝수: 박
 */

/**
 * 좋은코드
 * #1
 * var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
 * 
 * #2
 * const waterMelon = n => "수박".repeat(n).slice(0,n);

 */

/**
 * 광기코드
 * function waterMelon(n){
  var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  //함수를 완성하세요

  return result.substring(0,n);
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
 */
