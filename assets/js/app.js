
let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //pegando os valores adicionados nos inputs pelo usuário
    let titulo = document.getElementById("titulo").value;
    let urlImg = document.getElementById("urlImg").value;
    let receita = document.getElementById("receita").value;
    let ingredientes = document.getElementById("ingredientes").value

    //imprimindo na página - criando o card com os valores que o usuário adicionou no formulário
    let card = document.querySelector(".containerCard");
    card.innerHTML += `<article class="card">
                            <div class="divImg">
                                <img src="${urlImg}" alt="">
                            </div>
                            <div class="informacoes">
                                <h2 class="tituloCard">${titulo}</h2>
                                <h3 class="tituloIngredientes">Ingredientes</h3>
                                <article class="ingredientesCard">
                                    <p>${ingredientes}</p>
                                </article>
                                <h3 class="modoPreparo">Modo de Preparo</h3>
                                <p>${receita}</p>
                            </div>
                        </article>`

    
    document.querySelector(".sectionForm").style.display = "none";

   
    document.getElementById("titulo").value = "";
    document.getElementById("urlImg").value = "";
    document.getElementById("receita").value = "";
    document.getElementById("ingredientes").value = "";

});

// abrir formulário através do botão "adicionar receita" 
let adicionarReceita = document.getElementById("adicionarReceita");


adicionarReceita.addEventListener("click", () => {
    document.querySelector(".sectionForm").style.display = "block";
    
});

 /* fechar formulário através do botão "cancelar"*/
let btnCancelar = document.getElementById("btnCancelar");

btnCancelar.addEventListener("click", () => {
        document.querySelector(".sectionForm").style.display = "none";
      
});

