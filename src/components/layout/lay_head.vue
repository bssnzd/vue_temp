<template>
  <div>
    <h1>Vue Header</h1>
    <ul>
        <li v-for="(item,index) in list" :key="index">
          <router-link :to="item">{{item.substr(1)}}</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['/info', '/news', '/test']
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
