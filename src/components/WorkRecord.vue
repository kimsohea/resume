<template>
  <div class="work_record header">
    <h2>프로젝트 경험</h2>
    <div>
      <em class="tech">도구 및 방식</em>
      <em class="result">결과</em>
    </div>
  </div>
  <ul class="work_record">
    <li v-for="item in workArr" :key="item.title">
      <div class="text">
        <p class="title">
          <strong>{{ item.title }}</strong>
          <span>{{ item.time }}</span>
        </p>
        <StackGroup :title="item.title" :tools="item.skill" />
        <a v-if="getWorkLink(item)" :href="getWorkLink(item)" target="_blank" rel="noopener noreferrer" class="link">{{ item.siteName }}</a>
      </div>
      <ul class="task_list">
        <li v-for="(task, i) in item.tasks" :key="`${task}_${i}`">
          <p v-html="parseTask(task)" />
        </li>
        <li v-if="item.links?.length > 0">
          진행 프로젝트:
          <a
            v-for="links of item.links"
            :key="`${links.name}`"
            :href="getWorkLink(links) ?? ''"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            :class="!links.linkPC ? 'no_url' : ''"
            >{{ links.name }}</a
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import StackGroup from "./StackGroup.vue";

const isPadOrPhone = ref(false);
const mediaQuery = typeof window !== "undefined" ? window.matchMedia("(max-width: 1024px)") : null;

const updateScreenType = () => {
  isPadOrPhone.value = mediaQuery?.matches ?? false;
};

const getWorkLink = (item) => {
  if (!item.siteName) return false;
  if (isPadOrPhone.value && item.linkMO) return item.linkMO;
  return item.linkPC || item.linkMO;
};

const parseTask = (text) => text.replace(/\{(.*?)\}/g, '<em class="tech">$1</em>').replace(/\((.*?)\)/g, '<em class="result">$1</em>');

onMounted(() => {
  updateScreenType();
  mediaQuery?.addEventListener("change", updateScreenType);
});

onUnmounted(() => {
  mediaQuery?.removeEventListener("change", updateScreenType);
});

const workArr = [
  {
    time: "2025.12 - 2026.04",
    title: "라벨∙고객사 관제\n 리디자인 및 리팩토링",
    tasks: [
      "{React, React Query, Zustand}로 전체 구조를 재설계하여 (유지보수성과 확장성 개선)",
      "{UI/UX 원칙, 컴포넌트 기반 설계}로 구조 및 인터랙션을 재정의하여 (사용자 흐름과 가독성 개선)",
      "{SCSS, 디자인 토큰}으로 무분별하게 작성된 CSS를 체계화하여 (스타일 일관성 확보)",
      "{기능 단위 모듈화, 로직 분리}로 산재된 비즈니스 로직을 정리하여 (코드 가독성과 재사용성 향상)",
    ],
    skill: ["React.js", "React Query", "Axios", "Vite", "recharts", "Zustand", "SCSS", "dayjs", "lucide-react"],
  },
  {
    time: "2025.07 - 2026.04",
    title: "HIDDENTAG E.Y.E\n(브랜드관제 2.0)",
    tasks: [
      "{React} 기반 프론트엔드 구조 개선을 통해 (관제 페이지 사용자 경험 개선)",
      "{React Grid Layout}으로 위젯 커스터마이징 기능을 구현해 (사용자 맞춤형 대시보드 기능 지원)",
      "{i18next} 기반 다국어 처리 체계를 구축하여 (총 5개 언어 서비스 지원)",
      "{Google Maps API, STOMP}로 스캔 위치 데이터를 연동하여 (지도 이벤트 실시간 반영)",
      "{Chart.js, D3, Google Charts}로 데이터 시각화 컴포넌트를 구현하여 (데이터 가독성 개선)",
    ],
    skill: [
      "React.js",
      "Vite",
      "i18next",
      "STOMP",
      "Zustand",
      "Axios",
      "React Query",
      "SCSS",
      "Chart.js",
      "D3",
      "Google charts",
      "vis.gl/react-google-maps",
      "React Cookie",
      "React Paginate",
      "Swiper",
      "React grid layout",
      "Figma",
    ],
    linkPC: "https://www.hiddentageye.com/",
    siteName: "HIDDENTAG E.Y.E",
  },
  {
    time: "2025.05 - 2025.06",
    title: "히든태그 앱 퍼블리싱(HiddenTag)",
    tasks: [
      "{Java, Spring Boot} 기반 프로젝트의 UI를 구현하여 (서비스 화면 구축)",
      "{JavaScript} 기반으로 레거시 jQuery 코드를 리팩토링하여 (기능 로직 단순화)",
      "{비동기 요청 및 DOM 조작 흐름}을 정리하여 (코드 가독성과 유지보수성 개선)",
    ],
    skill: ["HTML", "SCSS", "JavaScript", "jQuery"],
  },
  {
    time: "2024.01 - 2024.09",
    title: "Vue 버전\n리팩토링",
    tasks: [
      "{Vue.js} 기반 레거시 운영 서비스들을 리팩토링하여 (Vue.js 3 마이그레이션)",
      "{JavaScript, CSS Animation}으로 기존 jQuery 코드를 리팩토링하여 (jQuery 의존성 제거)",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS"],
  },
  {
    time: "2023.05 - 2024.06",
    title: "Vue 기반 프로젝트\n구현 및 유지보수",
    tasks: [
      "{Vue.js} 기반 다수 서비스의 페이지 구현 및 운영으로 (서비스 유지보수 지원)",
      "{Shopby API}로 배너 및 제품 요소를 연동하여 (동적 데이터 바인딩 구현)",
      "{REST API 연동 구조}를 적용하여 (운영 데이터 반영 효율 개선)",
    ],
    links: [
      { name: "WLAB", linkPC: "https://wlab.co.kr", linkMO: "https://m.wlab.co.kr" },
      { name: "wearLounge", linkPC: "https://wearlounge.com/", linkMO: "https://m.wearlounge.com/" },
      { name: "marmot", linkPC: "https://marmotkorea.kr/", linkMO: "https://m.marmotkorea.kr/" },
      { name: "Coltorti" },
      { name: "OBOZ", linkPC: "https://obozfootwear.co.kr/", linkMO: "https://m.obozfootwear.co.kr/" },
      { name: "럭스닷" },
      { name: "1300k" },
      { name: "1200m" },
      { name: "wetooMRO" },
      { name: "gabangpop" },
    ],
    skill: ["Vue.js", "Figma", "vuex", "JavaScript", "REST API", "SCSS", "Adobe Photoshop"],
  },
  {
    time: "2023.07 - 2023.10",
    title: "React 기반 프로젝트\n구현 및 유지보수",
    tasks: [
      "{Gulp.js} 기반 퍼블리싱 환경에서 (화면 및 사이트 구현)",
      "{React} 기반 운영 서비스 유지보수로 (서비스 안정성 확보)",
      "기존 퍼블리싱 구조와 {React} 기반 화면 구조를 함께 대응하여 (운영 페이지 안정성 개선)",
    ],
    links: [
      { name: "AYKASA", linkPC: "https://aykasa-korea.co.kr/", linkMO: "" },
      { name: "NHN WETOO", linkPC: "https://www.nhnwetoo.com", linkMO: "" },
    ],
    skill: ["React.js", "styled-components", "gulp", "SCSS"],
  },
];
</script>
