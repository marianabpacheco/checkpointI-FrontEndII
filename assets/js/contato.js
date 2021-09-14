//Criação de formulário de contato

const formularioContato = document.getElementById('formularioContato');


function inserirForm(){
    
    formularioContato.innerHTML  += `<section id="contactSection">
                                            <form action="#" method="post" id="contactForm">
                                                    <h2>Contato</h2>
                                                    <label for="contactName">Nome</label>
                                                    <input type="text " name="contactName" id="contactName" placeholder="Digite aqui seu nome completo">
                                                    <label for="email">E-mail</label>
                                                    <input type="email" name="contactEmail" id="contactEmail"  placeholder="seuemail@provedor.com">
                                                    <label for="titulo">Título</label>
                                                    <input type="text" name="contactTitle" id="contactTitle" placeholder="Digite o título do assunto" >
                                                    <label for="mensagem">Mensagem</label>
                                                    <textarea name="mensagem" id="mensagem" placeholder="Digite aqui sua mensagem"></textarea>
                                                    <button type="submit" id="enviarContato">Enviar</button>
                                                
                                            </form>
                                    </section>`
                                ;

                                
    }

 


//Criação da seção com informativos sobre a equipe

const sobre = document.getElementById('secaoSobre');

function inserirSobre(){
    sobre.innerHTML += `<section id="sobreSection">
                                <article id="sobreCard">
                                    <h3>Felipe Soares Araújo</h3>
                                    <div class="imgPerfil">
                                        <img src="./img/felipe.jfif" alt="Foto do Felipe">
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.linkedin.com/in/felipemotion/" target="blank">
                                            <img src="./img/linkedin.png" alt="Ícone de LinkedIn">
                                        </a>
                                        <a href="https://github.com/Felipe-SoaresAraujo" target="blank">
                                            <img src="./img/github.png" alt="Ícone do GitHub">
                                        </a>
                                    </div>
                                </article>
                                
                                <article id="sobreCard">
                                     <h3>Guilherme Santos</h3>
                                    <div class="imgPerfil">
                                        <img src="./img/gui.jpg" alt="Foto do Guilherme">
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.linkedin.com/in/guilherme-santos-38b562206/" target="blank">
                                                <img src="./img/linkedin.png" alt="Ícone de LinkedIn">
                                        </a>
                                        <a href="https://github.com/guilherme-sik" target="blank">
                                            <img src="./img/github.png" alt="Ícone do GitHub">
                                        </a>
                                    </div>
                                </article>
                                <article id="sobreCard">
                                <h3>Jennifer Mayumi</h3>
                                <div class="imgPerfil">
                                    <img src="./img/jenni.jfif" alt="Foto da Jennifer">
                                </div>
                                <div class="icons">
                                    <a href="https://www.linkedin.com/in/mundodajeje/" target="blank">
                                        <img src="./img/linkedin.png" alt="Ícone de LinkedIn">
                                    </a>
                                    <a href="https://github.com/jennimay" target="blank">
                                        <img src="./img/github.png" alt="Ícone do GitHub">
                                    </a>
                                </div>
                            </article>
                                <article id="sobreCard">
                                    <h3>Mariana Pacheco</h3>
                                    <div class="imgPerfil">
                                        <img src="./img/eu.jpg" alt="">
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.linkedin.com/in/marianabpacheco" target="blank">
                                            <img src="./img/linkedin.png" alt="Ícone de LinkedIn">
                                        </a>
                                        <a href="https://github.com/marianabpacheco" target="blank">
                                            <img src="./img/github.png" alt="Ícone do GitHub">
                                        </a>
                                    </div>
                                </article>
                        </section>`

}
