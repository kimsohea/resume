<template>
  <Profile />
  <hr />
  <Experience />
  <hr />
  <WorkRecord />

  <hr />
  <License />
</template>

<script setup>
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import WorkRecord from "@/components/WorkRecord";
import License from "@/components/License";
</script>

<style lang="scss">
@forward "@/assets/style/style.scss";
</style>
