//texto de exemplo nas variáveis

var Job1 = {
    Avaliacoes: '20 avaliações',
    TipoDesigner: 'Ilustador',
    UsrDesigner: '@victorgirardi',
    Job: 'Leão Hipster'

}

var job2 = {
    Avaliacoes: '50 avaliações',
    TipoDesigner: 'Ilustador',
    UsrDesigner: '@victorgirardi',
    Job: 'Instagrão'

}

var job3 = {
    Avaliacoes: '40 avaliações',
    TipoDesigner: 'Ilustador',
    UsrDesigner: '@victorgirardi',
    Job: 'Spontifinho'
    
}

Vue.component('job1',{
    template: `<div class="card mb-4 h-md-250 mx-4" style="width: 18rem">
            <div class="hovereffect">
                <img class="card-img-top" src="../imagens/jobs/job1.jpg" alt="job1">
                <div class="overlay">
                    <h2>{{ Avaliacoes }}</h2>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ Job }}</h5>
                <p class="card-text text-muted">{{ TipoDesigner }} | {{ UsrDesigner }}</p>
            </div>
        </div>
    </div>
</div>`,
    data: function() {
        return Job1;
    }
});

Vue.component('job2', {
    template: `<div class="card mb-4 h-md-250 mx-4" style="width: 18rem">
    <div class="hovereffect">
        <img class="card-img-top" src="../imagens/jobs/job2-1.jpg" alt="job2">
        <div class="overlay">
            <h2>{{ Avaliacoes }}</h2>
        </div>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ Job }}</h5>
        <p class="card-text text-muted">{{ TipoDesigner }} | {{ UsrDesigner }}</p>
    </div>
</div>`,
    data: function() {
        return job2;
    }
});

Vue.component('job3', { 
    template: `<div class="card mb-4 h-md-250 mx-4" style="width: 18rem">
    <div class="hovereffect">
        <img class="card-img-top" src="../imagens/jobs/job2.jpg" alt="job3">
        <div class="overlay">
            <h2>{{ Avaliacoes }}</h2>
        </div>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ Job }}</h5>
        <p class="card-text text-muted">{{ TipoDesigner }} | {{ UsrDesigner }}</p>
    </div>
</div>`,
    data: function() {
        return job3
    }
});

Vue.component('modal1',{
    template:`<div class="modal fade" id="expanded-image1" tabindex="-1" role="dialog" aria-labelledby="expanded-image-title1" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div>
                    <div class="row">
                        <div class="col-md">
                            <img class="card-img-top" src="../imagens/jobs/job1.jpg" alt="job1">
                            <p class="text-muted">Artista: {{ UsrDesigner }}<br>
                    Titulo: {{ Job }}
                    </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>`,
    data: function () {
        return Job1;
    } 
});

Vue.component('modal2',{
    template:`<div class="modal fade" id="expanded-image2" tabindex="-1" role="dialog" aria-labelledby="expanded-image-title2" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div>
                    <div class="row">
                        <div class="col-md">
                        <img class="card-img-top" src="../imagens/jobs/job2-1.jpg" alt="job2">
                        <p class="text-muted">Artista: {{ UsrDesigner }}<br>
                    Titulo: {{ Job }}
                    </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>`,
    data: function () {
        return job2;

    }
});

Vue.component('modal3',{
    template:`    <div class="modal fade" id="expanded-image3" tabindex="-1" role="dialog" aria-labelledby="expanded-image-title3" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
            <div>
            <div class="row">
                <div class="col-md">
                <img class="card-img-top" src="../imagens/jobs/job2.jpg" alt="job2">
                <p class="text-muted">Artista: {{ UsrDesigner }}<br>
                    Titulo: {{ Job }}
                    </p>
                </div>
                </div>
            </div> 
        </div>
            </div>
        </div>
    </div>
</div>`,
    data: function () {
        return job3;
    }
});

new Vue({
    el: '#job-container'
})