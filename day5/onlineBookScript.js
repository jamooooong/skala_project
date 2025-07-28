let books = [];

window.addEventListener("DOMContentLoaded", function () {
  loadBooksFromStorage();
});

// localStorage에서 책 데이터 불러오기
function loadBooksFromStorage() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    console.log("localStorage에서 책 데이터를 불러왔습니다:", books);
  }
}

// localStorage에 책 데이터 저장하기
function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(books));
  console.log("localStorage에 책 데이터를 저장했습니다:", books);
}

function addBook() {
  // 입력값 가져오기
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = document.getElementById("price").value.trim();
  const stock = document.getElementById("stock").value.trim();
  const category = document.getElementById("category").value.trim();

  // 유효성 검사
  if (!title || !author || !price || !stock || !category) {
    alert("모든 정보를 입력해주세요.");
    return;
  }

  // 새 책 객체 생성
  const book = {
    title: title,
    author: author,
    price: price,
    stock: stock,
    category: category,
  };

  try {
    books.push(book);

    // localStorage에 저장
    saveBooksToStorage();

    console.log("책이 추가되었습니다:", book);
    console.log("현재 전체 책 목록:", books);
    alert(`"${title}" 책이 성공적으로 등록되고 저장되었습니다!`);

    // 입력 필드 초기화
    clearForm();
  } catch (error) {
    console.error("책 등록 중 오류 발생:", error);
    alert("책 등록에 실패했습니다. 다시 시도해주세요.");
    return;
  }
}

// 폼 초기화 함수 추가
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("category").value = "";
}

function getBooks() {
  if (books.length === 0) {
    alert("등록된 책이 없습니다.");
    return;
  }

  console.log("=== 책 목록 ===");
  console.table(books);

  // 책 목록을 문자열로 만들어서 alert으로 표시
  let bookList = `📚 등록된 책 목록 (총 ${books.length}권):\n\n`;
  books.forEach((book, index) => {
    bookList += `${index + 1}. 📖 ${book.title}\n`;
    bookList += `   ✍️ 저자: ${book.author}\n`;
    bookList += `   💰 가격: ${parseInt(book.price).toLocaleString()}원\n`;
    bookList += `   📦 재고: ${book.stock}권\n`;
    bookList += `   🏷️ 카테고리: ${book.category}\n\n`;
  });

  alert(bookList);
}
