Vue.component('modal', {
    template: `<div class="modal fade" id="modal-buscar" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title text-center" id="modelTitleId">Pesquisar</h4>
            </div>
            <div class="modal-body">
                <div class="content">
                        <form class="px-3">
                            <div class="form-group">
                                <label class="mt-3" for="nome-busca">Nome</label>
                                <input type="text" class="form-control" id="nome-busca" placeholder="Nome...">
                            </div>
                            <div class="form-group">
                                <label for="categoria">Categoria</label>
                                <select class="custom-select" id="categoria">
                                    <option> --- </option>
                                    <option>Desenho Industrial</option>
                                    <option>Design de Interface</option>
                                    <option>Identidade Visual</option>
                                    <option>Design de produtos</option>
                                    <option>Fotografia</option>
                                    <option>Ilustração</option>
                                </select>
                            </div>
                            <div class="form-group mb-4">
                                <label for="nota-busca" class="mt-0">Nota</label>
                                <select class="custom-select" id="nota">
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    <div style="text-align: right">
                        <button type="button" class="btn btn-secondary ml-auto" data-dismiss="modal">cancelar</button>
                        <button type="button" class="btn btn-primary">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`
})

Vue.component('navbar', {
  template: `<nav id="nav" class="navbar navbar-expand-lg navbar-dark fixed-top">
  <a class="navbar-brand my-auto" onclick="Voltar()"><div class="navbar-icon"><img class="navbar-icon" src="../imagens/logo/logo-test.png"></a>
  <div class="ml-auto d-inline-flex">
      <div class="mx-1 my-auto">
        <form>
            <div class="search-div my-auto">
                <a class="my-auto" id="pesquisar" data-toggle="modal" data-target="#modal-buscar">
                    <img class="search-icon my-auto" src="../imagens/icones/if_Find01_928435.png">
                </a>
            </div>
        </form>
      </div>
      <div class="mx-1 my-auto">
        <div class="dropdown profile-div">
            <a class="dropdown-toggle" id="profile-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img class="profile-icon" src="../imagens/icones/carlosperfil.jpg">  
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profile-icon">
                <a class="dropdown-item" href="perfil-designer.html">Ver Perfil</a>
                <a class="dropdown-item" href="../index.html">Sair</a>
            </div>
        </div>
      </div>
  </div>
</nav>`
})

Vue.component('adm-navbar', {
    template: `<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand my-auto" onclick="Voltar()"><img class="navbar-icon" src="../imagens/logo/logo-test.png"></a>
    <a class="my-2 navbar-toggler" data-toggle="collapse" href="#navbar" aria-expanded="false" aria-label="Toggle navigation">
     <img src="../imagens/icones/iconfinder_menu2_309052.svg" style="width:20px;height:20px;filter:invert(100)">
    </a>
    <div class="collapse navbar-collapse ml-auto" id="navbar">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-auto my-auto">
                <button class="btn btn-outline-light mx-1" onclick="OcultarUsuario()">Ocultar Perfil</button>  
            </li>
            <li class="nav-item mx-auto my-auto">
                <button class="btn btn-outline-light mx-1" onclick="OcultarPortfolio()">Ocultar Portifolio</button>  
            </li>
            <li class="nav-item mx-auto my-auto">
                <button class="btn btn-outline-danger mx-1" data-toggle="modal" data-target="#denuncias">Denuncias</button>  
            </li>
            <form>
                <div class="search-div">
                    <a id="pesquisar" data-toggle="modal" data-target="#modal-buscar">
                        <img class="search-icon" style="filter:invert(100)" src="../imagens/icones/if_Find01_928435.png">
                    </a>
                </div>
            </form>
            </li>
            <li class="nav-item mx-1 my-auto">
                <div class="dropdown profile-div">
                    <a class="dropdown-toggle" type="button" id="profile-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="profile-icon" src="../imagens/icones/carlosperfil.jpg">  
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profile-icon">
                        <a class="dropdown-item" href="perfil-adm.html">Ver Perfil</a>
                        <a class="dropdown-item" href="../index.html">Sair</a>
                    </div>
                </div>
            </li>
     </ul>
  </div>
  </nav>` 
})

new Vue({
    el: 'header'
})

Vue.component('foot', {
    template: `<div id="foot" class="p-2">
        <a class="link-github" href="https://github.com/Treeek"> Treeek </a> &#9702
        <a class="link-github" href="https://github.com/wvxbs"> wvxbs </a> &#9702
        <a class="link-github" href="https://github.com/G5Olivieri"> G50livieri </a> &#9702
        <a class="link-github" href="https://github.com/victorgirardi"> victorgirardi </a> &#9702
        <a class="link-github" href="https://github.com/PepeVic"> PepeVic </a>
  </div>`
})

new Vue({
    el: 'footer'
})

function Voltar() {
    window.history.back()

}

function Rolagem() {
    var i
    var nav = document.getElementById('nav')
    var sicon = document.getElementsByClassName('search-icon')

        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            nav.style.boxShadow = 'var(--primary-shadow)'
            for(i = 0; i => 1; i++){
                sicon[i].style.filter = 'invert(0)'
            }
            nav.getAnimations
        } else {
            nav.style.boxShadow = 'none'
            nav.style.background = 'white'
            for(i = 0; i => 1; i++){
                sicon[i].style.filter = 'invert(0)'
            }
        }
    }