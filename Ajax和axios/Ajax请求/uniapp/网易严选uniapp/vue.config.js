// 接口跨域配置
module.exports = {
	derServer:{
		Proxy:{
			'api':{
				target:'http://localhost:7788',
				wa:true,
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}