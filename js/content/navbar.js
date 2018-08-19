var Navbar = {
    template: ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="nav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Entre</a>
            </li>
            <li>
                <a class="nav-link" href="Html/cadastro.html">Inscreva-se</a>
            </li>
          </ul>
        </div>
  </nav>`
}

new Vue({
    el: 'header',
    components: {
        'navbar': Navbar
    }
});