/*
    문제 2. 전국 대회 선발 고사
*/

function solution(rank = [], attendance = []) {
  let bestStudentArr = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      bestStudentArr.push({
        num: i,
        rank: rank[i],
      });
    }
  }

  bestStudentArr.sort((a, b) => a.rank - b.rank);

  return (
    10000 * bestStudentArr[0].num +
    100 * bestStudentArr[1].num +
    bestStudentArr[2].num
  );
}
