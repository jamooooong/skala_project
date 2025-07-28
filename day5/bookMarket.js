const books = [
  {
    title: "자바스크립트 완벽 가이드",
    author: "David Flanagan",
    price: 35000,
    stock: 5,
    category: "프로그래밍",
  },
  {
    title: "모던 자바스크립트 Deep Dive",
    author: "이웅모",
    price: 40000,
    stock: 0,
    category: "프로그래밍",
  },
  {
    title: "돈의 심리학",
    author: "모건 하우절",
    price: 18000,
    stock: 3,
    category: "경제",
  },
  {
    title: "불편한 편의점",
    author: "김호연",
    price: 14500,
    stock: 2,
    category: "소설",
  },
];

// for 반복문을 사용하여 모든 도서 제목을 출력하는 스크립트를 반영해 보세요.
console.log("1번");
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

// for....of 를 사용하여 재고가 1권 이상인 도서만 출력하는 스크립트를 반영해 보세요.
console.log("2번");
for (const book of books) {
  if (book.stock > 0) {
    console.log(book.title);
  }
}

//forEach + 조건문을 사용하여 "프로그래밍" 카테고리만 출력하는 스크립트를 반영해 보세요.
console.log("3번");
books.forEach((book) => {
  if (book.category === "프로그래밍") {
    console.log(book.title);
  }
});

//for...of 를 사용하여 도서 전체 가격의 평균을 구하는 스크립트를 반영해 보세요.
console.log("4번");

let totalPrice = 0;
for (const book of books) {
  totalPrice += book.price;
}
console.log(totalPrice / books.length + "원");

console.log("5번");
books.forEach((book) => {
  if (book.stock == 0) {
    book.stock += 10;
  }
  console.log(`${book.title}의 재고는 ${book.stock}권입니다.`);
});
