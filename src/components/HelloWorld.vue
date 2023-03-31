<template>
  <div class="hello">
    <!--    <div v-for="(item,index) in passData" :key="index">-->
    <!--      <input type="text" v-model="item.name">-->
    <!--    </div>-->
    <!--    <Editor :content="item.value" @changeData="((val)=>{ changeDataFun(val,item)}) "></Editor>-->

    <!--    <button @click="clickFun">点击2</button>-->
    <!--    {{ obj }}-->
    <input type="file" id="file" />
    <img src="" id="imgPreview">
    {{ obj.value }}
  </div>


</template>

<script>
// import Editor from "@/components/editor";

export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [
        {name: 'lihao', value: '1111'},
        {name: 'lihao2', value: '222'},
        {name: 'lihao3', value: '333'},
        {name: 'lihao4', value: '444'},
      ],
      active: 0,
    }
  },
  props: {
    msg: String,
    passData: Array,
    obj: Object,
  },
  watch: {
    obj: {
      handler: function () {
        console.log('inin-watch')
      },
    },
  },
  mounted() {
    document.querySelector('#file').addEventListener('change', (fileChoosed) => {
      const reader = new FileReader();
      console.log(fileChoosed.target.files[0])
      reader.readAsDataURL(fileChoosed.target.files[0]);//发起异步请求
      reader.onload = function (readRes) {
        console.log('加载完成', readRes.target.result)
      }
    })
  },
  components: {},
  methods: {
    changeNum(num) {
      this.active = num
    },
    clickFun() {
      this.$emit('objFun', '07')
    },
    changeDataFun(val, item) {
      item.value = val;
    }
  }
}
</script>
<style scoped>

</style>

