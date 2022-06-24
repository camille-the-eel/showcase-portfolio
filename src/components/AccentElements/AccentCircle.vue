<template>
  <div :class="(useCase, 'circle-position-container')">
    <div class="circle-bounding-box">
      <div class="circle-flex-container">
        <div class="circle-outmost rotate-inner"></div>
        <div class="circle-outer rotate-outer"></div>
        <div class="circle-inner rotate-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccentCircle",
  props: {
    useCase: String,
  },
};
</script>

<style scoped>
/* NAV USE CASE CSS */
@import "../NavSection/navAccentCircle.css";

/* HERO USE CASE CSS */
.hero-accent .circle-bounding-box {
  position: relative;
  transform: translate(60%, -7%);
}

/* GENERAL CSS */
.circle-position-container {
  position: relative;
  z-index: -100;
}

.circle-bounding-box {
  overflow: hidden;
}

.circle-flex-container {
  display: grid;
  grid-template-areas: "box";
  place-items: center;
}

.circle-inner,
.circle-outer,
.circle-outmost {
  border-radius: 50%;
  grid-area: box;
  aspect-ratio: 1 / 1;
}

.circle-inner {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 14rem;
}

.circle-outer {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 16rem;
}

.circle-outmost {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 18rem;
}

.rotate-inner {
  animation: rotation-forward 30s linear infinite;
}

.rotate-outer {
  animation: rotation-backward 60s linear infinite;
}

/* DEV VIEW USE CASE */
/* ----------------------- */
.dev-circle-accent .circle-inner {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23d8d8d8' stroke-width='3' stroke-dasharray='3%25%2c 10%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 12rem;
}

.dev-circle-accent .circle-outer {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23d8d8d8' stroke-width='3' stroke-dasharray='3%25%2c 10%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 15rem;
}

.dev-circle-accent .circle-outmost {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23d8d8d8' stroke-width='3' stroke-dasharray='3%25%2c 10%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 18rem;
}

.dev-circle-accent .rotate-inner,
.dev-circle-accent .rotate-outer {
  animation: none;
}
</style>
