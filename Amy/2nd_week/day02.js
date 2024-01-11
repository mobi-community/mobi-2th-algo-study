/* 
    전국 대회 선발 고사

    0 ~ n-1 번까지 n명 중 3명을 선발
    선발 기준
    1. 참여 가능 여부 : attendance
    2. 등수별 상위 3명 : 선발고사 등수를 담은 배열 rank

    a, b, c 가 선발된다고 할 때
    10,000 * a + 100 * b + c 를 반환하는 함수


*/

// 제출한 문제
function solution(rank, attendance) {
  let answer = [];

  // 참가 가능한 사람들을 rank 배열에 오름차순으로 정렬
  // attendance 배열의 idx 기준으로 담기게 되므로 미리 오름차순으로 정렬
  const participant = rank
    .filter((_, index) => attendance[index])
    .sort((a, b) => a - b);

  // participant을 map으로 순회해 select 배열에 담기
  // 해당 등수를 기록한 학생이 몇번째 학생인가
  const select = participant.map((person) =>
    rank.findIndex((rank) => rank === person)
  );

  // 상위 3명을 골라 위 조건 충족하게 하기
  return select[0] * 10000 + select[1] * 100 + select[2];
}

// 다른 사람 풀이

// 처음에 배열이라 이렇게 한 번에 할 수 있을 것 같았는데 그러다가 내가 헷갈려서 포기했던 코드..
// 보기에 너무 복잡하지도 않다 👀
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
