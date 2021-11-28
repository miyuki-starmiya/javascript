<template>
  <div class="sample">
    <h1>This is Aikatsu fan site!</h1>
    <ul>
      <li v-for="mc in mcList" v-bind:key="mc.id">
        {{ mc }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      mcList: ["Ichigo Hoshimiya", "Akari Oozora", "Yume Nijino"],
  }},
  props: {
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
ul {
  max-width: 30%;
  margin: 0 auto;
}
li {
  padding: 5px;
}

</style>
