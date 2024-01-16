// 다른 사람이 푼 좋은 답안
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}


// 
const solution = (rank, attendance) => {
  let arr = [];
  rank.unshift(0);
  attendance.unshift(0);
  for (let i = 0; i < rank.length; i++) {
      // 값이 참일경우
    if (rank.indexOf(i) && attendance[rank.indexOf(i)]) {
      arr.push(rank.indexOf(i));
        console.log(arr)
    }
  }
    // 0넣어줬던 index - 1
  return 10000 * (arr[0] - 1) + 100 * (arr[1] - 1) + (arr[2] - 1);
};


/*
결과 값)
!! index값을 찾아야한다. indexOf

.push()
.unshift() - 급한 불 먼저 끔
단서)
1. 참여하지 못하는 인원이있다. === false
2. rank[i]: i번 학생의 선발 고사 등수
3. attendance[i]: i번 학생의 전국 대회 참석 가능 여부
4. attendance의 원소 중 적어도 3개는 true

indexOf()
배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index를 리턴합니다.
만약, 찾으려는 값이 배열에 없으면 -1을 리턴합니다.

회고)
전국 대회 선발이라고하니 문제를 제대로 안읽고,
true이면서 등수 높은 사람을 선발하려고 했었다

문제 좀 제대로 읽어야겠다...

*/