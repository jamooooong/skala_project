function greet() {
  alert("Hello, World!");
  console.log("버튼이 눌렸습니다.");
}

function for문() {
  let result = ""; // 빈 문자열로 초기화
  for (let i = 0; i < 5; i++) {
    console.log("for문 실행 중: " + i);
    result += "for문 실행 중: " + i + "<br>";
  }

  document.getElementById("result").innerHTML = `${result}`;
}

function if문() {
  const num = true;
  let result;

  if (num) {
    console.log("참 : if문 실행");
    result = "참";
  } else {
    console.log("거짓 : else문 실행");
    result = "거짓";
  }

  // HTML에 결과 표시
  document.getElementById("result").textContent = `if문 결과: ${result}`;

  return result;
}
