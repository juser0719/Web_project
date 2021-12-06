<template>
  <div>
    <b-row>
      <b-container id="map" style="width: 100%; height: 500px"></b-container>
    </b-row>
    <b-container v-if="houses" class="bv-example-row mt-3">
      <house-list-row
        v-for="(house, index) in houses"
        :key="index"
        :house="house"
      />
    </b-container>
    <b-container v-else class="bv-example-row mt-3">
      <b-row>
        <b-col><b-alert show>아파트 목록이 없습니다.</b-alert></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HouseListRow from "@/components/house/HouseListRow.vue";
import { mapState, mapGetters } from "vuex";

const houseStore = "houseStore";
export default {
  name: "HouseList",
  components: {
    HouseListRow,
  },
  data() {
    return {
      map: null,
      markers: [],
      geocoder: null,
      infowindow: null,
    };
  },
  computed: {
    ...mapGetters(houseStore, ["houseInfo"]),
    ...mapState(houseStore, ["houses"]),
  },
  updated() {
    console.log("make start");
    // 지도에 표시되고 있는 마커를 제거합니다
    if (this.infowindow !== null) this.infowindow.close();
    this.displayMarker(this.houseInfo);

    console.log("make end");
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6990eed65ef1b708187bd62ce4f1afe6&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5607074663453, 127.000060665185),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.geocoder = new kakao.maps.services.Geocoder();
    },
    displayMarker(places) {
      //var fragment = document.createDocumentFragment();
      // var bounds = new kakao.maps.LatLngBounds();
      console.log("places 길이 : " + places.length);
      for (let i = 0; i < places.length; i++) {
        // console.log("places positions : " + placePosition);
        ////////////////////////////////////////////////////////////////////////////////////////
        let addr =
          places[i].sidoName +
          " " +
          places[i].roadName +
          " " +
          parseInt(places[i].buildingCode);

        let callback = (result, status) => {
          // 정상적으로 검색이 완료됐으면
          let place = places[i];
          if (status === kakao.maps.services.Status.OK) {
            let position = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(place);
            // bounds.extend(position);
            let marker = new kakao.maps.Marker({
              map: this.map,
              position: position,
            });
            console.log(i);
            this.infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;">${result[0].road_address.building_name}</div>
            <div style="width:150px;text-align:center;">${result[0].address_name}</div>`,
            });
            this.infowindow.open(this.map, marker);
          }
        };
        // console.log(callback);
        // var res = this.geocoder.addressSearch(addr, callback);
        // console.log("@@@");
        this.geocoder.addressSearch(addr, callback);
        // console.log(bounds);
        // this.map.setBounds(bounds);
      }
    },
    // AddMarker(position, idx) {
    //   console.log(idx);
    //   var imageSrc =
    //       "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
    //     imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
    //     imgOptions = {
    //       spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    //       spriteOrigin: new kakao.maps.Point(0, 1 * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    //       offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    //     },
    //     markerImage = new kakao.maps.MarkerImage(
    //       imageSrc,
    //       imageSize,
    //       imgOptions
    //     ),
    //     marker = new kakao.maps.Marker({
    //       position: position, // 마커의 위치
    //       image: markerImage,
    //     });

    //   marker.setMap(this.map); // 지도 위에 마커를 표출합니다
    //   // this.markers.push(marker); // 배열에 생성된 마커를 추가합니다
    //   // console.log(this.markers);
    // },
    removeMarker() {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
  },
};
</script>

<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
