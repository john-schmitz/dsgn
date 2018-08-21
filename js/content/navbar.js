Vue.component('navbar', {
  template: `<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <a class="navbar-brand text-light">DSGN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
  </button>
  <ul class="navbar-nav ml-auto justify-content-center align-items-center">
      <li class="nav-item active">
          <a class="nav-link font-weight-bold" href="../html/busca.html">
              Pesquisar
          </a>
      </li>
  </ul>
</nav>`
});

new Vue({
    el: 'header'
});

Vue.component('foot', {
  template: `<div id="foot" class="p-2">
  <p class="text-center"><i>Mocosoft</i> - 2018</p>
</div>`
});

new Vue({
  el: 'footer'
});