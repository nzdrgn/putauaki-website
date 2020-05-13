<template>
    <div>
  <b-navbar toggleable="lg"  class="bg-primary-alt pt-1 pb-1" fixed="top" variant="transparent" type="dark" id="nav">
    <b-navbar-brand href="/" class="ml-2">
      <img src="~/assets/img/logos/logo-putauaki-white.png" alt="Putauaki Trust" height="60" id="logo-white">      
      <img src="~/assets/img/logos/logo-putauaki.png" alt="Putauaki Trust" height="60" id="logo-blue" class="d-none"> 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="navbg"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav variant="light"> 
      <b-navbar-nav>
        <b-nav-item-dropdown text="OUR STORY" >
          <b-dropdown-item href="/about-us">ABOUT US</b-dropdown-item>
          <b-dropdown-item href="/our-history">OUR HISTORY</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="OUR PEOPLE" >
          <b-dropdown-item href="/structure">STRUCTURE</b-dropdown-item>
          <b-dropdown-item href="/trustees">TRUSTEES</b-dropdown-item>
          <b-dropdown-item href="/management">MANAGEMENT</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="OUR BUSINESS" >
          <b-dropdown-item href="/putauaki-dairy-farm">PUTAUAKI DAIRY FARM</b-dropdown-item>
          <b-dropdown-item href="/himiona-dairy-farm">HIMIONA DAIRY FARM</b-dropdown-item>
          <b-dropdown-item href="/geothermal">GEOTHERMAL</b-dropdown-item>
          <b-dropdown-item href="/forestry">FORESTRY</b-dropdown-item>
          <b-dropdown-item href="/sharemarket">SHAREMARKET</b-dropdown-item>
          <b-dropdown-item href="/kiwifruit">KIWIFRUIT</b-dropdown-item>
          <b-dropdown-item href="/industrial-zone">INDUSTRIAL ZONE</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="OWNER SERVICES" >
          <b-dropdown-item href="/grants">GRANTS</b-dropdown-item>
          <b-dropdown-item href="/shareholder-information">SHAREHOLDER INFORMATION</b-dropdown-item>
          <b-dropdown-item href="/shareholder-register">SHAREHOLDER REGISTER</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="COMMUNICATIONS" >
          <b-dropdown-item href="/panui">PANUI</b-dropdown-item>
          <b-dropdown-item href="/gallery">GALLERY</b-dropdown-item>
          <b-dropdown-item href="/reports">REPORTS</b-dropdown-item>
          <b-dropdown-item href="/newsletters">NEWSLETTERS</b-dropdown-item>
          <b-dropdown-item href="/links">LINKS</b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="/contact-us">CONTACT US</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items 
      <b-navbar-nav class="ml-auto mr-2" >
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>     

        
      </b-navbar-nav>
      -->
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>

export default {
  name: "HeaderBlock",
  methods:{
    navbg: function(event){
          var navbar = document.getElementById("nav");
          var nav_classes = navbar.classList;

          var logowhite = document.getElementById("logo-white");
          var logowhite_classes = logowhite.classList;

          var logoblue = document.getElementById("logo-blue");
          var logoblue_classes = logoblue.classList;

          if (nav_classes.contains("bg-transparent") === true) {
              nav_classes.toggle("bg-transparent");
            }
            if (nav_classes.contains("navbar-light") === false) {
              nav_classes.toggle("navbar-light");
            }
            if (nav_classes.contains("navbar-dark") === true) {
              nav_classes.toggle("navbar-dark");
            }
            if (logowhite_classes.contains("d-none") === false) {
              logowhite_classes.toggle("d-none");
            }
            if (logoblue_classes.contains("d-none") === true) {
              logoblue_classes.toggle("d-none");
            }
    }
  },  
  mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav");
          var nav_classes = navbar.classList;

          var logowhite = document.getElementById("logo-white");
          var logowhite_classes = logowhite.classList;

          var logoblue = document.getElementById("logo-blue");
          var logoblue_classes = logoblue.classList;


          if(document.documentElement.scrollTop >= 100) {
             
            if (nav_classes.contains("bg-transparent") === true) {
              nav_classes.toggle("bg-transparent");
            }
            if (nav_classes.contains("navbar-light") === false) {
              nav_classes.toggle("navbar-light");
            }
            if (nav_classes.contains("navbar-dark") === true) {
              nav_classes.toggle("navbar-dark");
            }
            if (logowhite_classes.contains("d-none") === false) {
              logowhite_classes.toggle("d-none");
            }
            if (logoblue_classes.contains("d-none") === true) {
              logoblue_classes.toggle("d-none");
            }
          }
          else {
             
            if (nav_classes.contains("bg-transparent") === false) {
              nav_classes.toggle("bg-transparent");
            }
            if (nav_classes.contains("navbar-light") === true) {
              nav_classes.toggle("navbar-light");
            }
            if (nav_classes.contains("navbar-dark") === false) {
              nav_classes.toggle("navbar-dark");
            }
            if (logowhite_classes.contains("d-none") === true) {
              logowhite_classes.toggle("d-none");
            }
            if (logoblue_classes.contains("d-none") === false) {
              logoblue_classes.toggle("d-none");
            }
          }
        })
      })
    },
};
</script>

<style scoped>
body {
  padding: 1rem;
}

.lang-dropdown .dropdown-menu {
   min-width: 4rem;
}
</style>

