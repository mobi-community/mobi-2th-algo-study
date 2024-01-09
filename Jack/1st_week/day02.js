// n은 3의 배수가 되면 안되고, 숫자 3이 들어가면 안된다.

const solution = (n) => {
  let count = 0;
  for (let i = 1; ; i++) {
    if (i % 3 === 0 || String(i).includes("3")) {
      continue;
    }
    count++;
    if (count === n) {
      return i;
    }
  }
};
