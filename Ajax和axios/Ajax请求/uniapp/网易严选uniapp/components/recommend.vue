<template>
	<view>
		<!-- 轮播图 -->
		<Banner></Banner>
	<!-- 品牌信息 -->
	 <view class="info">
		 <view class="ele" v-for="item in 4" :key="item">
		 	<i class="iconfont icon-touxiang"></i>
			<span>居家生活</span>
		 </view>
	 	
	 </view>
		
		<!-- 产品分类  -->
		<view class="category-list">
			<ul>
				<li v-for="item in categoryList" :key="item.id">
					<img src="../static/logo.png" alt="">
					<span>{{item.title}}</span>
				</li>
			</ul>
			
		</view>
	</view>
</template>

<script>
// 轮播图
import Banner from './banner.vue'
import {ref} from 'vue'
import {store} from  '@/store/index.js'
export default {
		components:{
			Banner
		},
		setup(){
			let categoryList = ref([])
			categoryList.value = store.state.menu.navList
			return{
				categoryList
			}
		}
}
	
</script>
<style lang="less" scoped>
.info{
	display: flex;
	margin-top: 20rpx;
	.ele{
		flex: 1;
		text-align: center;
		display: flex;
		align-items: center;
		i{
			font-size: 40rpx;
			vertical-align: middle;
		}
		span{
			font-size: 30rpx;
			padding-left: 10rpx;
		}
	}
}
.category-list{
	width: 100%;
	padding: 10rpx 20rpx;
	ul{
		display: flex;
		flex-wrap: wrap;
		li{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 10rpx 30rpx ;
			img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 30rpx;
			}
			span{
				font-size: 28rpx;
			}
		}
	}
}
</style>