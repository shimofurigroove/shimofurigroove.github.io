<template>
	<div class="twitter col-md-6">
		<Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }" />
	</div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";

export default {
	components: {
		Timeline,
	},
	data: function() {
		return {
			user_id: "ShimofuriGroove",
		};
	},
};
</script>
<style scoped lang="scss">
.twitter {
	display: block;
	margin: 0 auto;
}
</style>
