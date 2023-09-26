<script setup>
import { ElCarousel, ElCarouselItem } from 'element-plus';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';
import img4 from './imgs/4.jpg';


const list = [img1,img2,img3, img4]
</script>

<template>
  <div class="preview-wrapper">
    <ElCarousel  height="330px" :interval="6000">
      <ElCarouselItem v-for="i of list">
        <picture class="preview-img-wrapper">
          <img :src="i" />
        </picture>
      </ElCarouselItem>
    </ElCarousel>
  </div>
</template>

<style scoped>
.preview-wrapper {
  width: 80%;
  margin: 20px auto 60px ;
  max-width: 1152px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px  rgba(0, 0, 0, 0.056);
}

.preview-img-wrapper{
  display: block;
}

.preview-img-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>
