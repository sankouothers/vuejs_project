<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
        </el-menu-item>
        <el-menu-item index="2">
          <el-select v-model="value5" multiple placeholder="排序">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-menu-item>
        <el-menu-item index="3">
          <el-input placeholder="请输入搜索条件" prefix-icon="el-icon-search" v-model="input"/>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-table :data="commodityList" stripe style="width: 100%">
        <el-table-column prop="id" label="日期" width="180"/>
        <el-table-column prop="name" label="姓名" width="180"/>
        <el-table-column prop="price" label="地址"/>
      </el-table>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>
<script>
  import {mapActions, mapGetters, mapState} from 'vuex';
  import store from "../vuex/store";

  export default {
    name: 'mall',
    data() {
      return {
        msg: 'mall',
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        commodityList: null,
        value5: [],
        activeIndex: '1',
        input: ''
      }
    },
    computed: {
      ...mapState({
        commodityList:state => state.commodity
      })
    },
    mounted() {
      this.loadCommodityList();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      ...mapActions({
        loadCommodityList: 'loadCommodityList'
      }),

    }
  }
</script>
<style scoped>

</style>
