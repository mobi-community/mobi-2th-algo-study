// function solution(n, slicer, num_list) {
//     var answer = [];
//     return answer;
// }


const solution = (n, slicer, num_list) => {
  let [a, b, c] = slicer;
  let result = [];

  switch (n) {
    case 1:
      result = num_list.slice(0, b + 1);
      break;

    case 2:
      result = num_list.slice(a);
      break;

    case 3:
      result = num_list.slice(a, b + 1);
      break;

    case 4:
      result = num_list.slice(a, b + 1).filter((_, d) => d % c == 0);
  }
  return result;
}

