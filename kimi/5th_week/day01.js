function solution(M, N) {
    const horizontal = M - 1
    const vertical = (N-1)*M
    return horizontal + vertical
}

/* 간단한 풀이


function solution(M, N) {
    return M*N-1;
}

*/

/*
return? 최소 가위질 횟수
= M-1, (N-1)*M

만약, M=3 N=2

3-1 => 2
(2-1)*M
(1일 경우에는 0을 return)
*/