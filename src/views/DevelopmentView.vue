<template>
  <div class="dev-page-head">
    <PageHeader page-category="WEB DEVELOPMENT" page-title="PROJECTS" />
  </div>
  <div class="dev-page-content">
    <DevProjectContainer :dev-projects="devProjects" />
  </div>
  <TheResume />
</template>

<script>
// COMPONENTS
import PageHeader from "@/components/PageHeader.vue";
import DevProject from "@/components/DevSection/DevProject.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
import DevProjectContainer from "@/components/DevSection/DevProjectContainer.vue";

export default {
  name: "DevelopmentView",
  components: {
    PageHeader,
    DevProjectContainer,
    DevProject,
    TheResume,
  },
  data() {
    return {
      devProjects: [
        {
          id: 1,
          title: "Little Bar Book",
          tags: ["Vue", "MySQL", "Sequelize", "Express", "HTML", "Javascript"],
          description:
            "In progress | Protoytpe web application to store and browse cocktail recipes. Currently complete: CRUD. Coming soon: Sort By options, pagination",
          filePath: require("@/assets/devAssets/portfolio-thumbnail_LBB0.png"),
          websiteURL: "https://github.com/camille-the-eel/bar-book_v0",
          githubURL: "https://github.com/camille-the-eel/bar-book_v0",
          dateYear: 2022,
        },
        {
          id: 2,
          title: "Portfolio site",
          tags: ["Vue", "CSS", "HTML", "Javascript"],
          description:
            "Portfolio website designed and developed to showcase work, utilizing Vue3, Vue Router, and Vuex.",
          filePath: require("@/assets/devAssets/portfolio-thumbnail_portfolio.jpg"),
          websiteURL: "/",
          githubURL: "https://github.com/camille-the-eel/showcase-portfolio",
          dateYear: 2022,
        },
        {
          id: 3,
          title: "Cocktail Roulette",
          tags: ["API", "Javascript", "JSON", "HTML", "CSS"],
          description:
            "A vanilla javascript web application– enter an ingredient, and you'll be told what drink you'll be having tonight, plus some \"close calls\", utilizing TheCocktailDB API.",
          filePath: require("@/assets/devAssets/portfolio-thumbnail_cocktailRoulette.jpg"),
          websiteURL: "https://camille-the-eel.github.io/cocktail-roulette/",
          githubURL: "https://github.com/camille-the-eel/cocktail-roulette",
          dateYear: 2022,
        },
        {
          id: 4,
          title: "T|F Hotels",
          tags: ["MySQL", "Express", "Node.js", "Bulma-CSS"],
          description:
            "Collaborative project: a management system for front-desk employees that aggregates all relevant data and searches to one easy-to-use page, with creation of reservations and guest accounts just one page click away.",
          filePath: require("@/assets/devAssets/portfolio-thumbnail_TFHotels.jpg"),
          websiteURL: "https://tf-hotels.herokuapp.com/",
          githubURL:
            "https://github.com/camille-the-eel/tf-hotel-management-app",
          dateYear: 2019,
        },
        {
          id: 5,
          title: "Bike To Brew",
          tags: ["API", "Javascript", "JQuery", "HTML", "CSS"],
          description:
            "Collaborative project: a responsive site that connects mountain bikers and beer enthusiasts to breweries and mountain trails near one another. Users are able to map search breweries and mountain biking trails together based on chosen location, brewery, or trail.",
          filePath: require("@/assets/devAssets/b2b.jpg"),
          websiteURL: "https://camille-the-eel.github.io/bike-to-brew/",
          githubURL: "https://github.com/camille-the-eel/bike-to-brew",
          dateYear: 2018,
        },
        {
          id: 6,
          title: "Bamazon",
          tags: ["MySQL", "Node.js", "Javascript"],
          description:
            'Bamazon is a command line Node.js application that utilizes MySQL to retrieve and update database-stored information. On the "Bamazon" storefront, customers can view products and make a purchase that updates the store\'s inventory. Managers can view all inventory, view low inventory, add to the inventory of an existing product, and create a new product. Instructions to run this app can be found in the READ.me on Github.',
          filePath: require("@/assets/devAssets/bamazonM-2.gif"),
          websiteURL: "https://github.com/camille-the-eel/bamazon",
          githubURL: "https://github.com/camille-the-eel/bamazon",
          dateYear: 2019,
        },
        {
          id: 7,
          title: "Burger App",
          tags: ["MySQL", "Express-handlebars", "JQuery"],
          description:
            'A basic full-stack application that takes in a user\'s burger "order", which is saved in MySQL database, then once a user "devours" the burger, the back-end database is updated, as is the front-end display.',
          filePath: require("@/assets/devAssets/eat-da-burger.jpg"),
          websiteURL: "https://ur-eat-da-burger.herokuapp.com/",
          githubURL: "https://github.com/camille-the-eel/eat-da-burger",
          dateYear: 2019,
        },
        {
          id: 8,
          title: "Giftastic",
          tags: ["API", "Javascript", "JSON"],
          description:
            "Click to play/stop gifs of any topic of your choice on a dynamic web page that utilizes the GIPHY API.",
          filePath: require("@/assets/devAssets/giftastic.jpg"),
          websiteURL: "https://camille-the-eel.github.io/giftastic/",
          githubURL: "https://github.com/camille-the-eel/giftastic",
          dateYear: 2018,
        },
        {
          id: 9,
          title: "LIRI Bot",
          tags: ["Javascript", "Node.js", "API"],
          description:
            "Use LIRI, a command line node application, to discover more information about your favorite songs, movies, and artist's concerts!",
          filePath: require("@/assets/devAssets/liri-4.gif"),
          websiteURL: "https://github.com/camille-the-eel/liri",
          githubURL: "https://github.com/camille-the-eel/liri",
          dateYear: 2018,
        },
        {
          id: 10,
          title: "Word-Guess Game",
          tags: ["Javascript", "HTML", "CSS"],
          description:
            'Harry Potter "Exam Review" themed word guessing game, complete the spell before you run out of guesses!',
          filePath: require("@/assets/devAssets/guess-game-mockup.jpg"),
          websiteURL: "https://camille-the-eel.github.io/word-guess-game/",
          githubURL: "https://github.com/camille-the-eel/word-guess-game",
          dateYear: 2018,
        },
        {
          id: 11,
          title: "Crystal Collector",
          tags: ["Javascript", "JQuery", "HTML", "CSS"],
          description:
            "Javascript game: You can only take home your crystals if your collection is equal to the head miner's! Blackjack style gameplay.",
          filePath: require("@/assets/devAssets/wireframe_start_crystal.jpg"),
          websiteURL:
            "https://camille-the-eel.github.io/crystal-collector-game/",
          githubURL:
            "https://github.com/camille-the-eel/crystal-collector-game",
          dateYear: 2018,
        },
      ],
    };
  },
};
</script>

<style>
.dev-page-head {
  margin-top: 1rem;
  margin-bottom: 4rem;
}

.dev-page-content {
  max-width: 100%;
  overflow: hidden;
}
</style>
