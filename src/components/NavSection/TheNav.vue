<script setup>
import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { MenuIcon } from "@heroicons/vue/solid";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
</script>

<template>
  <AccentCircle
    :class="['navAccent', toggleMobileMenu ? 'mobile-toggle-accent' : '']"
  />
  <header>
    <nav>
      <RouterLink to="/" class="circle"><span>H</span></RouterLink>
      <MenuIcon class="mobile-menu-icon" @click="viewMobileMenu()" />
      <div
        :class="[
          'nav-link-container',
          toggleMobileMenu ? '' : 'mobile-toggle-container',
        ]"
      >
        <RouterLink to="/" class="nav-item mobile-nav-home" @click="hideMenu()"
          >HOME</RouterLink
        >
        <ul class="dropdown-container" @click="toggleDropdown()">
          <li class="nav-work">
            WORK<ChevronDownIcon class="dropdown-icon" />
            <ul
              :class="['dropdown-menu', toggleDropdownMenu ? 'show' : 'hide']"
            >
              <li>
                <RouterLink
                  to="/development"
                  class="nav-item dropdown-item"
                  @click="hideMenu()"
                  >Development
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/design"
                  class="nav-item dropdown-item"
                  @click="hideMenu()"
                >
                  Design
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <RouterLink to="/about" class="nav-item nav-about" @click="hideMenu()"
          >ABOUT
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNav",
  components: {
    AccentCircle,
    RouterLink,
    ChevronDownIcon,
    MenuIcon,
  },
  data() {
    return {
      toggleMobileMenu: false,
      toggleDropdownMenu: false,
    };
  },
  methods: {
    viewMobileMenu() {
      this.toggleMobileMenu = true;
    },
    hideMenu() {
      this.toggleMobileMenu = false;
    },
    toggleDropdown() {
      this.toggleDropdownMenu = !this.toggleDropdownMenu;
    },
  },
};
</script>

<style scoped>
@import "../NavSection/nav.css";
</style>
