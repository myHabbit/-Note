<template>
	<view class="box">
		<view class="out"></view>
			<scroll-view scroll-x scroll-x class="scroll">
				<view class="group">
					<view class="item">
						111
					</view>
					<view class="item">
						111
					</view>
					<view class="item">
						111
					</view>
					<view class="item">
						111
					</view>
				</view>
			</scroll-view>
			<swiper class="swiper" indicator-dots autoplay interval="1000">
				<swiper-item class="item">
					<image src="../../static/images/01.jpg"></image>
				</swiper-item>
				<swiper-item class="item">
					<image src="../../static/images/02.jpg"></image>
				</swiper-item>
				<swiper-item class="item">
					<image src="../../static/images/03.jpg"></image>
				</swiper-item>
				<swiper-item class="item">
					<image src="https://imgcps.jd.com/ling4/10038702465753/5qih5Z2X55S15rqQ5YC85b6X6LSt/54m55oOg5aSn5pS-6YCB/p-60541365d250103053e030ee/f3093a90/cr_1125x449_0_166/s/q70.jpg"></image>
				</swiper-item>	
							
			</swiper>
			
				<!-- <navigator url="/pages/index/list">跳转到list页面</navigator> //不在tabbar页面的才可以跳转 -->
				
				<navigator url="/pages/index/list" open-type="reLaunch">跳转到list页面</navigator>   //tabbar里面有 也可以跳转到相应的页面
</view>
</template>

<script>
	export default {
	}
</script>

<style lang="less">
.box{
	.scroll{
		border: 1px solid red;
		box-sizing: border-box;
		height: 200rpx;
		white-space: nowrap;
		.item{
			width: 200rpx;
			height: 200rpx;
			background: green;
			display: inline-block;
			margin-right: 10rpx;
		}
	}
	.swiper{
		.item{
			image{
				width: 750rpx;
			}
		}
	}
}
</style>