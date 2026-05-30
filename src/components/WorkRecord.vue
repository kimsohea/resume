<template>
  <h2>프로젝트 경험</h2>
  <ul class="work_record">
    <li v-for="item in workArr" :key="item.title">
      <div class="text">
        <p class="title">
          <strong>{{ item.title }}</strong>
          <span>{{ item.time }}</span>
        </p>
        <StackGroup :title="item.title" :tools="item.skill" />
        <a v-if="getWorkLink(item)" :href="getWorkLink(item)" target="_blank" rel="noopener noreferrer">{{ item.siteName }}</a>
      </div>
      <ul class="task_list">
        <li v-for="(task, i) in item.tasks" :key="`${task}_${i}`">{{ task }}</li>
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
  if (isPadOrPhone.value && item.linkMO) return item.linkMO;
  return item.linkPC || item.linkMO;
};

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
    title: "라벨∙고객사 관제 페이지 리디자인 및 리팩토링",
    desc: "기존의 라벨∙고객사 관제 페이지 개선 프로젝트의 전체 코드를 리팩토링, UI/UX 적으로 보았을 때 부적합한 디자인 개선과 함께 프론트단 리팩토링 진행, TailWindCSS없이 무분별하게 나열된 CSS 처리 코드 전체 코드 SCSS 전처리기로 리팩토링, 기존의 무분별한 기능 동작 단락을 정리.",
    tasks: [
      "React 및 상태 관리 구조를 기반으로 전체 코드 구조를 재설계하여 라벨∙고객사 관제 페이지의 유지보수성과 확장성 개선",
      "UI/UX 원칙을 기반으로 컴포넌트 구조 및 인터랙션을 재정의하여 사용자 흐름과 가독성 개선",
      "SCSS 전처리기 및 디자인 토큰 구조를 적용하여 무분별하게 작성된 CSS를 체계화하고 스타일 일관성 확보",
      "기능 단위 모듈화 및 로직 분리를 통해 산재된 비즈니스 로직을 정리하여 코드 가독성과 재사용성 향상",
    ],
    skill: ["React.js", "React Query", "Axios", "Vite", "recharts", "Zustand", "SCSS", "dayjs", "lucide-react"],
    linkPC: "",
    linkMO: "",
    siteName: "",
  },
  {
    time: "2025.07 - 2026.04",
    title: "HIDDENTAG E.Y.E(브랜드관제 2.0)",
    desc: "기존의 관제 페이지를 2.0으로 고도화하는 작업을 진행. 웹페이지 리디자인부터 전체적 프론트 페이지 구현, react grid layout 라이브러리를 사용해 사용자가 원하는 위젯 커스터마이징 기능 구현, i18next를 통한 다국어처리 영어, 중국어, 일본어, 베트남어 지원, google map 을 이용해 위치 노출, STOMP로 실시간 데이터 연동 기능을 구현, Chart.js, D3, Google Chart를 이용해 데이터를 차트화시켜 노출.",
    tasks: [
      "React 기반 프론트엔드 구조를 재설계하여 기존 관제 페이지를 2.0 버전으로 고도화",
      "React Grid Layout을 활용한 위젯 커스터마이징 기능 구현으로 사용자 맞춤형 대시보드 구성 지원",
      "i18next 기반 다국어 처리 구조를 적용하여 영어, 중국어, 일본어, 베트남어 서비스 환경 지원",
      "Google Maps API 및 STOMP 실시간 연동을 통해 스캔 위치 데이터와 실시간 이벤트를 관제 화면에 반영",
      "Chart.js, D3, Google Charts를 활용한 데이터 시각화 컴포넌트 구현으로 관제 데이터의 가독성 개선",
    ],
    skill: [
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
    ],
    linkPC: "https://www.hiddentageye.com/",
    linkMO: "",
    siteName: "HIDDENTAG E.Y.E",
  },
  {
    time: "2025.05 - 2025.06",
    title: "히든태그 앱 퍼블리싱(HiddenTag)",
    desc: "기존 운영하던 히든태그 어플 UI 퍼블리싱 및 데이터 바인딩 작업, jQuery 와 Ajax 코드 리팩토링, Java Spring Boot 기반의 프로젝트 내에서 진행",
    tasks: [
      "Java Spring Boot 기반 프로젝트에서 히든태그 앱 UI 퍼블리싱 및 데이터 바인딩 구조 구현",
      "JavaScript 기반으로 jQuery 및 Ajax 중심의 기존 코드를 리팩토링하여 기능 로직 단순화",
      "비동기 요청 및 DOM 조작 흐름을 정리하여 웹 브라우저 렌더링 속도와 유지보수성 개선",
    ],
    skill: ["HTML", "SCSS", "JavaScript", "jQuery"],
    linkPC: "",
    linkMO: "",
    siteName: "",
  },
  {
    time: "2024.01 - 2024.09",
    title: "Vue.js 버전 리팩토링",
    desc: "기존 운영하던 1300k, 가방팝, 1200m, wetooMro, 깔세몰, oboz footwear, luxxdot, coltorti, marmot 등 Vue.js 2버전에서 3으로 리팩토링했으며 jQuery로 반영되어있는 animate 기능을 JavaScript와 CSS만으로 구현할 수 있도록 리팩토링",
    tasks: [
      "Vue.js 2 기반 다수 운영 서비스의 Vue.js 3 버전업 리팩토링 수행",
      "기존 Vue.js 2 컴포넌트 구조와 문법을 Vue.js 3 환경에 맞게 전환",
      "jQuery animate 기능을 JavaScript 및 CSS 기반 애니메이션 구조로 리팩토링",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS"],
    linkPC: "",
    linkMO: "",
    siteName: "",
  },
  {
    time: "2024.05 - 2024.06",
    title: "Wlab 공식 페이지 리뉴얼",
    desc: "메인 페이지, 브랜드 스토리, 회원등급 안내 페이지, 회원등급 페이지 퍼블리싱, 배너 및 제품요소 shopby api 로 연동",
    tasks: [
      "메인 페이지, 브랜드 스토리, 회원등급 안내 페이지, 회원등급 페이지 UI 퍼블리싱 수행",
      "배너 및 제품 요소를 Shopby API와 연동하여 동적 데이터 바인딩 구현",
      "API 기반 콘텐츠 노출 구조를 적용하여 운영 데이터 반영 효율 개선",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "REST API", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://wlab.co.kr",
    linkMO: "https://m.wlab.co.kr",
    siteName: "WLAB",
  },
  {
    time: "2024.05 - 2024.06",
    title: "wearLounge 사이트 구축",
    tasks: [
      "PSD 디자인 시안을 기반으로 메인 페이지 UI 퍼블리싱 수행",
      "배너 및 제품 요소를 Shopby API와 연동하여 동적 데이터 바인딩 구현",
      "API 기반 콘텐츠 노출 구조를 적용하여 운영 데이터 반영 효율 개선",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "REST API", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://wearlounge.com/",
    linkMO: "https://m.wearlounge.com/",
    siteName: "wearLounge",
  },
  {
    time: "2024.01 - 2024.02",
    title: "marmot(마모트 코리아) 공식 홈페이지 사이트 구축",
    desc: "메인 페이지, Expore > OurStory,Technology,Sustainability,Warranty 페이지 퍼블리싱, 메인 페이지 내 배너 및 제품요소 shopby api 로 연동, shopby api 를 이용한 Find A Store 페이지 구축",
    tasks: [
      "메인 페이지 및 Explore 하위 Our Story, Technology, Sustainability, Warranty 페이지 UI 퍼블리싱 수행",
      "메인 페이지 내 배너 및 제품 요소를 Shopby API와 연동하여 동적 데이터 바인딩 구현",
      "Shopby API 기반 매장 정보 연동 구조를 적용하여 Find A Store 페이지 구축",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://marmotkorea.kr/",
    linkMO: "https://m.marmotkorea.kr/",
    siteName: "marmot",
  },
  {
    time: "2023.11 - 2023.12",
    title: "Coltorti (칼토티) 국내 공식 홈페이지 사이트 구축",
    desc: "메인 페이지 퍼블리싱, 배너 및 제품요소 shopby api 로 연동",
    tasks: [
      "PSD 디자인 시안을 기반으로 메인 페이지 UI 퍼블리싱 수행",
      "배너 및 제품 요소를 Shopby API와 연동하여 동적 데이터 바인딩 구현",
      "API 기반 콘텐츠 노출 구조를 적용하여 운영 데이터 반영 효율 개선",
    ],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "",
    linkMO: "",
    siteName: "",
  },
  {
    time: "2023.09 - 2023.10",
    title: "아이카사 코리아 공식 홈페이지 사이트 구축",
    desc: "gulp.js 를 통한 퍼블리싱 및 페이지 구성 및 react.js 로 재빌드 된 사이트 수정작업",
    tasks: [
      "Gulp.js 기반 퍼블리싱 환경에서 페이지 구성 및 화면 구현 작업 수행",
      "React.js로 재빌드된 사이트의 UI 수정 및 프론트엔드 유지보수 작업 진행",
      "기존 퍼블리싱 구조와 React 기반 화면 구조를 함께 대응하여 운영 페이지 안정성 개선",
    ],
    skill: ["React.js", "styled-components", "SCSS", "gulp"],
    linkPC: "https://aykasa-korea.co.kr/",
    linkMO: "",
    siteName: "AYKASA",
  },
  {
    time: "2023.07 - 2023.08",
    title: "NHN WETOO 공식 홈페이지",
    desc: "gulp.js 를 통한 퍼블리싱 및 페이지 구성 및 react.js 로 재빌드 된 사이트 수정작업",
    tasks: [
      "Gulp.js 기반 퍼블리싱 환경에서 페이지 구성 및 화면 구현 작업 수행",
      "React.js로 재빌드된 사이트의 UI 수정 및 프론트엔드 유지보수 작업 진행",
      "기존 퍼블리싱 구조와 React 기반 화면 구조를 함께 대응하여 운영 페이지 안정성 개선",
    ],
    skill: ["React.js", "styled-components", "SCSS", "gulp"],
    linkPC: "https://www.nhnwetoo.com",
    linkMO: "",
    siteName: "NHN WETOO",
  },
  {
    time: "2023.06 - 2023.07",
    title: "오보즈 코리아 공식 홈페이지",
    desc: "메인 페이지 퍼블리싱, Shop > Collections 페이지 퍼블리싱, 사이트 유지보수",
    tasks: ["메인 페이지 UI 퍼블리싱 수행", "Shop 하위 Collections 페이지 UI 퍼블리싱 수행", "운영 중인 사이트의 UI 수정 및 유지보수 작업 진행"],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://obozfootwear.co.kr/",
    linkMO: "https://m.obozfootwear.co.kr/",
    siteName: "OBOZ",
  },
  {
    time: "2023.05 - 2023.05",
    title: "럭스닷 사이트 구축",
    desc: "메인 페이지 퍼블리싱",
    tasks: ["메인 페이지 UI 퍼블리싱 수행", "운영 중인 사이트의 UI 수정 및 유지보수 작업 진행"],
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Adobe Photoshop"],
    linkPC: "",
    linkMO: "",
    siteName: "",
  },
];
</script>
