<template>
  
  <swiper 
  :slidesPerView="1" 
  :spaceBetween="10" 
  :navigation="true" 
  :breakpoints="{
    '640': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '768': {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '995': {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    '1200': {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }" :modules="modules"
  class="mySwiper container my-5">

    <swiper-slide v-for="project in projects">
      <Card 
        :title = project.title
        :logo = project.logo
        :linkRepo = project.linkRepo
        :linkView = project.linkView
        :description = project.description
         />
    </swiper-slide>

  </swiper>

</template>
<script>

import Card from "@/components/Card.vue";
import projects from "../projectsData.js"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
  data: function () {
    return {
      projects: projects
    }
  },

  components: {
    Swiper,
    SwiperSlide,
    Card
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {

  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

