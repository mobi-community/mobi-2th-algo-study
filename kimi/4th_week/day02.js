function solution(id_pw, db) {
    const userData = db.find(([el]) => el == id_pw[0]);
    if (userData) {
        return userData[1] == id_pw[1] ? 'login' : 'wrong pw';
    } else return 'fail';
}

/*
1.db에 회원들의 아이디인 id_pw[0]가 포함된 배열을 추출해서 userData에 저장
->array.find를 이용

2.userData의 비밀번호 userData[1]가 회원들의 비밀번호 id_pw[1]랑 같으"login" 
그렇지 않으면 "wrong pw"를 리턴

3.아이디가 일치하는 회원이 없다면 "fail" 리턴
*/

// 실패한 코드
// function solution(id_pw, db) {
//     let answer = '';
//     const id = id_pw[0];
//     const pw = id_pw[1];

//     for (i = 0; i < db.length; i++) {
//         if (id == db[i][0] && pw == db[1][i]) {
//             answer = 'login';
//         } else if (id == db[i][0] && pw !== db[1][i]) {
//             answer = 'wrong pw';
//         } else {
//             answer = 'fail';
//         }
//         return answer;
//     }
// }

/*
return : 로그인 성공/실패에 따른 메세지

아이디와 비밀번호 모두 일치시 = "login"
로그인 실패 아이디 일치하는 회원 없으면 = "fail"
비밀버노가 일치하는 회원 없으면 = "wrong pw"
id_pw: string

[아이디, 패스워드]
db[0][0] db[0][1]

*/
