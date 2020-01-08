var bancoDeDadosLocal = JSON.parse(localStorage.getItem('results'));

var login = {
    "funcaoLogarUser": (email_entrada, senha_entrada) => {
        var logou = false;
        for (var i in bancoDeDadosLocal.perfisUsuarios) {
            var perfil = bancoDeDadosLocal.perfisUsuarios[i];
            var arrayAux = perfil.split('*');
            var senha = arrayAux[2];
            var email = arrayAux[1];
            if (senha_entrada == senha && email_entrada == email) {
                var loginUser = login["funcaoLogin"];
                loginUser(i);
                logou = true;
            }
        }
        if (!logou) {
            window.alert('Usuário não cadastrado ou senha inválida');
            //fazer pop-up de mensagem convidativa para o user se cadastrar
        }
    },
    "funcaoLogin": (indice) => {
        bancoDeDadosLocal.indicePerfilLogado = indice;
        bancoDeDadosLocal.onlineOrOffline[indice] = "online";
        localStorage.setItem('results', JSON.stringify(bancoDeDadosLocal));
        window.location.href = 'pgInicialLogado.html';
    },
    "funcaoMostrarUsers": () => {
        for (var i in bancoDeDadosLocal.perfisUsuarios) {
            var perfil = bancoDeDadosLocal.perfisUsuarios[i];
            var arrayAux = perfil.split('*');
            var nome = arrayAux[0];
            var email = arrayAux[1];
            var senha = arrayAux[2];
            console.log("Nome  = " + nome);
            console.log("Email = " + email);
            console.log("senha = " + senha);
        }
    },
};


