<script setup lang="ts">
import { ref, onMounted } from 'vue'
import imageListData from '@/assets/imageList.json'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

const imageList = ref<{ id: string; src: string; name: string }[]>([])

/**
 * 获取随机ID
 * @param {*} length
 * @returns
 */
function randomID(length = 6) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}

onMounted(() => {
  imageList.value = imageListData.map((imagePath: string) => ({
    id: randomID(),
    src: imagePath,
    name: imagePath.split('/').pop() || ''
  }))
})
</script>

<template>
  <h1>ClassIsland Hub</h1>
  <Waterfall :list="imageList" :width="320" :gutter="16">
    <template #default="{ item }">
      <div class="image-wrapper">
        <LazyImg :url="item" alt="Image" />
        <p class="image-filename">{{ item.name }}</p>
      </div>
    </template>
  </Waterfall>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.image-wrapper {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.image-filename {
  padding: 8px;
  text-align: center;
  font-size: 16px;
  color: #333;
}
</style>
