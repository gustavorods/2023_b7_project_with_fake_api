/* URL da API: https://jsonplaceholder.typicode.com/posts */


// Pegando os post "recentes" (como é uma API fake, pegamos os posts que a própria API fornece)
async function readPost() {
    let postsArea = document.querySelector(".posts");
    postsArea.innerHTML = "Carregando...";

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json(); 

        if(json.length > 0) {
            postsArea.innerHTML = ' ';
        
            for(let i in json) {
                let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`;
                
                postsArea.innerHTML += postHTML;
                /* A forma mais otimizada de adicionar essas informações é por meio do append, pq sempre que um novo post for adicinado por meio do innerHTML, o inner
                tira tudo da memoria e recoloca tudo de novo na memória, ate completar todos os post, ja o append só adiciona 
                Ex com inner: 
                - adiciona o primeiro post
                - no segundo post ele exclui o primeiro da MEMORIA e recoloca de novo na memoria, soq dessa vez adicionando o segundo post.     
                */

            }
        }   
        else {
            postsArea.innerHTML = "Nenhum post para exibir.";
        }   
}

// Função de adicionar os post
async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId:2
            })
        }
    );

    document.querySelector("#titleField").value = '';
    document.querySelector("#bodyField").value = '';

    readPost();
}



// Adicionando os novos posts
document.querySelector("#inserirButton").addEventListener("click", () => {
    let title = document.querySelector("#titleField").value;
    let body = document.querySelector("#bodyField").value;

    if(title && body) {
        addNewPost(title, body)
    }
    else {
        alert("Preencha todos os campos")
    }
});



readPost()
