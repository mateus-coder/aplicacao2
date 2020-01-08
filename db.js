function funcaoDb(){
    var db = {
        "nome": "",
        "email": "",
        "senha": "",
        "perfilUser": "",
        "foto": "",
        "indicePerfilLogado": "",
        "preferencias": [],
        "perfis": [],
        "perfilSelecionado": 0,
        "perfisUsuarios": [
            //perfis completos de usuários com nome, email, senha(por enquanto);
        ],
        "chatUsersRecebidas": [
            //chat de cada usuário mensagens recebidas
        ],
        "chatUsersEnviadas": [
            //chat de cada usuário mensagens enviadas
        ],
        "onlineOrOffline": [
            //status online ou offline
        ]
    };
    var bd = JSON.parse(localStorage.getItem('results'));
    if(!bd){
        bd = db;
        localStorage.setItem('results', JSON.stringify(bd));
    }
}



