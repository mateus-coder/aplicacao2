var bancoLocal = JSON.parse(localStorage.getItem('results'));

function funcaocadastrarUserIformacoesPessoais(){
    var perfilUser = document.getElementById('perfilUser').value;
    var caractereInvalido = false;
    for(var i in perfilUser){
        if(perfilUser[i] == "*" || perfilUser[i] == "/" || perfilUser[i] == "-"){
            caractereInvalido = true;
        }
    }
    if(caractereInvalido){
        window.alert("caractere Inválido");
    }
    else{
        bancoLocal.perfilUser = perfilUser;
        var foto = document.getElementById('foto').value;
        bancoLocal.foto = foto;
        
        //guardando informações do usuário  no armazenamento local

        localStorage.setItem('results', JSON.stringify(bancoLocal));
        setTimeout( () => {
            window.location.href = 'cadastro.html';
        }, 1000);
    }
}


function funcaoPersonalizar(){
    var div_form = document.getElementById('formulario-cadastro');
    div_form.style.marginLeft = '0px';
    var content = ` <h1>Foto de perfil</h1>
                    
                    <label for="foto">Carregue sua foto</label>
                    <input id="foto" type="text" placeholder="Faça o upload da sua foto : ">

                    <h1>Escreva algo sobre você</h1>

                    <label for="perfilUser">Escreva um pouco sobre você</label>
                    <input id="perfilUser" type="text" placeholder="Escreva um pouco sobre você : ">

                    <input type="submit" onclick="funcaocadastrarUserIformacoesPessoais();" value="Cadastrar">`;
    setTimeout( () => {
        div_form.style.marginLeft = '200%';
    }, 1000);
    setTimeout( () => {
        div_form.style.marginLeft = '0px';
        div_form.innerHTML = content;
    }, 2000);
    
    
}

function funcaocadastrarUserLocal(){
    var email_repetido = false;
    var caractereInvalido = false;
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var repita_senha = document.getElementById('repita_senha').value;
    if(bancoLocal.perfisUsuarios.length != 0){
        for(var i in bancoLocal.perfisUsuarios){
            var perfil = bancoLocal.perfisUsuarios[i];
            var arrayAux = perfil.split('*');
            var email_verificador = arrayAux[1];
            if(email == email_verificador){
                email_repetido = true;
            }
        }
    }
    if(senha != repita_senha){
        window.alert('As senhas não são iguais');
    }
    else{
        if(email_repetido){
            window.alert('Email já cadastrado ');
        }
        else{
            if(nome.length == 0 || email.length == 0 || senha.length == 0 || repita_senha.length == 0){
                window.alert('Campo vazio ');
            }
            else{
                for(var i in nome){
                    if(nome[i] == "*" || nome[i] == "/" || nome[i] == "-"){
                        caractereInvalido = true;
                    }
                }
                for(var j in senha){
                    if(senha[j] == "*" || senha[j] == "/" || senha[j] == "-"){
                        caractereInvalido = true;
                    }
                }
                if(caractereInvalido){
                    window.alert("caractere inválido");
                }
                else{
                    bancoLocal.nome = nome;
                    bancoLocal.email = email;
                    bancoLocal.senha = senha;
                    //guardando informações do usuário  no armazenamento local
                    localStorage.setItem('results', JSON.stringify(bancoLocal));
                    funcaoPersonalizar();
                }
            }
        }
    }
}