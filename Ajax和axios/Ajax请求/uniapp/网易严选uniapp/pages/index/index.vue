<template>
	<view class="head">
		<!-- 顶部搜索 -->
		<view class="my-header">
			<view class="logo">
				<h4>网易严选</h4>
			</view>
			<view class="header-input">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="请输入">
			</view>
			<view class="header-btn">
				<button>搜索</button>
			</view>
		</view>
		<!-- 滑动的导航区域 -->
		<scroll-view scroll-x='true' enable-flex='true' class="myNav">
			<view class="item" :class="activeItem == -1 ? 'active' : ''" @click="btnItem">
				推荐
			</view>
			<view class="item" :class="activeItem == item.id ? 'active':''"  v-for="(item,index) in list" :key="item.id" @click="changItem(item.id)">{{item.title}}</view>
		</scroll-view>
	
	<!-- 推荐界面-->
	<Recommend></Recommend>
	</view>
</template>

<script>
import {store} from '@/store'
import {ref} from 'vue'
import  Recommend from '@/components/recommend.vue'
	export default {
		components:{
			Recommend
		},
		setup() {
			let activeItem = ref(-1)
			let list = ref([
				{
					id:1,
					title:'居家生活',
				},
				{
					id:2,
					title:'服饰鞋包',
				},
				{
					id:3,
					title:'美食酒水',
				},
				{
					id:4,
					title:'个护清洁',
				},
				{
					id:5,
					title:'母婴亲子',
				},
				{
					id:6,
					title:'运动旅行',
				},
				{
					id:7,
					title:'数码家电',
				},
				{
					id:9,
					title:'好货抄底',
				},
			])
			const changItem = (id)=>{
				activeItem.value = id
			}
			const btnItem = ()=>{
				activeItem.value = -1
			}
			
			// 将数据存入 vuex state中
			store.state.menu.navList = list.value
			return{
				list,
				changItem,
				activeItem,
				btnItem
			}
		}
	}
</script>

<style lang="less" scoped>
head{
	width: 100%;
}
// 搜索布局
.my-header{
	width: 100%;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo{
	margin-left: 5rpx;
	h4{
		font-size: 40rpx;
		letter-spacing: 1rpx;
		font-family: '楷体';
	}
}
.header-input{
	position: relative;
	align-items: center;
	border: 1px solid #ccc;
	i{
		position: absolute;
		top: 10rpx;
		left: 5rpx;
		font-size: 29rpx;
	}
	input{
		height: 50rpx;
		font-size: 15rpx;
		padding: 4px 20px ;
	}
	
}
.header-btn{
	margin-right: 20rpx;
	button{
		text-align: center;
		font-size: 14rpx;
	}
}

// 横向滚动
.myNav{
	white-space: nowrap;
	overflow-x: hidden;
	color: #333;
	font-size: 28rpx;
	.item{
		display: inline-block;
		margin: 10rpx;
		padding: 7rpx;
		&.active{
			color: #ff5555;
			border-bottom: 1px solid #ff5555;
		}
	}
}

// 如果不想显示横滚动条需要设置该样式
scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
</style>
