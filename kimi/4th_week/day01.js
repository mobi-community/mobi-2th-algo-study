function solution(strArr) {
    return strArr.filter(el => !el.includes("ad"))
}

/*
ad 문자열 포함(includes)하고있는 애 제외(filter) 순서 유지하여 배열로 return하기
- includes ad -> notad 만나오니까 !로
- includes = boolean
*/