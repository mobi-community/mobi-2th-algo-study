/* 

로그인 성공

입력한 아이디와 패스워드가 담긴 배열 id_pw
회원들의 정보가 담긴 2차원 배열 db

다음과 같이 로그인 성공, 실패에 따른 메시지를 return

아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"
로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”
아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”


제한 : 

아이디 -> 알파벳 소문자와 숫자로 이뤄진 문자열 (중복 불가)
패스워드 -> 숫자로 구성된 문자열 (중복 가능)

id_pw의 길이는 2
id_pw와 db의 원소는 [아이디, 패스워드] 형태

1 ≤ 아이디의 길이 ≤ 15
1 ≤ 비밀번호의 길이 ≤ 6
1 ≤ db의 길이 ≤ 10
db의 원소의 길이는 2

*/

function solution(id_pw, db) {
  const [id, pw] = id_pw;

  // 아이디와 비밀번호가 모두 일치하는 회원을 찾기
  const confirmUser = db.find((user) => user[0] === id && user[1] === pw);

  if (confirmUser) {
    // 로그인 성공
    return "login";
  } else {
    // 아이디가 일치하는 회원 찾기
    const onlyIdCheck = db.find((user) => user[0] === id);

    if (onlyIdCheck) {
      // 아이디는 일치하나 비밀번호가 일치하지 않음
      return "wrong pw";
    } else {
      // 아이디도 일치하지 않음
      return "fail";
    }
  }
}

// 중첩된 if문... 아래처럼 해결 가능
function solution(id_pw, db) {
  const [id, pw] = id_pw;

  // db 배열을 기반으로 Map 객체를 생성 : Map() 생성자
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
