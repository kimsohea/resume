<template>
  <h2>자격증/기타</h2>
  <ul class="license_list">
    <li v-for="item in licenseArr" :key="`${item.title}`">
      <p>
        <strong>{{ item.title }}</strong>
        <span v-if="item.type != ''">{{ item.type }}</span>
        <span v-if="item.time != ''">{{ item.time }}</span>
      </p>
      <a v-if="item.link != ''" :href="item.link" target="_blank">{{ item.link }}</a>
    </li>
  </ul>
</template>

<script setup>
const type = new URLSearchParams(window.location.search).get("type") || "";
const career = type === "FE" ? "?type=FE" : "";
const licenseArr = [
  {
    time: "",
    title: "포트폴리오 페이지",
    type: "사이트",
    link: `https://kimsohea.github.io/code-experience/${career}`,
  },
  {
    time: "2019.11",
    title: "웹디자인기능사 취득",
    type: "자격증",
    link: "",
  },
  {
    time: "2019.08",
    title: "GTQ(그래픽기술자격)1급 취득",
    type: "자격증",
    link: "",
  },
];
</script>
