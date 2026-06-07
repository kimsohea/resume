<template>
  <h1>김소혜</h1>
  <p class="info profile">
    <span class="address"> 주소: 서울특별시 구로구 </span>
    <span> e-mail: kimsohea4425@gmail.com </span>
  </p>
  <article>
    <h2>간단소개</h2>
    <p class="profile_desc">단순한 기능 구현보다 <strong>장기적인 운영과 협업</strong>을 고려한 구조 설계를 지향하는 {{ career }} 김소혜 입니다.</p>
  </article>
</template>

<script setup>
const type = new URLSearchParams(window.location.search).get("type") || "";
const career = type === "FE" ? "프론트엔드" : "웹 퍼블리셔";
</script>
