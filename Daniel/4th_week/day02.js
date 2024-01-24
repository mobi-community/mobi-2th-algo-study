/*
    문제 2. 로그인 성공 ?
*/

function solution(id_pw = [], db = []) {
  const [id, pw] = id_pw;

  const matchedUser = db.find((user) => user[0] === id && user[1] === pw);

  if (matchedUser) {
    return "login";
  } else {
    const idMatchedUser = db.find((user) => user[0] === id);
    if (!idMatchedUser) {
      return "fail";
    } else {
      return "wrong pw";
    }
  }
}
