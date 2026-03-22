<template>
  <h1>김소혜</h1>
  <p class="info profile">
    <span class="address"> 주소: 서울특별시 구로구 </span>
    <span> e-mail: kimsohea4425@gmail.com </span>
  </p>
  <article>
    <h2>간단소개</h2>
    <p>
      데이터 흐름을 기반으로 구조를 설계하고, 성능 최적화와 가독성 높은 코드 작성을 통해 유지보수성을 확보합니다. 단순 구현을 넘어 사용자 경험까지 고려한 화면과
      상태 흐름을 논리적으로 설계하는 실무형 {{ career }}입니다.
    </p>
  </article>
</template>

<script setup>
const type = new URLSearchParams(window.location.search).get("type") || "";
const career = type === "FE" ? "프론트엔드" : "웹 퍼블리셔";
</script>
