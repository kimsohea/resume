<template>
  <h2>경력</h2>
  <ul class="exper_list">
    <li v-for="(item,idx) in experArr" :key="`exper_${idx}`">
      <strong>{{ item.tit }}</strong>
      <p class="info">
        <span>{{ item.time }}</span>
        <span>{{ item.type }}</span>
        <span>{{ item.prof }}</span>
        <span>{{ item.grade }}</span>
      </p>
      <ul class="round_list">
        <li v-for="(work,i) in item.work" :key="`works_${i}`">
          {{ work }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const experArr = [
  {
    tit: '주식회사 씨케이앤비',
    time: '2025.05 - 재직중',
    type: '인턴',
    prof: '웹디자인&웹퍼블리싱&프론트엔드',
    grade: '사원',
    work: ['브랜드관제 페이지 리디자인','히든태그 앱 퍼블리싱(히든태그/히든태그 COP/히든태그 global)']
  },
  {
    tit: '엔에이치엔위투 주식회사',
    time: '2023.03 - 2024.10(1년 8개월)',
    type: '정규직',
    prof: '웹퍼블리싱',
    grade: '사원',
    work: [
      'Vue.js 버전 리팩토링',
      'Wlab 공식 페이지 리뉴얼',
      'wearLounge 사이트 구축',
      'marmot(마모트코리아) 공식 홈페이지 구축',
      'NHNWETOO, 아이카사코리아 공식 홈페이지 리뉴얼',
      'Coltorti(칼토티) 공식 홈페이지 구축',
      'luxxdot(럭스닷) 공식 홈페이지 구축',
      'oboz(오보즈 코리아) 공식 홈페이지 생성',
    ]
  },
  {
    tit: '인터코스메틱',
    time: '2019.11 - 2022.05(2년 7개월)',
    type: '정규직',
    prof: '웹디자인',
    grade: '사원',
    work: [
      '각각의 소셜커머스 회사의 이벤트 배너, 썸네일 제작',
    ]
  },
];
</script>