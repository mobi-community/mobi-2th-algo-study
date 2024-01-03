// 프로그래머스 - 커피 심부름

// 핫과 아이스 가격 동일
// 아메리카노 4500원
// 카페 라테 = 5000원
// 메뉴만 적은 것 = 차가운 것
// 아무거나 = 차가운 아메리카노

// order = "iceamericano","americanoice","hotamericano","americanohot","icecafelatte","cafelatteice","hotcafelatte","cafelattehot","americano","cafelatte","anything"

const solution = (order) => {
  let result = 0;

  for (let i = 0; i < order.length; i++) {
    switch (order[i]) {
      case "iceamericano":
      case "americanoice":
      case "hotamericano":
      case "americanohot":
      case "americano":
      case "anything":
        result += 4500;
        break;
      case "icecafelatte":
      case "cafelatteice":
      case "hotcafelatte":
      case "cafelattehot":
      case "cafelatte":
        result += 5000;
        break;
    }
  }
  return result;
};
