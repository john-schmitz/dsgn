Vue.component('e-navbar', {
    template: ` <nav class="navbar navbar-expand-lg navbar-dark" style="box-shadow: none">
    <a class="navbar-brand text-light my-auto"><img class="navbar-icon" src="imagens/logo/logo-test.png"></a>
        <div class="ml-auto d-inline-flex" id="nav">
          <div class="nav-item mx-2 text-light active">
            <a class="text-light" href="html/entrar.html">Entre</a>
          </div>
          <div class="nav-item mx-2">
            <a class="text-light" href="html/cadastro.html">Inscreva-se</a>
          </div>
        </div>
  </nav>`
});

new Vue({
    el:'header',
});