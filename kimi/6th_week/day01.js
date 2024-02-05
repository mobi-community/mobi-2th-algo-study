function solution(n, slicer, num_list) {
    let answer = [];
    const [a, b, c] = slicer;

    switch (n) {
        case 1:
            answer = num_list.slice(0, b + 1);
            break;
        case 2:
            answer = num_list.slice(a);
            break;
        case 3:
            answer = num_list.slice(a, b + 1);
            break;
        case 4:
            // 그냥 slicer[2] => c로해도 된다!
            answer = num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
    }
    return answer;
}

/*
return: 올바르게 슬라이싱한 리스트

n = 1: index[0] ~ index[b + 1]
n = 2: index[a] ~
n = 3: index[a] ~ index[b + 1]
n = 4: index[a] ~ index[b + 1] (간격c)

*/


// 시간 남아서 문제 2

function solution(arr) {
    return arr.join("")
}

// 시간 남아서 문제 3
