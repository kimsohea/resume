<template>
  <Profile />
  <Experience />
  <Skill />
  <WorkRecord />
  <License />
</template>

<script setup>
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import WorkRecord from "@/components/WorkRecord";
import License from "@/components/License";
</script>

<style lang="scss">
@forward "@/assets/style/style.scss";
</style>
