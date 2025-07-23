// 페이지 로드 시 방명록 불러오기
document.addEventListener("DOMContentLoaded", function () {
  loadGuestbook();
});

// 방명록 추가 함수
function addGuestbookEntry() {
  const authorName = document.getElementById("author-name").value.trim();
  const messageContent = document
    .getElementById("message-content")
    .value.trim();

  if (!authorName || !messageContent) {
    alert("이름과 방명록 내용을 모두 입력해주세요.");
    return;
  }

  // 새 방명록 항목 생성
  const newEntry = {
    id: Date.now(),
    author: authorName,
    message: messageContent,
    date: new Date().toLocaleString("ko-KR"),
  };

  // 기존 방명록 데이터 가져오기
  let guestbookData = JSON.parse(localStorage.getItem("guestbook") || "[]");

  // 새 항목을 맨 앞에 추가
  guestbookData.unshift(newEntry);

  // 로컬스토리지에 저장
  localStorage.setItem("guestbook", JSON.stringify(guestbookData));

  // 입력 필드 초기화
  document.getElementById("author-name").value = "";
  document.getElementById("message-content").value = "";

  // 방명록 목록 새로고침
  loadGuestbook();
}

// 방명록 불러오기 함수
function loadGuestbook() {
  const guestbookList = document.getElementById("guestbook-list");
  const guestbookData = JSON.parse(localStorage.getItem("guestbook") || "[]");

  if (guestbookData.length === 0) {
    guestbookList.innerHTML =
      '<p class="no-entries">아직 방명록이 없습니다. 첫 번째 방명록을 작성해보세요!</p>';
    return;
  }

  let html = "";
  guestbookData.forEach((entry) => {
    html += `
            <div class="guestbook-entry">
              <div class="entry-header">
                <strong class="author">${entry.author}</strong>
                <span class="date">${entry.date}</span>
                <button class="delete-btn" onclick="deleteEntry(${entry.id})">×</button>
              </div>
              <div class="entry-message">${entry.message}</div>
            </div>
          `;
  });

  guestbookList.innerHTML = html;
}

// 방명록 삭제 함수
function deleteEntry(entryId) {
  if (confirm("이 방명록을 삭제하시겠습니까?")) {
    let guestbookData = JSON.parse(localStorage.getItem("guestbook") || "[]");
    guestbookData = guestbookData.filter((entry) => entry.id !== entryId);
    localStorage.setItem("guestbook", JSON.stringify(guestbookData));
    loadGuestbook();
  }
}

// 엔터키로 방명록 작성
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && event.ctrlKey) {
    addGuestbookEntry();
  }
});
