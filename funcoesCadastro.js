var bancoDeDadosLocal = JSON.parse(localStorage.getItem('results'));

var cadastro = {
    "funcaoCadastrarUser": function(){
        var nome = bancoDeDadosLocal.nome;
        var email = bancoDeDadosLocal.email;
        var senha = bancoDeDadosLocal.senha;
        var foto = bancoDeDadosLocal.foto;
        var perfilUser = bancoDeDadosLocal.perfilUser;
        var informacoes = nome + "*" + email + "*" + senha + "*" + foto + "*" + perfilUser + "*" + "/";
        bancoDeDadosLocal.perfisUsuarios.push(informacoes);
        bancoDeDadosLocal.chatUsersEnviadas.push(' ');
        bancoDeDadosLocal.chatUsersRecebidas.push(' ');
        bancoDeDadosLocal.onlineOrOffline.push('offline');
        localStorage.setItem('results', JSON.stringify(bancoDeDadosLocal));
    },
    "funcaoRedireciona": () => {
        window.location.href = "login.html";
    },
};




