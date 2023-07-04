<template>
			<view class="my-banner">
				<swiper class="banner"  circular indicator-dots autoplay interval="3000" 
					:duration="duration">
					<swiper-item v-for="item in bannerList" :key="item.id">
						<img :src="item.pic" alt="">
					</swiper-item>
				</swiper>
			</view>
</template>

<script>
import { ref } from 'vue'
import {store} from  '@/store/index'
export default{
	setup() {
	let bannerList = ref([
			{
				id:1,
				pic:'https://m15.360buyimg.com/mobilecms/jfs/t1/115362/3/16486/142597/621f1512E2b783e15/99f2262dabea750e.jpg!cr_1053x420_4_0!q70.jpg'
			},
			{
				id:2,
				pic:'https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000267/100028386475/FocusFullshop/CkFqZnMvdDEvNjg0NjgvMi8xODQxNy84MDQwNy82MzU5ZmEwZUVlMTkxY2M3OC85Yzc1MDBhYzY2M2IxODUxLmpwZxIMOTk5LWNfdHlfMF8xMAM4i4t6WKuZoNH0Ag/cr_1125x449_0_166/s/q70.jpg'
			},
			{
				id:3,
				pic:'https://imgcps.jd.com/ling4/10067285460095/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c134fc882acdd181dcabc0d/4552b8e2/cr_1125x449_0_166/s/q70.jpg'
			},
	])
	// 将数据存入vuex中
	store.state.bannerList = bannerList.value
	return{
		bannerList
	}
}
}
</script>

<style lang="less" scoped>
	.my-banner{
		margin: 10rpx 0;
	}
	.banner{
		width: 1005;
		height: 350rpx;
		img{
			width: 1005;
			height: 350rpx;
		}
	}
</style>