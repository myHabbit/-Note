// 封装的网络请求方法

export default function({
	url,
	method='get',
	data})
	{
	return new Promise((resolve,reject)=>{
		// 交互动画
		uni.showLoading({
			title: '数据加载中'
		});
		uni.request({
				url:url,
				method,
				data,
				success:res=>{
					if(res.data.status === 200){
						uni.showToast({
							title:'数据加载完毕'
						})
					}
					resolve(res.data)
				},
				fail:error=>{
					// 信息提示--请求失败
					reject(error)
				},
				complete(){
					// 不管成功还是失败都执行
					uni.hideLoading()
				}
			})
	})
	
}