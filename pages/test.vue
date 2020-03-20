<template>
<div>

    <section class="bg-primary-3 jarallax min-vh-80 d-flex flex-column justify-content-center pb-0 o-hidden" data-jarallax data-speed="0.2" data-overlay>
       
      <img src="~/assets/img/cowork-1.jpg" alt="Image" class="jarallax-img opacity-30">
      
      <div class="container py-5 position-relative">
        <div class="row">
          <div class="col-xl-6 col-lg-7 col-md-9">
            <h1 class="display-4 text-light">Book a coworking space fast.</h1>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <div class="card card-body">
              <form class="row">
                <div class="col-lg">
                  <div class="form-group mb-lg-0">
                    <select class="custom-select custom-select-lg">
                      <option selected>Location</option>
                      <option value="1">Castle Hill</option>
                      <option value="2">Kensington</option>
                      <option value="3">Hawthorn</option>
                    </select>
                    <img class="icon" src="~/assets/img/icons/interface/arrow-caret.svg" alt="arrow-caret interface icon" data-inject-svg />
                  </div>
                </div>
                <div class="col-lg">
                  <div class="form-group mb-lg-0">
                    <input type="text" placeholder="Date and time" class="form-control form-control-lg" data-flatpickr data-alt-input="true" data-enable-time="true" data-date-format="Y-m-d H:i" />
                  </div>
                </div>
                <div class="col-lg-auto">
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Find a desk</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="decoration-wrapper">
        <div class="decoration bottom left scale-2 flip-y d-none d-xl-block" data-jarallax-element="50">
          <img class="bg-white" src="~/assets/img/decorations/deco-dots-4.svg" alt="deco-dots-4 decoration" data-inject-svg />
        </div>
        <div class="decoration bottom right scale-3" data-jarallax-element="80">
          <img class="bg-primary-2" src="~/assets/img/decorations/deco-blob-13.svg" alt="deco-blob-13 decoration" data-inject-svg />
        </div>
      </div>
   
    </section>

    <section>
      <div class="container">
        <div class="row align-items-center justify-content-around">
          <div class="col-xl-4 col-lg-5 col-md-6 mb-4 mb-md-0" data-aos="fade-up">
            <img src="~/assets/img/cowork-2.jpg" alt="Image" class="rounded shadow-3d">
          </div>
          <div class="col-lg-5 col-md-6" data-aos="fade-up">
            <h2 class="h1">A layout suitable for a coworking space</h2>
            <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            <a href="#" class="lead hover-arrow">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-0 pb-4">
      <div class="container text-center">
        <div class="row mb-5">
          <div class="col">
            <h5>Trusted by over 30,000 of the world’s leading companies</h5>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col">
            <ul class="d-flex flex-wrap justify-content-center list-unstyled">
              <li class="mx-xl-4 mx-3 mb-5" data-aos="fade-up" data-aos-delay="100">
                <img class="icon icon-lg bg-primary-3 opacity-20" src="~/assets/img/logos/brand/intercom.svg" alt="intercom logo icon" data-inject-svg />
              </li>
              <li class="mx-xl-4 mx-3 mb-5" data-aos="fade-up" data-aos-delay="200">
                <img class="icon icon-lg bg-primary-3 opacity-20" src="~/assets/img/logos/brand/slack.svg" alt="slack logo icon" data-inject-svg />
              </li>
              <li class="mx-xl-4 mx-3 mb-5" data-aos="fade-up" data-aos-delay="300">
                <img class="icon icon-lg bg-primary-3 opacity-20" src="~/assets/img/logos/brand/spotify.svg" alt="spotify logo icon" data-inject-svg />
              </li>
              <li class="mx-xl-4 mx-3 mb-5" data-aos="fade-up" data-aos-delay="400">
                <img class="icon icon-lg bg-primary-3 opacity-20" src="~/assets/img/logos/brand/target.svg" alt="target logo icon" data-inject-svg />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary-3 text-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <h3 class="h1">Explore Locations</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md" data-aos="fade-up" data-aos-delay="100">
            <a href="#" class="card position-relative text-light border-0 d-flex justify-content-end overlay">
              <img src="~/assets/img/cowork-3.jpg" alt="Image" class="rounded">
              <div class="position-absolute p-3">
                <h3 class="mb-0">Castle Hill</h3>
                <span>24 Spaces</span>
              </div>
            </a>
          </div>
          <div class="col-md" data-aos="fade-up" data-aos-delay="200">
            <a href="#" class="card position-relative text-light border-0 d-flex justify-content-end overlay">
              <img src="~/assets/img/cowork-4.jpg" alt="Image" class="rounded">
              <div class="position-absolute p-3">
                <h3 class="mb-0">Kensington Gardens</h3>
                <span>108 Spaces</span>
              </div>
            </a>
          </div>
          <div class="col-md" data-aos="fade-up" data-aos-delay="300">
            <a href="#" class="card position-relative text-light border-0 d-flex justify-content-end overlay">
              <img src="~/assets/img/cowork-5.jpg" alt="Image" class="rounded">
              <div class="position-absolute p-3">
                <h3 class="mb-0">Hawthorn</h3>
                <span>73 Spaces</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary-3 text-light has-divider jarallax" data-jarallax data-speed="0.2">

      <img src="~/assets/img/cowork-6.jpg" alt="Image" class="jarallax-img opacity-50">

      <div class="container">
        <div class="row justify-content-center text-center min-vh-50 align-items-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <a data-fancybox href="https://vimeo.com/40842620" class="btn btn-xlg btn-primary btn-round mx-auto mb-4" data-aos="fade-up">
              <img class="icon" src="~/assets/img/icons/theme/media/play.svg" alt="play icon" data-inject-svg />
            </a>
            <h4 class="display-4">Change the game.</h4>
            <p class="lead">Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </div>
        </div>
      </div>

    </section>

    <section class="pb-0">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <h3 class="h1">News &amp; Events</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <a class="card hover-shadow-sm" href="#">
              <img src="~/assets/img/inner-4.jpg" alt="Image" class="card-img-top">
              <div class="card-body d-flex flex-column">
                <div class="d-flex">
                  <div class="text-right">
                    <div class="h4 mb-0 text-danger">24</div>
                    <div class="h4 mb-0 text-uppercase">JUN</div>
                  </div>
                  <div class="ml-3">
                    <div class="badge badge-primary mb-2">Social</div>
                    <h4 class="mb-2">Castle Hill members meetup</h4>
                    <div>148 Flockhart St, Collingwood VIC</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-6">
            <a class="card hover-shadow-sm" href="#">
              <img src="~/assets/img/inner-9.jpg" alt="Image" class="card-img-top">
              <div class="card-body d-flex flex-column">
                <div class="d-flex">
                  <div class="text-right">
                    <div class="h4 mb-0 text-danger">02</div>
                    <div class="h4 mb-0 text-uppercase">JUL</div>
                  </div>
                  <div class="ml-3">
                    <div class="badge badge-primary mb-2">Workshop</div>
                    <h4 class="mb-2">Designer talk with Sam Randall</h4>
                    <div>148 Flockhart St, Collingwood VIC</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4">
            <ul class="list-unstyled list-articles">
              <li class="row row-tight">
                <a href="#" class="col-3 col-md-4">
                  <img src="~/assets/img/article-1.jpg" alt="Image" class="rounded">
                </a>
                <div class="col d-flex flex-column justify-content-between">
                  <div>
                    <a href="#">
                      <h6 class="mb-1">How to build collateral</h6>
                    </a>
                    <div class="d-flex text-small">
                      <a href="#">Business</a>
                      <span class="text-muted ml-1">29th November</span>
                    </div>
                  </div>
                  <div>
                    <span class="badge bg-primary-alt text-primary">
                      <img class="icon bg-primary" src="~/assets/img/icons/interface/heart.svg" alt="heart interface icon" data-inject-svg />12
                    </span>
                  </div>
                </div>
              </li>
              <li class="row row-tight">
                <a href="#" class="col-3 col-md-4">
                  <img src="~/assets/img/article-2.jpg" alt="Image" class="rounded">
                </a>
                <div class="col d-flex flex-column justify-content-between">
                  <div>
                    <a href="#">
                      <h6 class="mb-1">Forging your path</h6>
                    </a>
                    <div class="d-flex text-small">
                      <a href="#">Design</a>
                      <span class="text-muted ml-1">27th November</span>
                    </div>
                  </div>
                  <div>
                    <span class="badge bg-primary-alt text-primary">
                      <img class="icon bg-primary" src="~/assets/img/icons/interface/heart.svg" alt="heart interface icon" data-inject-svg />23
                    </span>
                  </div>
                </div>
              </li>
              <li class="row row-tight">
                <a href="#" class="col-3 col-md-4">
                  <img src="~/assets/img/article-3.jpg" alt="Image" class="rounded">
                </a>
                <div class="col d-flex flex-column justify-content-between">
                  <div>
                    <a href="#">
                      <h6 class="mb-1">Securing your Series A</h6>
                    </a>
                    <div class="d-flex text-small">
                      <a href="#">Business</a>
                      <span class="text-muted ml-1">23rd November</span>
                    </div>
                  </div>
                  <div>
                    <span class="badge bg-primary-alt text-primary">
                      <img class="icon bg-primary" src="~/assets/img/icons/interface/heart.svg" alt="heart interface icon" data-inject-svg />82
                    </span>
                  </div>
                </div>
              </li>
              <li class="row row-tight">
                <a href="#" class="col-3 col-md-4">
                  <img src="~/assets/img/article-4.jpg" alt="Image" class="rounded">
                </a>
                <div class="col d-flex flex-column justify-content-between">
                  <div>
                    <a href="#">
                      <h6 class="mb-1">Planning for change</h6>
                    </a>
                    <div class="d-flex text-small">
                      <a href="#">Finance</a>
                      <span class="text-muted ml-1">16th November</span>
                    </div>
                  </div>
                  <div>
                    <span class="badge bg-primary-alt text-primary">
                      <img class="icon bg-primary" src="~/assets/img/icons/interface/heart.svg" alt="heart interface icon" data-inject-svg />93
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
            <h3 class="h2 mb-5">Get great articles direct to your inbox</h3>
            <form action="/forms/mailchimp.php" data-form-email novalidate>
              <div class="d-sm-flex flex-column flex-sm-row mb-3 justify-content-center">
                <input type="email" name="email" class="mr-sm-1 mb-2 mb-sm-0 form-control form-control-lg" placeholder="Email Address" required>
                <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft"></div>
                <button type="submit" class="ml-sm-1 btn btn-lg btn-primary btn-loading" data-loading-text="Sending">
                  <img class="icon" src="~/assets/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                  <span>Subscribe</span>
                </button>
              </div>
              <div>
                <div class="d-none alert alert-success" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div class="d-none alert alert-danger" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
              </div>
            </form>

            <div class="text-small text-muted">
              We’ll never share your details with third parties.
              <br class="visible-md" />View our <a href="#">Privacy Policy</a> for more info.
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Parallax from 'vue-parallaxy'

export default {
  components: {
      Parallax
    },
  name: "Test",
  head() {
    return {
      title: "Test Page"
    };
  }
};
</script>