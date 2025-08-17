<template>
  <h2>학력</h2>
  <ul class="exper_list">
   <li v-for="(item,idx) in eduArr" :key="`education_${idx}`">
     {{ item }}
   </li>
  </ul>
</template>

<script setup>
const eduArr = [
  {
    name: '충북도립대학',
    time: '2016.03 - 2018.03',
    type: '졸업',
    prof: '융합디자인과',
  },
  {
    name: '청주여자고등학교',
    time: '2016.03 - 2018.03',
    type: '졸업',
    prof: '융합디자인과',
  },
];
</script>