/* 
문제

1마리 당 1쿠폰
쿠폰 10장 ➡️ 서비스 치킨 + 쿠폰 1장

시켜먹은 치킨 수 = 매개변수 count
count에 따라 받을 수 있는 최대 서비스 치킨의 마리 수를 return 하는 함수

*/

// 제출한 답
solution = (chicken) => {
  // 필요한 변수 = 받을 수 있는 최대 서비스 치킨의 마리 수
  let serviceChicken = 0;

  // ex. 10 마리를 주문하면 쿠폰이 11장
  // 9 마리를 주문하면 쿠폰이 10장, 즉 반복문은 시킨 치킨의 마리 수가  9 아래로 떨어질 때까지 반복돼야 함
  while (chicken > 9) {
    // 받을 수 있는 최대 서비스 개수 = 시킨 치킨의 마리 수 / 10 의 몫
    serviceChicken += Math.floor(chicken / 10);

    // 받을 수 있는 서비스 치킨의 개수만큼 쿠폰을 발급 받음 ➡️ 위 serviceChicken의 계산 결과 = chicken / 10
    // 쿠폰을 통해 주문할 수 없는 경우가 존재 ➡️ 남는 쿠폰이 10 이하일 때 = chicken % 10
    // 따라서 서비스를 받고 난 다음 남는 쿠폰의 개수는 받은 서비스 치킨의 개수 + 서비스를 받지 못하는 쿠폰의 개수
    chicken = Math.floor(chicken / 10 + (chicken % 10));
  }

  return serviceChicken;
};

// 다른 사람 문제 풀이

// 처음 10마리를 사야 서비스 1마리 + 1쿠폰 생성 ⭐️
// 그 이후부터는  1쿠폰 + 9마리 구매 ➡️ 1마리 서비스  👉 사실상 9마리를 구매하면 1마리 서비스인 셈
// 서비스를 받지 않고 먹은 마리 수 ➡️ 9마리 = (chicken - 10) ➡️ 총 먹은 치킨의 수 - 처음 구매한 10마리

function solution(chicken) {
  if (chicken == 0) return 0;
  // 9마리 구매시 받는 서비스를 계산하고 난 후에 처음 10마리를 구매하여 생긴 1마리의 서비스를 추가
  return Math.floor((chicken - 10) / 9 + 1);
}
// ⚠️ parseInt를 사용하면 정수를 뽑아 리턴, Math.floor는 negative 숫자도 반환하기 때문에 결과가 다르게 나타난다.
