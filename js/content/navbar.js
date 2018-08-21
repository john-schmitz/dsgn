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

Vue.component('foot', {
  template: `<div id="foot" class="p-2">
  <p class="text-center"><i>Mocosoft</i> - 2018</p>
  <p class="text-center">
    <a class="link-github" href="https://github.com/Treeek"> Treek </a> &#9702
    <a class="link-github" href="https://github.com/wvxbs"> wvxbs </a> &#9702
    <a class="link-github" href="https://github.com/G5Olivieri"> G50livieri </a> &#9702
    <a class="link-github" href="https://github.com/victorgirardi"> victorgirardi </a> &#9702
    <a class="link-github" href="https://github.com/PepeVic"> PepepVic </a> 
  </p>
</div>`
});

new Vue({
  el: 'footer'
});