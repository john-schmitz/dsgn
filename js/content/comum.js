Vue.component('navbar', {
  template: `<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <a class="navbar-brand text-light my-auto"><img class="navbar-icon" src="../imagens/logo/logo-test.png">DSGN</a>
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

Vue.component('adm-navbar', {
    template: ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand text-light my-auto"><img class="navbar-icon" src="../imagens/logo/logo-test.png">DSGN</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
    </button>
    <ul class="navbar-nav ml-auto justify-content-center align-items-center">
      <li class="nav-item active">
          <button class="btn btn-outline-light mx-1">Ocultar Portifolio</button>
      </li>  
      <li class="nav-item">
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



