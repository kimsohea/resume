<template>
  <div class="stack_box">
    <ul class="stack_group" :aria-label="`${title} 기술 스택`">
      <li v-for="(tool, i) in visibleTools" :key="`tool_${i}_${tool}`" class="stack_avt" :title="tool" :style="getBg(tool)">
        <span v-if="getSvg(tool)" class="svg_ico" v-html="getSvg(tool)" />
        <span v-else class="txt_ico">
          {{ getTxt(tool) }}
        </span>
      </li>
      <li v-if="restCount > 0" class="stack_avt more" :title="hiddenTools.join(', ')">+{{ restCount }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tools: {
    type: Array,
    default: () => [],
  },
  maxCount: {
    type: Number,
    default: 3,
  },
});

const uniqueTools = computed(() => [...new Set(props.tools)]);
const visibleTools = computed(() => uniqueTools.value.slice(0, props.maxCount));
const hiddenTools = computed(() => uniqueTools.value.slice(props.maxCount));
const restCount = computed(() => Math.max(uniqueTools.value.length - props.maxCount, 0));

const getTxt = (txt) => {
  const map = {
    vuex: "VX",
    "React-query": "RQ",
    Zustand: "Z",
    Axios: "AX",
    STOMP: "ST",
    i18next: "I18",
    "Chart.js": "CJ",
    D3: "D3",
    "Google charts": "GC",
    "React Cookie": "RC",
    "React Paginate": "RP",
    Swiper: "SW",
    "React grid layout": "GL",
    recharts: "RE",
    dayjs: "DJ",
    "lucide-react": "LR",
    "REST API": "API",
    "Adobe Photoshop": "PS",
    "Adobe Illustrator": "AI",
    "styled-components": "SC",
  };

  return map[txt] || txt.slice(0, 2).toUpperCase();
};

const svgMap = {
  "React.js": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.7">
        <ellipse cx="12" cy="12" rx="9" ry="3.8"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/>
      </g>
      <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
    </svg>
  `,
  "Vue.js": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h4.2L12 11.3 15.8 5H20l-8 14L4 5Z" fill="currentColor"/>
      <path d="M7.3 5h2.9L12 8l1.8-3h2.9L12 13 7.3 5Z" fill="#fff"/>
    </svg>
  `,
  JavaScript: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="currentColor"/>
      <path d="M10.2 16.6c.4.7 1 .9 1.7.9.7 0 1.2-.3 1.2-.9 0-.6-.5-.8-1.4-1.2l-.5-.2c-1.4-.6-2.4-1.3-2.4-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.8 1.5l-1.5.9c-.3-.5-.7-.8-1.3-.8-.6 0-.9.3-.9.8 0 .5.3.7 1.1 1l.5.2c1.7.7 2.6 1.4 2.6 3 0 1.7-1.3 2.6-3.2 2.6-1.8 0-2.9-.8-3.5-1.9l1.5-.9Z" fill="#111"/>
      <path d="M7.6 16.7c.3.5.6.8 1.1.8.6 0 .9-.2.9-1.1v-5.9h1.9v5.9c0 1.8-1 2.6-2.6 2.6-1.4 0-2.1-.7-2.5-1.5l1.2-.8Z" fill="#111"/>
    </svg>
  `,
  HTML: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h14l-1.2 14.6L12 20l-5.8-1.4L5 4Z" fill="currentColor"/>
      <path d="M12 5.2v13.5l4.7-1.1 1-12.4H12Z" fill="rgba(255,255,255,.22)"/>
      <path d="M8.1 8.1H16l-.2 2H10l.1 1.7h5.5l-.5 5.2-3.1.8-3.1-.8-.2-2.3h1.9l.1.9 1.3.3 1.3-.3.1-1.8H8.4l-.3-5.7Z" fill="#fff"/>
    </svg>
  `,
  SCSS: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.4 6.3c-.9-1-2.3-1.4-4-.8-1.2.4-2.1 1.2-2.7 2-.8 1-1.2 1.9-1.9 2.4-.5.4-.9.5-1.2.3-.2-.2-.2-.6.1-1 .6-.8 1.7-1.2 2.1-1.3-.2-.7-.9-1.1-1.8-1-1.1.1-2.2.9-2.7 1.8-.6 1-.5 2.1.4 2.8.8.6 2 .5 3.2-.2 1-.6 1.7-1.6 2.3-2.3.9-1.2 1.5-2 2.6-2.3.9-.3 1.4 0 1.6.4.3.7-.2 1.4-1.6 2.1-.5.3-1.1.5-1.8.9.2.4.4.8.6 1.2 1.3-.4 2.5-.4 3.3-.1 1 .3 1.7 1 1.9 1.9.2 1-.2 2-1 2.6-.7.6-1.7.8-2.6.5-.7-.2-1.2-.8-1.4-1.6-.1-.4-.2-.8-.2-1.3-.5.1-1 .3-1.5.5.1.7.3 1.4.5 2 .5 1.4 1.6 2.3 3 2.6 1.6.3 3.3-.1 4.4-1.1 1.2-1 1.7-2.4 1.4-3.9-.3-1.4-1.4-2.5-2.9-3-.6-.2-1.2-.3-1.8-.3.3-.2.7-.4 1-.6 1.7-1 2.5-2.4 1.8-4Z" fill="currentColor"/>
    </svg>
  `,
  Figma: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a3 3 0 0 1 0 6H9V6a3 3 0 0 1 3-3Z" fill="currentColor"/>
      <path d="M9 9h3a3 3 0 1 1 0 6H9V9Z" fill="currentColor" opacity=".88"/>
      <path d="M9 15h3v3a3 3 0 1 1-3-3Z" fill="currentColor" opacity=".76"/>
      <path d="M9 3v6H6a3 3 0 1 1 0-6h3Z" fill="currentColor" opacity=".64"/>
      <path d="M9 9v6H6a3 3 0 1 1 0-6h3Z" fill="currentColor" opacity=".52"/>
    </svg>
  `,
  "Adobe Photoshop": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/>
      <path d="M8 16.8V7.2h3.7c2 0 3.4 1.1 3.4 3 0 2-1.4 3.2-3.5 3.2H10v3.4H8Zm2-5.1h1.4c1.1 0 1.7-.5 1.7-1.4 0-.9-.6-1.4-1.7-1.4H10v2.8Zm6.2 5.2c-1 0-1.9-.3-2.5-.8l.8-1.4c.5.4 1.1.7 1.8.7.7 0 1-.2 1-.7 0-.4-.2-.6-1.2-.9-1.7-.5-2.2-1.2-2.2-2.3 0-1.4 1.1-2.3 2.8-2.3.9 0 1.7.2 2.3.6l-.8 1.3c-.4-.3-.9-.5-1.5-.5-.6 0-.9.2-.9.6s.3.5 1.2.8c1.7.5 2.3 1.1 2.3 2.4 0 1.5-1.2 2.5-3.1 2.5Z" fill="#fff"/>
    </svg>
  `,
  "Adobe Illustrator": `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/>
      <path d="M10.8 16.8 10.2 15H8l-.6 1.8H5.4l3-9.6h1.6l3 9.6h-2.2Zm-1.7-5.4-.6 2h1.3l-.7-2Zm5.5 5.4V9.7h2v7.1h-2Zm1-8c-.7 0-1.1-.4-1.1-1s.4-1 1.1-1 1.1.4 1.1 1-.4 1-1.1 1Z" fill="#fff"/>
    </svg>
  `,
};

const getSvg = (txt) => svgMap[txt] || "";

const getBg = (txt) => {
  const map = {
    "React.js": {
      background: "#61DAFB",
      color: "#111",
    },
    "React-query": {
      background: "#FF4154",
      color: "#fff",
    },
    Vite: {
      background: "#9135FF",
      color: "#fff",
    },
    Axios: {
      background: "#5A29E4",
      color: "#fff",
    },
    i18next: {
      background: "#26A69A",
      color: "#fff",
    },
    "Vue.js": {
      background: "#42B883",
      color: "#fff",
    },
    JavaScript: {
      background: "#F7DF1E",
      color: "#111",
    },
    HTML: {
      background: "#E44D26",
      color: "#fff",
    },
    SCSS: {
      background: "#CD6799",
      color: "#fff",
    },
    Figma: {
      background: "#1E1E1E",
      color: "#fff",
    },
    "Adobe Photoshop": {
      background: "#001E36",
      color: "#31A8FF",
    },
    "Adobe Illustrator": {
      background: "#330000",
      color: "#FF9A00",
    },
  };

  return (
    map[txt] || {
      background: "#111",
      color: "#fff",
    }
  );
};
</script>
