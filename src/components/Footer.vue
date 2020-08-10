<template>
    <footer>
        <p class="text-center">&copy;{{ year }}, <span class="dunkin">霜降りGROOVE</span>.</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped lang="scss">

</style>