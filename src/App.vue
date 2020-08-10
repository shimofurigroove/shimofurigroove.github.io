<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
</style>