// function solution(str_list) {
//     var answer = [];
//     return answer;
// }

const solution = (str_list) => {
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");

    // "l"과 "r" 중 하나도 없는 경우 빈배열을 준다.
    if (lIndex === -1 && rIndex === -1) return [];

    // "l"이 "r"보다 먼저 나오거나, "r"이 없는 경우 , l인덱스 전까지만 반환한다.
    if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
        return str_list.slice(0, lIndex);
    }

    // "r"이 "l"보다 먼저 나오거나, "l"이 없는 경우, 역순으로 r까지 반환한다.
    if (rIndex !== -1 && (lIndex === -1 || rIndex < lIndex)) {
        return str_list.slice(rIndex + 1);
    }
};