<template>
  <container>
    <row class="home">
      <column class="border-right">
        <Item title="Mobile Responsive Web App" icon="mobile-alt" />
      </column>
      <column>
        <Item title="DEA System" icon="server" />
      </column>
    </row>
    <row class="pt-5">
      <column class="pt-5 text-left">
        <container class="border grey">
          <font size="3">Action Items</font>
        </container>
      </column>
      <column class="pt-5 text-left">
        <container class="border grey">
          <font>Action Items</font>
        </container>
        <container class="border" v-for="(item, index) in deaList" :key="index">
          <row>
            <column>
              <font>{{ item.name }}</font>
            </column>
            <column class="text-right">
              <mdb-btn
                size="sm"
                class="text-right"
                color="default"
                @click.native="deleteDeaActionItem(item.id)"
                >delete</mdb-btn
              >
            </column>
          </row>
        </container>
        <mdb-input id="deaAddMobileActionItem" label="add item"></mdb-input>
        <mdb-btn
          @click.native="deaAddMobileActionItem"
          tag="a"
          gradient="blue"
          floating
          size="sm"
          class="float-right"
          ><mdb-icon icon="plus"
        /></mdb-btn>
      </column>
    </row>
  </container>
</template>

<script>
// @ is an alias to /src
import { Row, Column, Container, mdbBtn, mdbIcon, mdbInput } from "mdbvue";
import Item from "@/components/Item.vue";
import fb from "@/fbconfig.js";
// import firebase from "firebase";
// require("firebase/firestore");

export default {
  name: "home",
  components: {
    Item,
    Row,
    Column,
    Container,
    mdbBtn,
    mdbInput,
    mdbIcon
  },
  data() {
    return {
      mobileActionItems: ["Architecture/Design Discussion", "User Profile"],
      deaActionItems: ["Architecture/Design Discussion", "Blockchain and SCADA"]
    };
  },
  mounted() {
    this.$store.dispatch("deaTasksAction");
  },
  computed: {
    deaList: function() {
      return this.$store.getters.deaList;
    }
  },
  methods: {
    deaAddMobileActionItem() {
      let item = document.getElementById("deaAddMobileActionItem").value;
      let index = this.$store.getters.deaList.length + 1;
      // this.mobileActionItems.push(item);
      let db = fb.db;
      db.collection("deaList")
        .add({ name: item, display: true, index: index })
        .then(function() {
          console.log("Document Successfully written to DEA List!");
        });
        document.getElementById("deaAddMobileActionItem").value = "";
    },
    deleteDeaActionItem(id) {
      let db = fb.db;
      db.collection("deaList")
        .doc(id)
        .delete()
        .then(() => {
          console.log("deleted ish ");
        });
    }
  }
};
</script>
