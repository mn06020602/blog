<template>
	<div>
		<div class="xu-nav">
			<div class="xu-nav-bar xu-fx-between">
				<ul class="xu-list">
					<li>
						<router-link to="/index">主页</router-link>
					</li>
					<li>
						<router-link to="/collection">专题</router-link>
					</li>
					<li>
						<router-link to="/article">文章</router-link>
					</li>
					<li>
						<router-link to="/user">作者</router-link>
					</li>
				</ul>
			</div>

			<div class="bl-df-right">
				<ul v-if="!this.user">
					<li>
						<router-link to="/download">下载APP</router-link>
					</li>
					<li>
						<router-link to="/sign">登录</router-link>
					</li>
				</ul>
				<ul>
					<li v-if="this.user" class="bl-df-right">
						<router-link to="/user"><img :src="user.avatar" class="bl-avatar-normal" /></router-link>
					</li>
				</ul>
			</div>
		</div>

		<router-view class="container" />
	</div>

</template>

<script>
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user'))
			};
		},
		created() {},
		methods: {}
	}
</script>
<style scoped>
	/* 绿色盒子 */
	.bl-df-right {
		width: 260px;
		background: #008000;
		}
	.bl-df-right ul{
		display: table;
		margin:0 auto;
	}	
		
	.bl-df-right ul li{
		list-style: none;
		display: inline-block;
		line-height: 80px;
		margin-left: 20px;
	}
	
</style>
