<script setup lang="ts">
import { ref, onMounted } from 'vue'
import imageListData from '@/assets/imageList.json'

const imageList = ref<string[]>([])

onMounted(() => {
  imageList.value = imageListData
})

const getFileName = (path: string) => {
  return path.replace('/imgs/', '')
}
</script>

<template>
  <div class="image-container">
    <div v-for="image in imageList" :key="image" class="image-wrapper">
      <img :src="image" alt="Image" />
      <p class="image-filename">{{ getFileName(image) }}</p>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.image-wrapper {
  flex: 1 1 200px;
  max-width: 200px;
  overflow: hidden;
  text-align: center;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

.image-filename {
  margin-top: 5px;
  font-size: 14px;
  color: #333;
}
</style>
