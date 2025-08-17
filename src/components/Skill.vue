<template>
   <h2>기술</h2>
  <ul class="round_list">
    <li v-for="(item,idx) in skillArr" :key="`skill_${idx}`">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const skillArr = ['HTML5','CSS3','SCSS','styled-components','JavaScript','jQuery','React.js','Vue.js','vuex','Zustand','REST API','Swagger UI','Fast API','Git','GitHub','Figma','Adobe Photoshop','Adobe Illustrator']
</script>