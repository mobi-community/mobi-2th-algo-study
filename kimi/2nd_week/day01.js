function solution(chicken) {
    let answer = 0;
    let coupon = chicken;

    while (coupon > 9) {
        answer = Math.floor(coupon / 10);
        coupon = Math.floor(coupon / 10) + (coupon % 10);
    }
    return answer;
}

/**
 * 수현님 문제 풀이 참조했습니다.
 */