function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa=document.getElementById("campo-pesquisa").value

    //Se campoPesquisa for uma string sem nada
    if(campoPesquisa==""){
        section.innerHTML="<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa=campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let título="";
    let descricao="";
    let tags="";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        título=dado.título.toLowerCase()
        descricao=dado.descrição.toLowerCase()
        tags=dado.tags.toLowerCase()

        //Se titulo includes campoPesquisa
        if (título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento 
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.título}</a></h2>
                <p class="descricao-meta">
                    ${dado.descrição}
                </p>
                <a href=${dado.link} target="_blank" >Mais informações</a>
            </div>`;
        }
        //então faça...
        console.log(dado.título.includes(campoPesquisa))
        // Constrói o HTML para cada item do resultado da pesquisa,
        // incluindo título, descrição e link
        
    }
    //Se campoPesquisa for uma string sem nada
    if(!resultados){
        resultados="<p>Nada foi encontrado. Você precisa digitar uma palavra relacionada a sua pesquisa.</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}