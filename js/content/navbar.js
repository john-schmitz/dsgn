Vue.component('navbar', {
    template: ` <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <a class="navbar-brand text-light"><img src="../imagens/logo/logo-test.png" style="width: 20%;"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="../html/entrar.html">Entre</a>
            </li>
            <li>
                <a class="nav-link" href="../html/cadastro.html">Inscreva-se</a>
            </li>
          </ul>
        </div>
  </nav>`
});

new Vue({
    el: 'header'
});

