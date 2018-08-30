Vue.component('navbar', {
    template: ` <nav class="navbar navbar-expand-lg navbar-dark" style="box-shadow: none">
    <a class="navbar-brand text-light my-auto"><img class="navbar-icon" src="imagens/logo/logo-test.png">DSGN</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="Nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse ml-auto" id="nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="html/entrar.html">Entre</a>
            </li>
            <li>
                <a class="nav-link" href="html/cadastro.html">Inscreva-se</a>
            </li>
          </ul>
        </div>
  </nav>`
});

new Vue({
    el:'header',
});