<template>
  <div id="app">
    <!--    <div id="pdfDom">-->
    <!--      <h5>-->
    <!--        要下载的HTML页面-->
    <!--      </h5>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;    <button @click="getPdf('#pdfDom')">点击下载</button>&ndash;&gt;-->
    <!--    <div>-->
    <!--      <div v-for="(item,index) in fillArr" :key="index">-->
    <!--        {{ item.methods }}-->
    <!--      </div>-->
    <div v-for="(item,index) in list" :key="index">
      <span @click="changeNum(index)"> {{ item.name }}</span>
    </div>

    <div v-for="(item,index) in list" :key="index+'s'" class="content">
      <div class="item" v-show="active == index">
        <HelloWorld :obj="item" @objFun="clickFun"></HelloWorld>
      </div>
    </div>

    <iframe id="pdf" width="100%" height="800px" src="/web/viewer.html?file=/test222.pdf"></iframe>

    <!--    </div>-->

    测试git
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  data() {
    return {
      htmlTitle: '页面导出PDF文件名',
      data: [
        {name: 'nihao', age: 18},
        {name: 'nihao', age: 18},
        {name: 'nihao2', age: 18},
        {name: 'nihao3', age: 182},
        {name: 'nihao4', age: 181},
      ],
      common: [
        {name: 'nihao', age: 18},
        {name: 'nihao', age: 108},
      ],
      list: [
        {name: 'lihao', value: '1111'},
        {name: 'lihao2', value: '222'},
        {name: 'lihao3', value: '333'},
        {name: 'lihao4', value: '444'},
      ],
      passData: [],
      fillArr: [
        {methods: '01', format: '03', fieldId: 5},
        // {methods: '01', format: '02', fieldId: 3},
        // {methods: '01', format: '03', fieldId: 6},
        // {methods: '01', format: '01', fieldId: 1},
        // {methods: '01', format: '01', fieldId: 2},
        // {methods: '01', format: '02', fieldId: 4},
        // {methods: '04', format: '01', fieldId: 7, fdSort: 3},
        // {methods: '04', format: '01', fieldId: 7, fdSort: 1},
        // {methods: '04', format: '01', fieldId: 7, fdSort: 5},
        // {methods: '04', format: '01', fieldId: 7, fdSort: 2},
        // {methods: '04', format: '01', fieldId: 7, fdSort: 4},
        // {methods: '01', format: '03', fieldId: 8},
        // {methods: '01', format: '03', fieldId: 9},
        // {methods: '01', format: '03', fieldId: 10},
        // {methods: '01', format: '03', fieldId: 12},
        {methods: '01', format: '03', fieldId: 11},
        {methods: '07', format: '03', fieldId: 11},

      ],
      passObj: '',
      firstObj: '',
      clickObj: '',
      active: 0,
    }
  },
  // watch: {
  //   obj: {
  //     handler: function () {
  //       console.log('inin-watch')
  //     },
  //     deep: true,
  //   },
  // },
  computed: {
    pass() {
      let obj = this.passObj || this.clickObj || this.firstObj;
      return obj
    },
  },
  components: {HelloWorld},
  created() {
    this.passData = this.data.filter(item => this.common.some(val => item.name == val.name))
    this.firstObj = this.fillArr[2];
    const obj ={
      a:'a',
      b:['1',12,{c:'1'},['4']],
      c:{
        k:'15',
        d:['10'],
      }
    }
    let map = new Map(Object.entries(obj));
    console.log(map.get('b')[2].c,'maps')

  },
  methods: {
    changeNum(num) {
      this.active = num
    },
    clickFun(id) {
      this.passObj = id
      this.passObj = {methods: '07', format: '03', fieldId: 11};
    },
    sortFun() {
      this.fillArr.sort((a, b) => {
        if (a.methods == '04' && b.methods == '04' && (a.fieldId == b.fieldId)) {
          console.log(a, 'a--in')
          console.log(b, 'b--in')
          console.log('one--filter')
          return a.fdSort - b.fdSort;
        }
      })
      this.fillArr.forEach(item => {
        console.log(item, 'item-----------------')
      })
      console.log(this.fillArr, 'fillarr')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h5 {
  width: 400px;
  height: 400px;
  background: red;
}

.item {
  width: 400px;
  height: 400px;
  background: red;
}
</style>
