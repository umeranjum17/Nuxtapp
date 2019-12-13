<template>
  <div class>
    <header class="bg-secondary">
      <nav class="navbar navbar-expand-sm bg-light justify-content-end">
        <ul class="navbar-nav text-right">
          <li class="nav-item">
            <nuxt-link :to="{ path: '/secondpage',hash:'#portfolio'}" class="nav-link">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ path: '/secondpage',hash:'#portfolio'}" class="nav-link">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ path: '/secondpage',hash:'#portfolio'}" class="nav-link">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ path: '/secondpage',hash:'#portfolio'}" class="nav-link">Portfolio</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="container d-flex align-items-center flex-column bg-secondary">
        <div class="masthead-heading text-uppercase mb-0 text-white">
          <h1>
            Vue on steriods{{counter}}
            <span class="badge badge-primary">Nuxt</span>
          </h1>
        </div>
      </div>
    </header>
    <section id="portfolio" class="page-section">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">Portfolio</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section bg-secondary">
      <div class="container d-flex align-items-center flex-column bg-secondary">
        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
        <div class="row">
          <!-- Icon Divider -->

          <!-- About Section Content -->
          <div class="row">
            <div
              class="col-lg-4 ml-auto text-white"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem voluptates pariatur tenetur dolorum dicta.</div>
            <div
              class="col-lg-4 mr-auto text-white"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia id amet deserunt non voluptatibus nulla iste officiis ipsam voluptatem rerum.</div>
          </div>
        </div>

        <!-- About Section Button -->
        <div class="text-center mt-4">
          <button class="btn btn-primary">View Github</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.divider-custom {
  margin: 1.25rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
