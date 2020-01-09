var bancoLocal = JSON.parse(localStorage.getItem('results'));
var container1 = document.getElementById('exibir-image');
const doUpload = (url, options) => {
    const promiseCallback = (resolve, reject) =>{
        fetch(url, options)
            .then(Response => Response.json())
            .then(resolve)
            .catch(reject);
    }
    return new Promise(promiseCallback);
};
const addImage = (url1) => {
    container1.style.backgroundImage = `url('${url1}')`;
    console.log(url1);
};

const onSuccess = (result) => {
    const { data: {link} } = result;
    addImage(link);
    
};

const funcaocadastrarUserIformacoesPessoais = (e) => {
    var perfilUser = document.getElementById('perfilUser').value;
    e.preventDefault();
    const CLIENT_ID = 'c92abe551c712a0';
    const file = document.getElementById('file');
    const data = new FormData();
    data.append('image', file.files[0]);
    //upload dos arquivos pela fetch API
    doUpload('https://api.imgur.com/3/image', {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
        },
    })
    .then(onSuccess)
    .catch(console.error);
    //formData = new FormData(evt.target);
    //ajax = new XMLHttpRequest();
    //console.log(ajax);

    //ajax.onreadystatechange = function(){
        //if(ajax.readyState == 4) {
            //formSubmit.reset();
            //console.log(ajax);
        //}
    //}

    //ajax.open('POST', 'upload.php');
    //ajax.send(formData);
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
        //var foto = document.getElementById('foto').value;
        //bancoLocal.foto = foto;
        
        //guardando informações do usuário  no armazenamento local

        localStorage.setItem('results', JSON.stringify(bancoLocal));
        setTimeout( () => {
            //window.location.href = 'cadastro.html';
        }, 1000);
    }
}
const formSubmit = document.querySelector('#form-submit');
formSubmit.addEventListener('submit', funcaocadastrarUserIformacoesPessoais, false);


function funcaoPersonalizar(){
    var div_form_antigo = document.getElementById('formulario-cadastro');
    var div_form = document.getElementById('form-submit-image');
    div_form_antigo.style.opacity = '0';
    div_form.style.display = 'block';
    div_form.style.marginLeft = '0px';
    
    setTimeout( () => {
        div_form.style.marginLeft = '200%';
    }, 1000);
    setTimeout( () => {
        div_form.style.marginLeft = '0px';
        
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