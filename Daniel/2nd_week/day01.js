/*
    문제 1. 치킨 쿠폰
*/

function solution(chicken) {
  let cuponCount = chicken;
  let serviceChickenCount = 0;
  let unusedCoupon = 0;

  const firstOrder = Math.floor(cuponCount / 10);
  serviceChickenCount += firstOrder;
  unusedCoupon += cuponCount % 10;
  unusedCoupon += Math.floor(firstOrder / 10);

  const secondOrder = Math.floor(firstOrder / 10);
  serviceChickenCount += secondOrder;
  unusedCoupon += firstOrder % 10;
  unusedCoupon += Math.floor(secondOrder / 10);

  serviceChickenCount += Math.floor(unusedCoupon / 10);

  return serviceChickenCount;
}
