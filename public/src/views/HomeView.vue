<script>
import Profile from '@/components/Profile.vue';
import Divider from '@/components/Divider.vue';
import Projects from '@/components/Projects.vue'

export default {

	data: function () {
		return {
			projetos: 'PROJETOS',
		}
	},

	components: {
		Profile,
		Divider,
		Projects
	}
}

</script>

<template>
	<div class="container">
		<Profile />
		<Divider :title="this.projetos" />
	</div>
	<Projects />
</template>

<style>
* {

	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease;
	animation-duration: 0.6s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
