<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
    <h3>my favorite num is {{ num }}</h3>
    <div v-for="f in sampleList" v-bind:key="f.id" >
      <p v-if="f === 6">mutsu: {{ f }}</p>
      <p v-else-if="f === 7">lucky num: {{ f }}</p>
      <p v-else>other: {{ f }}</p>
    </div>
    <p v-if="myWife === 'mutsumi'">correct!</p>
    <p v-else>incorrect...</p>
    <p>now count: {{ counter }}</p>
    <button v-on:click="incr">incr</button>
    <br />
    <input type="text" v-model="input" />
    <p>User input: {{ input }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      sampleList: [9, 8, 7],
      myWife: "mutsumi",
      counter: 0,
      input: "",
  }},
  props: {
    msg: String,
    num: Number,
  },
  methods: {
    incr() {
      this.counter ++;
      console.log(this.counter);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
