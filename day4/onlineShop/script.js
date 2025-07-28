const 재고 = 100;

// 입력값 유효성 검사 함수
function validateInputs() {
  const price = parseFloat(document.getElementById("priceInput").value);
  const quantity = parseInt(document.getElementById("quantityInput").value);

  // 가격 유효성 검사
  if (isNaN(price) || price <= 0) {
    alert("올바른 가격을 입력해주세요. (0보다 큰 숫자)");
    document.getElementById("priceInput").focus();
    return false;
  }

  // 수량 유효성 검사
  if (isNaN(quantity) || quantity <= 0) {
    alert("올바른 수량을 입력해주세요. (수량은 1 이상이어야 합니다)");
    document.getElementById("quantityInput").focus();
    return false;
  }

  return true;
}

// 버튼 클릭 시 호출되는 함수
function handleOrderButton() {
  if (validateInputs()) {
    processOrder();
  }
}

function processOrder() {
  // HTML에서 입력값 가져오기
  const price = parseFloat(document.getElementById("priceInput").value) || 0;
  const quantity =
    parseInt(document.getElementById("quantityInput").value) || 1;
  const membership = document.getElementById("membershipSelect").value;
  const shippingOption = document.getElementById("shippingSelect").value;

  // 재고 확인
  if (quantity > 재고) {
    alert("재고가 부족합니다.");
    document.getElementById("quantityInput").focus();
    return;
  }

  // 총 주문 금액 계산 (가격 × 수량)
  let totalPrice = price * quantity;

  // 멤버십 할인 적용
  switch (membership) {
    case "VIP":
      console.log("VIP 회원입니다. 10% 할인 적용.");
      totalPrice *= 0.9;
      console.log(`할인된 가격은 ${totalPrice}원입니다.`);
      break;
    case "Gold":
      console.log("Gold 회원입니다. 5% 할인 적용.");
      totalPrice *= 0.95;
      break;
    case "none":
      console.log("일반 회원입니다. 할인 없음.");
      break;
  }

  if (totalPrice >= 100000 && totalPrice < 200000) {
    totalPrice -= 5000;
    console.log("총 금액이 10만원을 초과하여 5000원이 할인됩니다.");
  } else if (totalPrice >= 200000) {
    totalPrice -= 15000;
    console.log("총 금액이 20만원을 초과하여 10000원이 할인됩니다.");
  } else {
    console.log("할인이 적용되지 않습니다.");
  }

  // 배송비 추가
  switch (shippingOption) {
    case "fast":
      console.log("빠른 배송을 선택했습니다. 배송비 3000원이 추가됩니다.");
      totalPrice += 3000;
      break;
    case "standard":
      console.log("일반 배송을 선택했습니다. 배송비는 무료입니다.");
      totalPrice += 0;
      break;
  }

  alert(
    `주문이 정상적으로 처리되었습니다. 최종 결제 금액은 ${totalPrice}원입니다.`
  );
  console.log(`최종 결제 금액은 ${totalPrice}원입니다.`);

  // 결과를 HTML에 표시
  document.getElementById("discountAmount").textContent =
    totalPrice.toLocaleString();
}
