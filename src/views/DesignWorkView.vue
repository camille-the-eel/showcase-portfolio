<template>
  <div class="design-page-head">
    <PageHeader page-category="GRAPHIC DESIGN" page-title="WORK" />
  </div>
  <div class="design-page-content">
    <p class="mobile-click-notice">Tap for more details.</p>
    <DesignWorkContainer />
    <AccentRules class="top-align" id="design-view-accent" />
  </div>
  <TheResume />
</template>

<script>
// COMPONENTS
import PageHeader from "@/components/PageHeader.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
import AccentRules from "@/components/AccentElements/AccentRules.vue";
import DesignWorkContainer from "@/components/DesignSection/DesignWorkContainer.vue";

export default {
  name: "DesignView",
  components: {
    PageHeader,
    TheResume,
    AccentRules,
    DesignWorkContainer,
  },
};
</script>

<style scoped>
.design-page-head {
  margin-top: 1rem;
  margin-bottom: 4rem;
}

.design-page-content {
  max-width: 80%;
  margin: 0 auto 2rem auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 2rem;
}

#design-view-accent {
  display: none;
}

/* 475px and up */
@media (min-width: 29.69em) {
  .mobile-click-notice {
    display: none;
  }

  .design-page-content {
    max-width: 90%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  #design-view-accent {
    display: grid;
  }
}

/* 650px and up */
@media (min-width: 40.625em) {
  .mobile-click-notice {
    display: none;
  }
}

/* 850px and up */
@media (min-width: 53.125em) {
  .design-page-content {
    max-width: 75%;
    /* max-width: 100%;
    grid-template-columns: repeat(3, auto); 
    gap: 2em;
    */
    gap: 1em;
  }
}
</style>
