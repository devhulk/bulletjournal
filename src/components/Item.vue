<template>
  <mdb-container class="user">
    <column>
      <mdb-icon :icon="icon" size="5x" />
      <mdb-container class="pt-3">{{ title }}</mdb-container>
    </column>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbIcon, Column } from "mdbvue";
export default {
  name: "Item",
  props: ["title", "icon"],
  components: {
    mdbContainer,
    mdbIcon,
    Column
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
