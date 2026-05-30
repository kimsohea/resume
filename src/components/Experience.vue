<template>
  <h2>경력</h2>
  <ul class="exper_list">
    <li v-for="(item, idx) in experArr" :key="`exper_${idx}`">
      <div class="tit_row">
        <strong>{{ item.tit }}</strong>
        <p class="info">
          <span>{{ item.time }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.prof }}</span>
          <span>{{ item.grade }}</span>
        </p>
      </div>
      <StackGroup :title="item.tit" :tools="item.work" />
    </li>
  </ul>
</template>

<script setup>
import StackGroup from "./StackGroup.vue";

const experArr = [
  {
    tit: "주식회사 씨케이앤비",
    time: "2025.05 - 재직중",
    type: "정규직",
    prof: "웹디자인&퍼블리싱&프론트엔드",
    grade: "주임",
    work: [
      "React.js",
      "Zustand",
      "Axios",
      "React-query",
      "STOMP",
      "Vite",
      "SCSS",
      "i18next",
      "Chart.js",
      "D3",
      "Google charts",
      "vis.gl/react-google-maps",
      "React Cookie",
      "React Paginate",
      "Swiper",
      "React grid layout",
      "Figma",
      "recharts",
      "dayjs",
      "lucide-react",
      "HTML",
      "JavaScript",
      "jQuery",
      "Ajax",
    ],
  },
  {
    tit: "엔에이치엔위투 주식회사",
    time: "2023.03 - 2024.09(1년 7개월)",
    type: "정규직",
    prof: "웹퍼블리싱",
    grade: "사원",
    work: ["Vue.js", "vuex", "JavaScript", "SCSS", "REST API", "SCSS", "Figma", "Adobe Photoshop", "React.js", "styled-components", "gulp"],
  },
  {
    tit: "인터코스메틱",
    time: "2019.11 - 2022.05(2년 7개월)",
    type: "정규직",
    prof: "웹디자인",
    grade: "사원",
    work: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "HTML", "CSS 3"],
  },
];

</script>
