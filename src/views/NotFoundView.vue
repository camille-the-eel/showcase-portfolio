<template>
  <div class="content-container">
    <h1>Page not found</h1>
    <h3>
      Please return
      <RouterLink to="/"> home.</RouterLink>
    </h3>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.content-container {
  max-width: 90%;
  margin: 10rem auto;
}

a {
  font-weight: 800;
}
</style>
