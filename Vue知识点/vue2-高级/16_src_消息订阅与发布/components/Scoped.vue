<template>
  <div class="scop">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>{{ StudentName }}</h2>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyScoped',
    props:['getSchoolName'],
    data(){
        return {
            name:'安鑫',
            address:'陕西西安',
            StudentName:''
        }
    },
    methods:{
      demo(msgName,data){
        console.log('消息订阅收到了',data);

      }
    },
    mounted() {
      // console.log('学校',this)
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是学校 我收到了',data);
      //   this.StudentName =data
      //   console.log(this.StudentName);
      // })

      // this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
      //   console.log('有人发布了hello消息','hello消息的回调执行了',msgName,data);
      // })
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    // 在组件销毁之前 将hello这个自定义事件销毁
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    },
 

}
</script>


<style scoped>
.scop{
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}

</style>