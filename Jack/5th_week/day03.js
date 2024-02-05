// function solution(n) {
//     var answer = '';
//     return answer;
// }

// if문으로 할려다가 3통과 나머지 실패뜸
// const solution = (n) => {
//     let result = "";
//     for(i = 1; i<=n; i++){
//     if(n%2 === 0){
//         result += "박"
//     } else{
//             result += "수"
//         }
//     }
//     return result
// }

// string repeat()
const solution=(n)=> {
    return "수박".repeat(n).substring(0,n)
}