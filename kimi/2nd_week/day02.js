function solution(rank, attendance) {
    const [a, b, c] = rank
        .map((r, i) => [r, i])
        .filter(([_, i]) => attendance[i])
        .sort(([a], [b]) => a - b);
    // index 값
    return 10000 * a[1] + 100 * b[1] + c[1];
}

/*
  단서)
  1. 참여하지 못하는 인원이있다. === false
  2. rank[i]: i번 학생의 선발 고사 등수
  3. attendance[i]: i번 학생의 전국 대회 참석 가능 여부
  4. attendance의 원소 중 적어도 3개는 true
  
  .map [[rank,index]...]
  .filter attendance true인 값만 남김
  .sort 
  오름차순 정렬
  각 쌍의 첫 번째 요소
  
  
  회고)
  전국 대회 선발이라고하니 문제를 제대로 안읽고,
  true이면서 등수 높은 사람을 선발하려고 했었다
  
  문제 좀 제대로 읽어야겠다...
  
  */
