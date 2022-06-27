<template>
  <div class="file-wrapper">
    <img :src="require('@/assets/CamilleHughesResume_2022.png')" class="file" />
  </div>
</template>

<style>
.file-wrapper {
  border: 1px solid var(--color-accent-medium-light);
  box-shadow: 10px 12px 1px 1px rgba(0, 0, 0, 0.15);
  width: 90%;
  margin: 10rem auto;
  overflow: scroll;
}

.file {
  width: 100%;
}

/* 1000px and up */
@media (min-width: 62.5em) {
  .file-wrapper {
    width: 70%;
  }
}
</style>
