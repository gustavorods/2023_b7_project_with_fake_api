// https://jsonplaceholder.typicode.com/posts


async function readPost() {
    let postsArea = document.querySelector(".posts");
    postsArea.innerHTML = "Carregando...";

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json(); 

    if(json.length > 0) {
        postsArea.innerHTML = ' ';
        
        for(let i in json) {
            let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`
            
            postsArea.innerHTML += postHTML 
            /* A forma mais otimizada de adicionar essas informações é por meio do append, pq sempre que um novo post for adicinado por meio do innerHTML, o inner
            tira tudo da memoria e recoloca tudo de novo na memória, ate completar todos os post, ja o append só adiciona 
            Ex com inner: 
            - adiciona o primeiro post
            - no segundo post ele exclui o primeiro da MEMORIA e recoloca de novo na memoria, soq dessa vez adicionando o segundo post.     
            */

        }
    }
    else {
        postsArea.innerHTML = "Nenhum post para exibir."
    }   
}

readPost()
