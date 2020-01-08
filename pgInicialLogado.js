var db = JSON.parse(localStorage.getItem('results'));

function init(){
    var perfil = db.perfisUsuarios[db.indicePerfilLogado];
    var arrayAux = perfil.split('*');
    var nome = arrayAux[0];
    var foto = arrayAux[3];
    var caixa_texto = document.getElementById('nome-perfil');
    var caixa_foto = document.getElementById('foto-perfil'); 
    var iconChat = document.querySelector('#chat');
    iconChat.style.marginLeft = String( window.innerWidth - 100) + 'px';
    iconChat.style.marginTop = String( window.innerHeight - 200) + 'px';
    caixa_texto.innerHTML = nome;
    caixa_foto.src = foto;

}
var menu_aberto = false;

function funcaoAbrirMenu(){
    var menu = document.getElementById('menu-lateral');
    var botao = document.getElementById('gaveta');
    if(!menu_aberto){
        botao.style.width = '150px';
        botao.style.color = 'orange';
        menu.style.marginLeft = '-160px';
        menu.style.display = 'grid';
        menu_aberto = true;
        setTimeout( () => {
            menu.style.marginLeft = '0px';
        }, 500);
    }
    else{
        botao.style.width = '40px';
        botao.style.color = 'rgb(60, 255, 0)';
        menu.style.marginLeft = '-160px';
        menu_aberto = false;
        setTimeout( () => {
            menu.style.display = 'none';
        }, 500);
    }
}

function funcaoAbrirPerfil(){
    var abrirPerfil = perfil["fucaoPerfilUser"];
    abrirPerfil();
}