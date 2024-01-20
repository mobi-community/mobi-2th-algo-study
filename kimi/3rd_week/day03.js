function solution(numbers) {
    const numStrArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numStrArr.forEach((numStr, idx) => {
        numbers = numbers.replaceAll(numStr, idx);
    });
    return Number(numbers);
}

/*
numbers 정수로바꿔 return
zero -> 0, ... 는 맨앞에 올 수 없음

이러한 불특정 입력값을 변환하고자 할 경우 replaceAll()을 활용.

*/

/**
    다른 사람의 풀이
function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}


???
    다른사람의 풀이2
    var solution = n => Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n))

 */