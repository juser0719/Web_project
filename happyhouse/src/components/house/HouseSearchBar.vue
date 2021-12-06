<template>
  <div>
    <b-row class="mt-4 mb-4 text-center">
      <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->

      <b-col class="sm-4">
        <b-form-input type="month" v-model="yearMonth"></b-form-input>
      </b-col>
      <b-col class="sm-4">
        <b-form-select
          v-model="sidoCode"
          :options="sidos"
          @change="gugunList"
        ></b-form-select>
      </b-col>
      <b-col class="sm-4">
        <b-form-select
          v-model="gugunCode"
          :options="guguns"
          @change="dongList"
        ></b-form-select>
      </b-col>
      <b-col class="sm-4">
        <b-form-select v-model="dongCode" :options="dongs"></b-form-select>
      </b-col>
      <b-button @click="callAPI"> 검색 </b-button>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      yearMonth: null,

      requestdto: {
        pageNo: "1",
        numOfRows: "10",
        lawdcd: "11110",
        dealymd: null,
        sidoName: "서울특별시",
        gugunName: "종로구",
      },
    };
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
    //mapState는 computed에 선언, state(data)와연결되어 값이 바뀌면 반응함
    //mapgetters 도 여기에 선언함
  },

  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_GUGUN_LIST();
    this.CLEAR_DONG_LIST();
    this.CLEAR_HOUSE_LIST();
    this.getSido();
    this.yearMonth = new Date().toISOString().slice(0, 7);
  },
  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
      "getDealList",
    ]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_HOUSE_LIST",
    ]), //action필요없이 바로 state에접근할때 사용하는애들

    gugunList() {
      this.CLEAR_HOUSE_LIST();
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      this.CLEAR_HOUSE_LIST();
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },
    searchApt() {
      this.CLEAR_HOUSE_LIST();
      if (this.dongCode) this.getHouseList(this.dongCode); // ->houses -> 마커를찍고싶다
    },
    sendKeyword() {},

    //////api호출
    async callAPI() {
      for (var i = 0; i < this.sidos.length; i++) {
        if (this.sidoCode === this.sidos[i].value) {
          this.requestdto.sidoName = this.sidos[i].text;
        }
      }
      for (var j = 0; j < this.guguns.length; j++) {
        if (this.gugunCode === this.guguns[j].value) {
          this.requestdto.gugunName = this.guguns[j].text;
        }
      }
      this.requestdto.lawdcd = this.gugunCode;
      this.requestdto.dealymd = this.yearMonth.split("-").join("");
      console.log(this.requestdto);
      await this.getDealList(this.requestdto);
    },
  },
};
</script>
<style></style>
