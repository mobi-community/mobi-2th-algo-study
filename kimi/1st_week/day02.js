/*
 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복 => while
 */

function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result++;
        while (result.toString().includes('3') || result % 3 === 0) {
            result++;
        }
    }
    return result;
}
