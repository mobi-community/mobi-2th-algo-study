function solution(cipher, code) {
    let answer = '';

    for (let i = 0; i < cipher.length; i++) {
        if ((i + 1) % code === 0) {
            answer += cipher[i];
        }
    }
    return answer;
}

/*
  cipher는 암호체계 
  code의 배수 번째 글자만 진짜 암호
  
  다른 사람의 풀이
  const solution = (cipher, code) => [...cipher].filter((_,i) => (i+1)%code === 0).join("")
  
  */
