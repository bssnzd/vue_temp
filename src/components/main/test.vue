<template>
  <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <router-link :to="item">{{item.substr(6,1).toUpperCase()+item.substr(7)}}</router-link>
        </li>
      </ul>
      <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      list: ['/test/test1', '/test/test2']
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
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
