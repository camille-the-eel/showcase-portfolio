<template>
  <div class="project-img-container">
    <a :href="project.websiteURL" class="project-img-link">
      <img :src="project.filePath" class="project-img" />
    </a>
    <div class="project-item-1"></div>
    <div class="project-item-2"></div>
    <div class="project-item-3"></div>
    <AccentCircle v-if="project.id % 2 != 0" class="dev-circle-accent" />
  </div>
  <div class="project-caption-container">
    <div class="project-dashed-line"></div>
    <h6 class="project-h6">{{ projectTags }}</h6>
    <h1 class="project-h1">{{ project.title }}</h1>
    <p class="project-p">{{ project.description }}</p>
    <p class="project-year">{{ project.dateYear }}</p>
    <a :href="project.githubURL" class="project-link"
      ><ArrowCircleRightIcon class="project-icon" />click here to read my code
      on Github</a
    >
  </div>
</template>

<script>
import { ArrowCircleRightIcon } from "@heroicons/vue/solid";
import AccentCircle from "../AccentElements/AccentCircle.vue";

export default {
  name: "DevPageContentBlock",
  components: {
    ArrowCircleRightIcon,
    AccentCircle,
  },
  props: {
    project: Object,
  },
  computed: {
    projectTags() {
      return this.project.tags.join(", ");
    },
  },
};
</script>

<style scoped>
.project-img-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.project-img-link {
  height: fit-content;
}

.project-img {
  display: block;
  width: 100%;
  border: 0.1rem solid var(--color-accent-dark);
}

.project-item-1 {
  height: 1.5rem;
  background-color: var(--color-accent-light);
}

.project-caption-container {
  margin: 4rem 12vw 10rem 20vw;
}

.project-h6 {
  margin-bottom: 0.5rem;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
}

.project-h1 {
  font-weight: 700;
  font-style: normal;
  margin-bottom: 1.3rem;
}

.project-dashed-line {
  margin-bottom: 1.3rem;
}

.project-p {
  font-weight: 300;
  margin-bottom: 0.6rem;
}

.project-year {
  /* font-weight: 800; */
  font-size: 14px;
  margin-bottom: 2.3rem;
}

.project-link {
  display: grid;
  grid-template-columns: 2rem auto;
  /* gap: 0.4rem; */
  font-weight: 700;
  font-style: normal;
}

.project-icon {
  display: inline;
  width: 1.5rem;
  margin-top: 0.6rem;
}

/* px */
@media (min-width: 30em) and (max-width: 51.55em) {
  .project-img-container {
    width: 80vw;
    margin: 0 auto;
  }
}

/* 825px */
@media (min-width: 51.56em) {
  /* important! resets width of container to default */
  .project-img-container {
    width: auto;
  }

  .project-item-1,
  .project-item-2,
  .project-item-3 {
    height: 1.5rem;
    background-color: #fff;
    border-bottom: 0.1em solid var(--color-accent-dark);
  }

  .project-dashed-line {
    z-index: -1;
    height: 0.1rem;
    width: 70rem;
    background: repeating-linear-gradient(
      to right,
      var(--color-accent-medium) 0,
      var(--color-accent-medium) 0.75rem,
      transparent 0.75rem,
      transparent 1.5rem
    );
  }
}
</style>
