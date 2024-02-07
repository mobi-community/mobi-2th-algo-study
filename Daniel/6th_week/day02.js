function solution(str_list) {
  let answer = [];

  if (!str_list.includes("u") || !str_list.includes("l")) {
    return answer;
  }

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      return answer;
    }
    answer.push(str_list[i]);
    if (str_list[i] === "r") {
      answer = str_list.splice(i + 1);
      return answer;
    }
  }
}
