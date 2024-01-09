// function solution(chicken) {
//     var answer = 0;
//     return answer;
// }

// 치킨 구매시 한마리당 쿠폰 1개 지급
// 쿠폰 10개 모을시 서비스 치킨 1마리
// 서비스 치킨도 쿠폰이 발급된다.

const solution = (chicken) => {
    let coupon = chicken;
    let service = 0;
    while(coupon >= 10){
        service += Math.floor(coupon/10);
        coupon = Math.floor(coupon / 10) + coupon % 10;
    }
    return service;
}