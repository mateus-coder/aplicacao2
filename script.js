
function funcaoInicial(){
    var arrayDecat = bancoDados.perfilSelecionado.split('-');
    var destaques = document.getElementById('destaques');
    var esp = document.getElementById('esp');
    var cars = document.getElementById('cars');
    var eco = document.getElementById('eco');
    var bit = document.getElementById('bitcoin');
    var politics = document.getElementById('politics');
    //display none all
    destaques.style.display = "none";
    esp.style.display = "none";
    cars.style.display = "none";
    eco.style.display = "none";
    bit.style.display = "none";
    politics.style.display = "none";

    for(var i in arrayDecat){
        switch(`${arrayDecat[i]}`){
            case "bitcoin":
                bit.style.display = "block";
                loadNotBit();
                break;
            case "politics":
                politics.style.display = "block";
                loadNotPoli();
                break;
            case "cars":
                cars.style.display = "block";
                loadNotCars();
                break;
            case "economic":
                eco.style.display = "block";
                loadNotEconomic();
                break;
            case "sport":
                esp.style.display = "block";
                loadNotSport();
                break;
            case "headlines":
                destaques.style.display = "block";
                loadNotDestaques();
                break;
        }
    }
}

var dados = {
    "indice": 0,
    "categoria": 0
}
var db = JSON.parse(localStorage.getItem('db_fake'));

if(!db){
    db = dados;
}


function funcaoConteudo(indice, categoria){
    db.indice = Number(indice);
    db.categoria = categoria;
    localStorage.setItem('db_fake', JSON.stringify(db));
    setTimeout(function(){
        window.location.href = 'pg1.html';
    }, 5000);
    
}

function loadNotEconomic(){
    var url = `https://newsapi.org/v2/everything?q=economic&apiKey=e9b4fc19c40040019027457ac04d9695`;
    var xmlhttp=new XMLHttpRequest();
    var esquerdadecada = document.getElementsByClassName('esquerda')[3];
    var direitadecada = document.getElementsByClassName('direitaeco')[0];
    var somentetxt = document.getElementsByClassName('somentetxt')[6];
    var somentetxt1 = document.getElementsByClassName('somentetxt')[7];
    var noteprincipal = document.getElementsByClassName('notprincipal')[3];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let result4 = " ";
            let categoria = "economic";
            for(var i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(var j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(var v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        for(var g = 0; g < 3; g++){
            result4 += `    <div class="centro">
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result4;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}


function loadNotCars(){
    var url = `https://newsapi.org/v2/everything?q=cars&apiKey=e9b4fc19c40040019027457ac04d9695`;
    var xmlhttp=new XMLHttpRequest();
    var esquerdadecada = document.getElementsByClassName('esquerda')[2];
    var direitadecada = document.getElementsByClassName('direitacarros')[0];
    var somentetxt = document.getElementsByClassName('somentetxt')[4];
    var somentetxt1 = document.getElementsByClassName('somentetxt')[5];
    var noteprincipal = document.getElementsByClassName('notprincipal')[2];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let result4 = " ";
            let categoria = "cars";
            for(var i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiscarros">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="logocarros2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
            }
            for(var j = 0; j < 2; j++){
                result3 += `    <div>
                                    <img src=${dado.articles[j].urlToImage} alt="not1">
                                    <p>${dado.articles[j].title}</p>
                                </div>`;
            }
            for(var v = 0; v < 3; v++){
                result2 += `    <div>
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            for(var g = 0; g < 3; g++){
                result4 += `    <div class="centro">
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            esquerdadecada.innerHTML = result;
            direitadecada.innerHTML = result1;
            somentetxt.innerHTML = result2;
            noteprincipal.innerHTML = result3;
            somentetxt1.innerHTML = result4;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}

function loadNotSport(){
        var url = `https://newsapi.org/v2/everything?q=sport&apiKey=e9b4fc19c40040019027457ac04d9695`;
        var xmlhttp=new XMLHttpRequest();
        var esquerdadecada = document.getElementsByClassName('esquerda')[1];
        var direitadecada = document.getElementsByClassName('direitaesp')[0];
        var somentetxt = document.getElementsByClassName('somentetxt')[2];
        var somentetxt1 = document.getElementsByClassName('somentetxt')[3];
        var noteprincipal = document.getElementsByClassName('notprincipal')[1];
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4&&xmlhttp.status==200){
                var dado = JSON.parse(xmlhttp.responseText);
                let result = " ";
                let result1 = " ";
                let result2 = " ";
                let result3 = " ";
                let result4 = " ";
                let categoria = "sport";
                for(var i = 0; i < dado.articles.length; i++){
                    result += ` <div class="leiamais leiamaisesp">
                                    <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                    <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                    <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                                </div>`;

                        result1 += `<article class="blocos">
                                        <div>
                                            <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                        </div>
                                        <section>
                                            <img src="logoesporte2.png" alt="img">
                                            <p>Gostou, leia mais clicando abaixo.</p>
                                            <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                                <h1>Leia mais...</h1>
                                            </div>
                                        </section>
                                    </article>`;
                    }
                    for(var j = 0; j < 2; j++){
                        result3 += `    <div>
                                            <img src=${dado.articles[j].urlToImage} alt="not1">
                                            <p>${dado.articles[j].title}</p>
                                        </div>`;
                    }
                    for(var v = 0; v < 3; v++){
                        result2 += `    <div>
                                            <h1>${dado.articles[v].title}</h1>
                                            <p>${dado.articles[v].description}</p>
                                        </div>`;
                    }
                    for(var g = 0; g < 3; g++){
                        result4 += `    <div class="centro">
                                            <h1>${dado.articles[v].title}</h1>
                                            <p>${dado.articles[v].description}</p>
                                        </div>`;
                    }
                    esquerdadecada.innerHTML = result;
                    direitadecada.innerHTML = result1;
                    somentetxt.innerHTML = result2;
                    noteprincipal.innerHTML = result3;
                    somentetxt1.innerHTML = result4;
            }
        }
        xmlhttp.open("GET", url ,true); 
        xmlhttp.send();
    }

function loadNotDestaques(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e9b4fc19c40040019027457ac04d9695';
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let result4 = " ";
            let categoria = "destaques";
            var esquerdadecada = document.getElementsByClassName('esquerda')[0];
            var direitadecada = document.getElementsByClassName('direita')[0];
            var somentetxt = document.getElementsByClassName('somentetxt')[0];
            var somentetxt1 = document.getElementsByClassName('somentetxt')[1];
            var noteprincipal = document.getElementsByClassName('notprincipal')[0];
            for(var i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais">
                                <img src=${dado.articles[i].urlToImage} alt=${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo(${i}, '${categoria}')">Leia mais...</h1>
                            </div>`;

                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="logodestaques2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo(${i}, '${categoria}')">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
            }
            for(var j = 0; j < 2; j++){
                result3 += `    <div>
                                    <img src=${dado.articles[j].urlToImage} alt="not1">
                                    <p>${dado.articles[j].title}</p>
                                </div>`;
            }
            for(var v = 0; v < 3; v++){
                result2 += `    <div>
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            for(var g = 0; g < 3; g++){
                result4 += `    <div class="centro">
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            esquerdadecada.innerHTML = result;
            direitadecada.innerHTML = result1;
            somentetxt.innerHTML = result2;
            noteprincipal.innerHTML = result3;
            somentetxt1.innerHTML = result4;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}



function loadNotBit(){
    var url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=e9b4fc19c40040019027457ac04d9695`;
    var xmlhttp=new XMLHttpRequest();
    var esquerdadecada = document.getElementsByClassName('esquerda')[4];
    var direitadecada = document.getElementsByClassName('direitabit')[0];
    var somentetxt = document.getElementsByClassName('somentetxt')[8];
    var somentetxt1 = document.getElementsByClassName('somentetxt')[9];
    var noteprincipal = document.getElementsByClassName('notprincipal')[4];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let result4 = " ";
            let categoria = "bitcoin";
            for(var i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(var j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(var v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        for(var g = 0; g < 3; g++){
            result4 += `    <div class="centro">
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result4;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}



function loadNotPoli(){
    var url = `https://newsapi.org/v2/everything?q=politics&apiKey=e9b4fc19c40040019027457ac04d9695`;
    var xmlhttp=new XMLHttpRequest();
    var esquerdadecada = document.getElementsByClassName('esquerda')[5];
    var direitadecada = document.getElementsByClassName('direitapoli')[0];
    var somentetxt = document.getElementsByClassName('somentetxt')[9];
    var somentetxt1 = document.getElementsByClassName('somentetxt')[10];
    var noteprincipal = document.getElementsByClassName('notprincipal')[5];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let result4 = " ";
            let categoria = "bitcoin";
            for(var i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(var j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(var v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        for(var g = 0; g < 3; g++){
            result4 += `    <div class="centro">
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result4;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}