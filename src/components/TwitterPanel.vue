<template>
  <v-card class="col-md-6">
      <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
  </v-card>
</template>

<script>
import { Timeline } from "vue-tweet-embed";

export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "ShimofuriGroove"
    };
  }
};
</script>
<style scoped lang="scss">
  v-card {
    display: block;
    margin: 0 auto;
  }
</style>
