<template>
  <h2>프로젝트 경험</h2>
  <ul class="work_record">
    <li v-for="item in workArr" :key="item.title">
      <span>{{ item.time }}</span>
      <div class="text">
        <p class="title">
          <strong>{{ item.title }}</strong>
          <span>기여도: {{ item.contribute }}</span>
        </p>
        <ul class="round_list">
          <li v-for="(skill, i) in item.skill" :key="`${skill}_${i}`">{{ skill }}</li>
        </ul>
        <p>{{ item.desc }}</p>
        <a v-if="item.linkPC != ''" :href="item.linkPC" target="_blank">{{ item.linkPC }}</a>
        <a v-if="item.linkMO != ''" :href="item.linkMO" target="_blank">{{ item.linkMO }}</a>
      </div>
    </li>
  </ul>
</template>

<script setup>
const workArr = [
  {
    time: "2025.12 - now",
    title: "라벨∙고객사 관제 페이지 리디자인 및 리팩토링",
    contribute: "90%",
    desc: "기존의 라벨∙고객사 관제 페이지 개선 프로젝트의 전체 코드를 리팩토링, UI/UX 적으로 보았을 때 부적합한 디자인 개선과 함께 프론트단 리팩토링 진행, TailWindCSS없이 무분별하게 나열된 CSS 처리 코드 전체 코드 SCSS 전처리기로 리팩토링, 기존의 무분별한 기능 동작 단락을 정리.",
    skill: ["React.js", "React Query", "Axios", "Vite", "recharts", "Zustand", "SCSS", "dayjs", "lucide-react"],
    linkPC: "",
    linkMO: "",
  },
  {
    time: "2025.07 - now",
    title: "HIDDENTAG E.Y.E(브랜드관제 2.0)",
    contribute: "90%",
    desc: "기존의 관제 페이지를 2.0으로 고도화하는 작업을 진행. 웹페이지 리디자인부터 전체적 프론트 페이지 구현, react grid layout 라이브러리를 사용해 사용자가 원하는 위젯 커스터마이징 기능 구현, i18next를 통한 다국어처리 영어, 중국어, 일본어, 베트남어 지원, google map 을 이용해 위치 노출, STOMP로 실시간 데이터 연동 기능을 구현, Chart.js, D3, Google Chart를 이용해 데이터를 차트화시켜 노출.",
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
  },
  {
    time: "2025.05 - 2025.06",
    title: "히든태그 앱 퍼블리싱(HiddenTag)",
    contribute: "70%",
    desc: "기존 운영하던 히든태그 어플 UI 퍼블리싱 및 데이터 바인딩 작업, jQuery 와 Ajax 코드 리팩토링, Java Spring Boot 기반의 프로젝트 내에서 진행",
    skill: ["HTML", "SCSS", "JavaScript", "jQuery"],
    linkPC: "",
    linkMO: "",
  },
  {
    time: "2024.01 - 2024.09",
    title: "Vue.js 버전 리팩토링",
    contribute: "70%",
    desc: "기존 운영하던 1300k, 가방팝, 1200m, wetooMro, 깔세몰, oboz footwear, luxxdot, coltorti, marmot 등 Vue.js 2버전에서 3으로 리팩토링했으며 jQuery로 반영되어있는 animate 기능을 JavaScript와 CSS만으로 구현할 수 있도록 리팩토링",
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS"],
    linkPC: "",
    linkMO: "",
  },
  {
    time: "2024.05 - 2024.06",
    title: "Wlab 공식 페이지 리뉴얼",
    contribute: "80%",
    desc: "메인 페이지, 브랜드 스토리, 회원등급 안내 페이지, 회원등급 페이지 퍼블리싱, 배너 및 제품요소 shopby api 로 연동",
    skill: ["Vue.js", "vuex", "JavaScript", "REST API", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://wlab.co.kr",
    linkMO: "https://m.wlab.co.kr",
  },
  {
    time: "2024.05 - 2024.06",
    title: "wearLounge 사이트 구축",
    contribute: "50%",
    desc: "메인 페이지 퍼블리싱, 배너 및 제품요소 shopby api 로 연동",
    skill: ["Vue.js", "vuex", "JavaScript", "REST API", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://wearlounge.com/",
    linkMO: "https://m.wearlounge.com/",
  },
  {
    time: "2024.01 - 2024.02",
    title: "marmot(마모트 코리아) 공식 홈페이지 사이트 구축",
    contribute: "60%",
    desc: "메인 페이지, Expore > OurStory,Technology,Sustainability,Warranty 페이지 퍼블리싱, 메인 페이지 내 배너 및 제품요소 shopby api 로 연동, shopby api 를 이용한 Find A Store 페이지 구축",
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://marmotkorea.kr/",
    linkMO: "https://m.marmotkorea.kr/",
  },
  {
    time: "2023.11 - 2023.12",
    title: "Coltorti (칼토티) 국내 공식 홈페이지 사이트 구축",
    contribute: "50%",
    desc: "메인 페이지 퍼블리싱, 배너 및 제품요소 shopby api 로 연동",
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "",
    linkMO: "",
  },
  {
    time: "2023.09 - 2023.10",
    title: "아이카사 코리아 공식 홈페이지 사이트 구축",
    contribute: "50%",
    desc: "gulp.js 를 통한 퍼블리싱 및 페이지 구성 및 react.js 로 재빌드 된 사이트 수정작업",
    skill: ["React.js", "SCSS", "gulp"],
    linkPC: "https://aykasa-korea.co.kr/",
    linkMO: "",
  },
  {
    time: "2023.07 - 2023.08",
    title: "NHN WETOO 공식 홈페이지",
    contribute: "50%",
    desc: "gulp.js 를 통한 퍼블리싱 및 페이지 구성 및 react.js 로 재빌드 된 사이트 수정작업",
    skill: ["React.js", "SCSS", "gulp"],
    linkPC: "https://www.nhnwetoo.com",
    linkMO: "",
  },
  {
    time: "2023.06 - 2023.07",
    title: "오보즈 코리아 공식 홈페이지",
    contribute: "50%",
    desc: "메인 페이지 퍼블리싱, Shop > Collections 페이지 퍼블리싱",
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Figma", "Adobe Photoshop"],
    linkPC: "https://obozfootwear.co.kr/",
    linkMO: "https://m.obozfootwear.co.kr/",
  },
  {
    time: "2023.05 - 2023.05",
    title: "오보즈 코리아 공식 홈페이지",
    contribute: "50%",
    desc: "메인 페이지 퍼블리싱",
    skill: ["Vue.js", "vuex", "JavaScript", "SCSS", "Adobe Photoshop"],
    linkPC: "https://obozfootwear.co.kr/",
    linkMO: "https://m.obozfootwear.co.kr/",
  },
];
</script>
