


var bancoDados = JSON.parse(localStorage.getItem('results'));

const objetoOrganizarCategorias = {
    "funcaoCategorizar": function(indice){
            bancoDados.preferencias.push(arranjoDeCategoriasSelecionadas[indice]);
            var funcaoMostrar = objetoOrganizarCategorias["mostrarArray"];
            funcaoMostrar();

            localStorage.setItem('results', JSON.stringify(bancoDados));
    },
    "mostrarArray": function(){
        var content = "";
        var caixaPreselecionados = document.getElementById('selecionados-ate-o-momento');
        for (var i in bancoDados.preferencias){
            content += `<div onclick="preSelecionado('${i}');" class="opcoes-selecionadas">
                    <button type="button" class="botao laranja">${bancoDados.preferencias[i]}</button>
                </div>`;
        }
        caixaPreselecionados.innerHTML = content;
    }
};
function criarMenu(){
    var content = "";
    
    localStorage.setItem('results', JSON.stringify(bancoDados));
    //-----
    var menuCrud = document.getElementById('menu-crud');
    for(var i = 0; i < 6; i++){
        content += `<div onclick="funcaoIncluirOpcao('${i}');" class="opcoes-escolha-box">
                        <button type="button" class="botao laranja">${arranjoDeCategoriasSelecionadas[i]}</button>
                    </div>`;
    }
    menuCrud.innerHTML = content;
}

function funcaoInserir(){
    var botao = document.getElementsByClassName('ferramenta-box')[0];
    var resposta = document.getElementById('resposta');
    var conteudo = "";
    botao.classList.add('verdeEfeito');
    
    var perfil = bancoDados.preferencias.join('-');
    console.log(perfil);
    
    bancoDados.preferencias = [];
    var mostrar = objetoOrganizarCategorias["mostrarArray"];
    mostrar();
    bancoDados.perfis.push(perfil);
    localStorage.setItem('results', JSON.stringify(bancoDados));
    conteudo = `<h2>PERFIL SALVO COM SUCESSO</h2>`;
    resposta.innerHTML = conteudo;
    resposta.style.display = 'block';
    setTimeout(function(){
        botao.classList.remove('verdeEfeito');
        resposta.style.display = 'none';
    }, 2000);
    
}
function funcaoExcluirPerfil(indice){
    bancoDados.perfis.splice(indice, 1);
    funcaoMostrarPerfis();
}
var perfilSelecionado;
function funcaoMostrarFeed(perfil){
    perfilSelecionado = perfil;
    console.log(perfil);
    bancoDados.perfilSelecionado = perfil;
    localStorage.setItem('results',JSON.stringify(bancoDados));
    setTimeout(function(){
        window.location.href = "exibicao.html";
    }, 1000);
    
}
function funcaoMostrarPerfis(){
    var resposta = document.getElementById('resposta');
    var botao = document.getElementsByClassName('ferramenta-box')[1];
    var menu = document.getElementById('menu-de-perfis');
    
    var conteudo = "";
    var contador = 0;
    botao.classList.add('azulEfeito');
    if(bancoDados.perfis.length == 0){
        conteudo = `<h2>NENHUM PERFIL SALVO</h2>`;
        resposta.innerHTML = conteudo;
        resposta.style.display = 'block';
        setTimeout(function(){
            botao.classList.remove('azulEfeito');
            resposta.style.display = 'none';
        }, 1000);
    }
    else{
        //display none ----------
        document.getElementById('selecionados-ate-o-momento').style.display = "none";
        document.getElementById('menu-crud').style.display = "none";
        document.getElementById('ferramentas-crud').style.display = "none";
        document.getElementById('texto1').style.display = "none";
        document.getElementById('texto2').style.display = "none";
        //-------------
        document.getElementById('menu-de-perfis-texto').style.display = "block";
        for(var i in bancoDados.perfis){
            var perfil = bancoDados.perfis[i];
            var arrayDeCategorias = perfil.split('-');
            contador++;
            conteudo += `<div>
                            <h3>Perfil ${contador}</h3>`;
            for(var j in arrayDeCategorias){
                conteudo += `<p>${arrayDeCategorias[j]}</p>
                                `;
            }

            conteudo += `   <button onclick="funcaoMostrarFeed('${perfil}')"; type="button" class="verde ">Selecionar</button>
                            <button onclick="funcaoExcluirPerfil('${i}')"; type="button" class="vermelho">Excluir</button>
                        </div>`;
            
        }
        menu.innerHTML = conteudo;
    }
}

function funcaoExcluir(){
    var botao = document.getElementsByClassName('ferramenta-box')[2];
    botao.classList.add('vermelhoEfeito');
    
    if(posicaoParaExcluir == -1){
        window.alert('Nenhuma opção selecionada para ser excluída');
    }
    else{
        
        bancoDados.preferencias.splice(posicaoParaExcluir, 1);
        var funcaoMostrar = objetoOrganizarCategorias["mostrarArray"];
        funcaoMostrar();
        localStorage.setItem('results', JSON.stringify(bancoDados));
    }
    setTimeout(function(){
        botao.classList.remove('vermelhoEfeito');
    }, 2000);
}
function funcaoIncluirOpcao(indice){
    var opcao = document.getElementsByClassName('opcoes-escolha-box')[Number(indice)];
    opcao.classList.add('laranjaEfeito');
    var selecionado = arranjoDeCategoriasSelecionadas[indice];
    setTimeout(function(){
        opcao.classList.remove('laranjaEfeito');
    }, 2000);
    var funcao = objetoOrganizarCategorias["funcaoCategorizar"];
    funcao(indice);
}
var posicaoParaExcluir = -1;

var cont = 0;
function preSelecionado(indice){
    var opcao = document.getElementsByClassName('opcoes-selecionadas');
    cont++;
    if(cont == 1){
        posicaoParaExcluir = indice;
        opcao[posicaoParaExcluir].classList.add('laranjaEfeito');
    }
    else{
        
        opcao[posicaoParaExcluir].classList.remove('laranjaEfeito');
        posicaoParaExcluir = indice;
        opcao[indice].classList.add('laranjaEfeito');
    }
    
}