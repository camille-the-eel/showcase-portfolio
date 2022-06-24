<template>
  <div
    :key="devProjects.id"
    v-for="project in devProjects"
    class="project-container"
  >
    <DevProject :project="project" />
    <AccentRules
      v-if="project.id % 2 === 0"
      class="dev-rule-accent bottom-align"
    />
  </div>
</template>

<script>
import DevProject from "@/components/DevSection/DevProject.vue";
import AccentCircle from "../AccentElements/AccentCircle.vue";
import AccentRules from "../AccentElements/AccentRules.vue";

export default {
  name: "DevProjectContainer",
  components: {
    DevProject,
    AccentCircle,
    AccentRules,
  },
  props: {
    devProjects: Array,
  },
};
</script>

<style>
.dev-circle-accent,
.dev-rule-accent {
  display: none;
}

/* 825px and up */
@media (min-width: 51.56em) {
  .project-container {
    display: grid;
    gap: 4em;
    margin-bottom: 8em;
  }

  /* LEFT | ZIG */
  /* ---------------------------- */
  .project-container:nth-child(odd) {
    grid-template-columns: 1fr 0.65fr;
  }

  .project-container:nth-child(odd) .project-caption-container {
    width: 275px;
    margin: 1.5em 0 0 0;
    justify-self: start;
    align-self: start;
  }

  .project-container:nth-child(odd) .project-img-container {
    justify-self: center;
    align-self: start;
  }

  .project-container:nth-child(odd) .project-item-3 {
    border-bottom: 0.175em solid var(--color-accent-dark);
  }

  .project-container:nth-child(odd) .project-dashed-line {
    transform: translate(-103%, 22px);
  }

  /* RIGHT | ZAG  */
  /* ---------------------------- */
  .project-container:nth-child(even) {
    grid-template-columns: 0.65fr 1fr;
  }

  .project-container:nth-child(even) .project-item-1 {
    border-bottom: 0.175em solid var(--color-accent-dark);
  }

  .project-container:nth-child(even) .project-caption-container {
    width: 275px;
    margin: 1em 0 0 8vw;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: start;
  }

  .project-container:nth-child(even) .project-img-container {
    grid-column: 2;
    justify-self: end;
    align-self: start;
  }

  .project-container:nth-child(even) .project-h6 {
    margin-right: 0.5rem;
    background-color: #fff;
  }

  .project-container:nth-child(even) .project-dashed-line {
    transform: translate(0%, 22px);
  }
}

/* 950px and up */
@media (min-width: 59.375em) {
  .project-container {
    gap: 5em;
    margin-bottom: 10em;
  }

  .project-container:nth-child(odd) .project-caption-container {
    width: 300px;
  }

  .project-container:nth-child(even) .project-caption-container {
    width: 300px;
  }

  /* ACCENT ELEMENTS */
  /* ---------------------------- */
  .dev-circle-accent,
  .dev-rule-accent {
    display: block;
    z-index: -1;
  }

  /* LEFT | ZIG */
  /* (circle accents - alternating) */
  /* jsx in DevProject */
  /* ---------------------------- */
  .project-container:nth-child(1) .dev-circle-accent {
    position: absolute;
    bottom: -3.5em;
    right: -3.5em;
  }

  .project-container:nth-child(4n + 3) .dev-circle-accent {
    position: absolute;
    top: -3.5em;
    left: -1.5em;
  }

  .project-container:nth-child(4n + 5) .dev-circle-accent {
    position: absolute;
    top: -3.5em;
    right: -3em;
  }

  .project-container:nth-child(4n + 5) .project-dashed-line {
    display: none;
  }

  /* RIGHT | ZAG  */
  /* (ruled accents) */
  /* ---------------------------- */
  .dev-rule-accent {
    position: absolute;
    right: 1em;
    top: -9em;
  }
}

/* 1200px and up */
@media (min-width: 81.25em) {
  .project-container {
    gap: 7em;
    margin-bottom: 10em;
  }

  .project-container:nth-child(odd) .project-caption-container {
    width: 360px;
    margin: 1.5em 0 0 3vw;
  }

  .project-container:nth-child(even) .project-caption-container {
    width: 360px;
    margin: 1em 4vw 0 8vw;
  }
}
</style>
