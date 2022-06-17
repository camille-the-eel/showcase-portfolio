<template>
  <footer>
    <div class="social-links-container">
      <a href="https://github.com/camille-the-eel">
        <h4>GITHUB</h4>
        <img :src="require('@/assets/github_gray.png')" class="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/camillemhughes/">
        <h4>LINKEDIN</h4>
        <img :src="require('@/assets/linkedin_grey.png')" class="social-icon" />
      </a>
    </div>
    <div class="background-circle-wrapper">
      <div class="contact-info">
        <div class="footer-dashed-line"></div>
        <h1>CONTACT</h1>
        <p class="email">hughes.camille.m@gmail.com</p>
        <p class="email-xs">hughes.camille.m<br />@gmail.com</p>
        <!-- <p class="copyright">CH &#169;2022</p> -->
      </div>
      <div class="background-circle"></div>
    </div>
  </footer>
</template>

<style scoped>
@import "./footer.css";
</style>
