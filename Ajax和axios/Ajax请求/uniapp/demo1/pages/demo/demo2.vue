<template>
	<view class="header">
		<view class="item" :class="navIndex==index ? 'active':'' " v-for="(item,index) in navArr" :key="item.id" @click="changeColor(index)">
			{{item.title}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navIndex:0,
				navArr:[
					{
						id:1,
						title:"首页"
					},
					{
						id:2,
						title:"介绍"
					},
					{
						id:3,
						title:"教程"
					},
					{
						id:4,
						title:"组件"
					},
					
				]
					
			}
		},
		methods:{
			changeColor(e){
				this.navIndex = e
			}
		}
	}
</script>

<style lang="less" scoped>
	.header{
	display: flex;	
	justify-content: space-around;
	align-items: center;
	.item{
		line-height: 90rpx;
		background-color: #ccc;
		text-align: center;
		flex: 1;
		&.active{
			background: green;
			color: #fff;
		}
	}
	}
</style>