/* 
    종이 자르기

    머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 
    예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

    정수 M, N이 매개변수로 주어질 때, 
    M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 

    이미 1 * 1 크기이므로 0을 return 합니다.
*/

// 예시를 보면 M * N을 곱한 값보다 1씩 작다.
function solution(M, N) {
  return M * N - 1;
}
