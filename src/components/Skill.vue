<template>
  <h2>기술</h2>
  <ul class="round_list skill">
    <li v-for="(item, idx) in skillArr" :key="`skill_${idx}`">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const skillArr = [
  "HTML5",
  "CSS3",
  "SCSS",
  "styled-components",
  "JavaScript",
  "jQuery",
  "React.js",
  "Vue.js",
  "vuex",
  "Zustand",
  "React-query",
  "Axios",
  "REST API",
  "STOMP",
  "React Cookie",
  "i18next",
  "Chart.js",
  "D3",
  "Google Charts",
  "recharts",
  "vis.gl/react-google-maps",
  "React Paginate",
  "Swiper",
  "lucide-react",
  "React Grid Layout",
  "Git",
  "GitHub",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
];
</script>
