<template>
	<div class="sign-container bl-df-center">
			<div class="sign-box bl-shadow bl-dfc-around">
					<div class="tab">
						<h2 class="tab-item" :class="{ active: isActive}" @click="changeTab">登录</h2>
						<h2 class="tab-item" :class="{ active: !isActive}" @click="changeTab">注册</h2>
					</div>
				
					<div class="tab-box" v-show="show&&selected===0">
						<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile" />
						<br />
						<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password" />
						<div class="bl-df-center">
							<button class="bl-btn bl-btn-round bl-btn-normal bl-orange-theme" @click="signIn" autofocus="autofocus">确定</button>
							<button class="bl-btn bl-btn-round bl-btn-normal bl-cyan-theme1">退出</button>
							<button class="bl-btn bl-btn-round bl-btn-normal bl-cyan-theme">取消</button>
						</div>
						<div id="demo"></div>
						<div class="icon">
									<div class="icon-instroduce">
										<p>———其他方式登录———</p>
									</div>
									<div class="icon-line">
										<i class="iconfont"><img src="../assets/img/2.png" style="width:25px;height:20px;"></i>
										<i class="iconfont"><img src="../assets/img/3.png" style="width:45px;height:20px;margin-top:-2px"></i>
										<i class="iconfont"><img src="../assets/img/4.png" style="width:19px;height:15px;margin-bottom:3px;"></i>
										<i class="iconfont"><img src="../assets/img/5.png" style="width:20px;height:16px;margin-bottom:3px;"></i>
									</div>
						</div>
			
					</div>
		
					<div class="tab-box" v-show="show&&selected===1">
								<p class="input-box">
									<input id="uname1" type="text" placeholder="请输入您的账户">
								</p>
								<p class="input-box">
									<input id="upass1" type="text" placeholder="请设置您的密码">
								</p>
								<p class="input-box">
									<input id="upas" type="text" placeholder="请输入您的手机号">
								</p>
								<p class="input-box">
										<input id="yanzhma" type="text" placeholder="验证码">
										<button @click="getCode" :disabled="codeDisabled" class="btn btn-normal" :class="{ btn:btnDisabled,btnDisabled: btnDisabled}">
											{{msg}}
										</button>
								</p>
									<button class="button1" @click="showMsg" :disabled="codeDisabled1" :class="{ btn:btnDisabled1,btnDisabled1: btnDisabled1}">立即注册</button>
								<div class="info" v-if="code">
									<h3>注册成功</h3>
								</div>
					</div>
			
		
			</div>
			
	</div>
</template>

<script>
export default {
	data() {
		return {
					btnDisabled:false,
					isActive: true,
					show: true,
					selected: 0,
					msg: "获取验证码",
					
					// 定时器
					timer: null,
					// 倒计时秒数
					countdown: 10,
					code: false,
				
				userDto: {
				mobile: '',
				password: ''}
			
		};
	},
	created() {},
	methods: {
		changeTab: function() {
						this.isActive = !this.isActive;
						this.selected = this.selected == 0 ? 1 : 0;
					},
		getCode() {
						// 验证码倒计时
						if (!this.timer) {
							this.timer = setInterval(() => {
								if (this.countdown > 0 && this.countdown <= 10) {
									this.countdown--;
									if (this.countdown != 0) {
										this.btnDisabled = true;
										this.msg = "重新发送(" + this.countdown + ")";
										// this.isActive = true;
									} else {
										clearInterval(this.timer);
										this.msg = "获取验证码";
										this.countdown = 10;
										// this.isActive = false;
										this.timer = null;
										this.codeDisabled = false;
										this.btnDisabled = false;
									}
								}
							}, 1000)
						}
					},
					showMsg() {
						this.code = true;
						
					
						
					},
					
		signIn() {
			this.axios.post('http://localhost:8080/api/sign-in', JSON.stringify(this.userDto)).then(response => {
				alert(response.data.msg)
				if (response.data.msg === '登录成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					//路由跳转到首页
					this.$router.push('/profile/basic');
				}
			});
		}
	}
};
</script>

<style scoped>
.sign-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image:url(../assets/img/1.png);
	background-size: calc(100%);

}
.tab {
				display: flex;
				/* flex-direction: column; */
				justify-content: center;
				align-items: center;
				margin-top: 20px;
				height: 50px;
				background-color: #ddd;
				border-radius: 8px 8px 0px 0px;
			}
.tab-item{
				cursor: pointer;
				margin-right: 10px;
				flex: 0 0 80px;
				text-align: center;
				line-height: 33px;
}
.active {
				color: #00BBDD;
				font-weight: 600;
				border-bottom: 2px solid #00BBDD;
			}
.bl-df-center button{
	margin: 10px;
}
.sign-box {
	text-align: center;
	position: absolute;
	left: 50%;
	top: 30%;
	transform: translate(-50%,-50%);
	width: 35%;
	height: 45%;
	border: 1px solid #eee;
	border-radius: 10px;
	background-color: rgb(74, 194, 185, 0.5);
	padding-top: 10px;
	padding-bottom: 10px;
}
h2 {
	letter-spacing: 10px;
	opacity: 0.8;
}
.tab-box{
				margin-top: -10px;
				height: 300px;
				background-color: rgba(0,0,0,.5);
				color: #eee;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 0px 0px 8px 8px;	
			}
			.input-box{
				margin-top:8px;
			}
			
			.button,.button1{
				cursor: pointer;
				width: 42%;
				background-color:green;
				border-radius:3px;
				border: none;
			}
		
			
			#uname,#upass,#phone{
				border-radius:3px;
				height: 24px;
				border: none;
			}
			#yanzhma{
				width: 80px;
				height: 26px;
				border-radius:3px;
				border: none;
			}
			#uname1,#upass1,#upas{
				border-radius:3px;
				height: 24px;
				border: none;
			}
			
			.icon-instroduce{
				margin-top: 20px;
				font-size: 20px;
				color: #000000;
			} 
			.icon {
				margin-top: 15px;
				width: 100%;
				height: 80px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: rgb(255, 227, 0);
			} 
			
			.icon-line{
				margin-bottom: 40px;
			}

			.iconfont{
				cursor: pointer;
				margin: 10px;
			/* 	justify-content:center */
			}
			
			.btn{
				cursor: pointer;
				height: 28px;
				border-radius:3px;
				border: none;
				outline: none;
				text-align: center;
				font-size: 14px;
			}
			
			.btn-normal {
				background-color: rgb(25, 160, 51);
				color: #fff;
			}
			
			.btnDisabled{
				background-color: #ddd;
				color: #333;
			}
</style>