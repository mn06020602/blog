<template>
	<div>
		
		<h1>首页</h1>
		
		<!-- <div class="xu-row">
			<div class="xu-col-8">
				<div class="xu-row">
					<div class="xu-col-12" v-for="(article, index) in articles" :key="index">
						<div class="box xu-sub-title">
							<p>{{ article.title }}</p>
							<p>
								<img :src="article.avatar" class="xu-avatar" />
								<span class="xu-meta">{{ article.nickname }}</span>
								<button class="xu-btn xu-warning-theme  xu-btn-circle xu-title xu-shadow">关注</button>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="xu-col-4"></div>
		</div> -->
	</div>
	
	
</template>

<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://27z34d3886.wicp.vip:46912/api/articles/hot').then(res => {
 			this.articles = res.data.data;
		});
	},
	methods: {},
	computed: {}
};
</script>

<style scoped>
</style>