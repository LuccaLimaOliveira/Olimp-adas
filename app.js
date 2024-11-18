function pesquisar() {
    // Acessa o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
   
    //Se campoPesquisa for uma string vazia...
    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum atleta encontrado! Você não digitou no campo</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado na lista de dados (supondo que 'dados' seja um array)
    for (let dado of dados) {  
        titulo = dado.titulo.toLowerCase() 
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase() 
        // Se titulo inclui em campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada dado e adiciona à string 'resultados'
            resultados += `
            <div class="item-resultado">
                <h2>
                     <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
      
    }

    if (!resultados) {
        resultados = "<p>Nenhum atleta encontrado!</p>"
    }

    // Atribui o conteúdo da string 'resultados' ao elemento HTML 'section'
    section.innerHTML = resultados;
}


