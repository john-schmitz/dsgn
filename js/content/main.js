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
        
        <div class="card mb-4 h-md-250 mx-4" style="width: 18rem">
            <div class="hovereffect">
                <img class="card-img-top" src="../imagens/jobs/job2.jpg" alt="job3">
                <div class="overlay">
                    <h2>5000 avaliações</h2>
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
            <h2>300 avaliações</h2>
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

Vue.component('job3',{
    template: `<div class="card mb-4 h-md-250 mx-4" style="width: 18rem">
    <div class="hovereffect">
        <img class="card-img-top" src="../imagens/jobs/job2.jpg" alt="job2">
        <div class="overlay">
            <h2>300 avaliações</h2>
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

new Vue({
    el: '#job-container'
})