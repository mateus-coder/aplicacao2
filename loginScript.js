function funcaoChamarProcedimento(){
    var mostrarUsuarios = login["funcaoMostrarUsers"];
    mostrarUsuarios();
}
function funcaoLogin(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var logar = login["funcaoLogarUser"];
    logar(email, senha);
}