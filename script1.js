var db = JSON.parse(localStorage.getItem('db_fake'));

if(db.categoria != 'sport' && db.categoria != 'economic' && db.categoria != 'cars'){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e9b4fc19c40040019027457ac04d9695';
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let indice = Number(db.indice);
            var meio = document.getElementsByClassName('meio')[0];
            var direita = document.getElementsByClassName('direita')[0];
            
            result += ` <div>
                            <img src=${dado.articles[indice].urlToImage} alt="esporte" width="100%">
                            <h1>Notícia detalhada</h1>
                        </div>
                        <div>
                            <h2>${dado.articles[indice].title}</h2>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                        </div>
                        
                        <a href=${dado.articles[indice].url}>
                            <aside class=link>
                                <p>Link da notícia no site original !!!</p>
                            </aside>
                        </a>`;

                        
            for(var i = 3; i < 6; i++){
                result1 += `<div>
                                <h1>${dado.articles[i].title}</h1>
                                <img src=${dado.articles[i].urlToImage} alt="esporte1" width="100%">
                                <p>${dado.articles[i].description}</p>
                            </div>`;
            }
            
            meio.innerHTML = result;
            direita.innerHTML = result1;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}
else{
    var url = `https://newsapi.org/v2/everything?q=${db.categoria}&apiKey=e9b4fc19c40040019027457ac04d9695`;
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let indice = Number(db.indice);
            var meio = document.getElementsByClassName('meio')[0];
            var direita = document.getElementsByClassName('direita')[0];
            
            result += ` <div>
                            <img src=${dado.articles[indice].urlToImage} alt="esporte" width="100%">
                            <h1>Notícia detalhada</h1>
                        </div>
                        <div>
                            <h2>${dado.articles[indice].title}</h2>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                            <p>${dado.articles[indice].content}</p>
                        </div>
                        
                        <a href=${dado.articles[indice].url}>
                            <aside class=link>
                                <p>Link da notícia no site original !!!</p>
                            </aside>
                        </a>`;

                        
            for(var i = 3; i < 6; i++){
                result1 += `<div>
                                <h1>${dado.articles[i].title}</h1>
                                <img src=${dado.articles[i].urlToImage} alt="esporte1" width="100%">
                                <p>${dado.articles[i].description}</p>
                            </div>`;
            }
            
            meio.innerHTML = result;
            direita.innerHTML = result1;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}