<script setup>
import { RouterLink } from "vue-router";
import HeroHeader from "@/components/HeroSection/HeroHeader.vue";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
import AccentRules from "@/components/AccentElements/AccentRules.vue";
</script>

<template>
  <div class="hero-container">
    <h1 class="hero-title">
      CAMILLE HUGHES IS A JAVASCRIPT DEVELOPER & GRAPHIC DESIGNER
    </h1>
    <div class="hero-desktop-rule"></div>
    <div class="hero-header-container">
      <AccentRules class="right-align" id="homepage-tablet-accent" />
      <div class="hero-header-wrapper main-item-0">
        <RouterLink to="/development">
          <HeroHeader
            class="dark"
            sub-header="JAVASCRIPT, VUE, HTML, CSS, APIs"
            main-header-line1="WEB"
            main-header-line2="DEVELOPMENT"
          />
        </RouterLink>
      </div>
      <div class="hero-header-wrapper main-item-1">
        <RouterLink to="/design">
          <HeroHeader
            class="light"
            sub-header="LAYOUTS, LOGOS, STAMPS"
            main-header-line1="GRAPHIC"
            main-header-line2="DESIGN"
          />
        </RouterLink>
      </div>
      <AccentCircle class="hero-accent" />
    </div>
  </div>
</template>

<style scoped>
.hero-accent {
  display: none;
}

#homepage-tablet-accent {
  display: none;
  margin-left: 40px;
}

.hero-title {
  max-width: 40rem;
  font-weight: 300;
  margin-bottom: 7rem;
  margin-left: 6vw;
  margin-top: 5vh;
  margin-right: 4rem;
}

.hero-header-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr;
  grid-template-rows: repeat(2, min-content);
  gap: 3rem 1rem;
  margin-bottom: 10vh;
  overflow: hidden;
}

.hero-header-wrapper {
  grid-column: 1 / -1;
}

@media (min-width: 31em) and (max-width: 48.9999999em) {
  .hero-accent {
    display: block;
  }

  #homepage-tablet-accent {
    display: grid;
    place-self: end;
    margin-bottom: 1em;
  }

  .hero-header-container {
    grid-template-columns: 1.25fr 3fr 1.75fr;
  }

  .main-item-0 {
    grid-column: 2 / -1;
  }

  .main-item-1 {
    grid-column: 1 / -2;
  }
}

@media (min-width: 49em) {
  .hero-header-container {
    grid-template-columns: 2fr 3.125em 3fr;
    grid-template-rows: 1.5fr 1fr 1.75fr;
    gap: 1.8em 0.6em;
    margin-bottom: 10vh;
  }

  .main-item-0 {
    grid-column: 3 / -1;
    grid-row: 1 / -2;
  }

  .main-item-1 {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
  }
}

/* ------------------------------ */
/* Home Page Rule Accent – Desktop Only  */
/* --------------------------- */
@media (min-width: 49em) {
  .hero-header-container {
    position: relative;
  }
  .hero-desktop-rule {
    position: absolute;
    left: 10vw;
    top: 9em;
    height: 20em;
    width: 0.09em;
    background: repeating-linear-gradient(
      to top,
      var(--color-accent-medium) 0,
      var(--color-accent-medium) 0.625em,
      transparent 0.75em,
      transparent 1.25em
    );
  }
}
</style>
