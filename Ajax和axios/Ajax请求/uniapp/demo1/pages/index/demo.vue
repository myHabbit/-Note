<template>
	<view class="header">
		<view class="box" @click="changeColor"></view>
		<view class="block" :class="{myactive:true}">
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				colors:['green','red','blue','black']
			}
		},
		methods:{
			changeColor(e){
				let a = (Math.floor(Math.random()*5))
				const btn = document.querySelector('.box')
				btn.style.backgroundColor = this.colors[a]
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.box{
		width: 200rpx;
		height: 200rpx;
		background-color: pink;
	}
	.block{
		width: 200rpx;
		height: 200rpx;
	}
	.myactive{
		background: gray;
	}
</style>