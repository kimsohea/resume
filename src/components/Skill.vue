<template>
  <h2>기술</h2>
  <ul class="round_list">
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
  "react-cookie",
  "i18next",
  "chart.js",
  "d3",
  "Google charts",
  "recharts",
  "vis.gl/react-google-maps",
  "react-paginate",
  "swiper",
  "lucide-react",
  "react grid layout",
  "Git",
  "GitHub",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
];
</script>
