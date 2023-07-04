import  {createStore} from 'vuex'

// 导入模块
import menu from '@/store/modules/menu.js'

export const store = createStore({
	state:{
		bannerList:[]
	},
	mutations:{
		
	},
	actions:{
		
	},
	getters:{
		
	},
	modules:{
		menu
	}
})