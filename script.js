
/* =================================
   CARROSSEL PROFISSIONAL
================================= */

// Seleciona a seção profissional
const secaoProfissional = document.querySelector("#sobre-profissional");

// Seleciona os slides e indicadores somente dessa seção
const slides = secaoProfissional.querySelectorAll(".slide-profissional");
const indicadores = secaoProfissional.querySelectorAll(".indicador");

// Seleciona as setas do carrossel profissional
const botaoAnterior = secaoProfissional.querySelector(".seta-carrossel.anterior");
const botaoProximo = secaoProfissional.querySelector(".seta-carrossel.proximo");

// Guarda o número do slide atual
let slideAtual = 0;

// Guarda o intervalo da troca automática
let intervaloProfissional;


// Mostra o slide selecionado
function mostrarSlide(indice) {

    // Esconde todos os slides
    slides.forEach((slide) => {
        slide.classList.remove("ativo");
    });

    // Remove o destaque de todos os indicadores
    indicadores.forEach((indicador) => {
        indicador.classList.remove("ativo");
    });

    // Mostra o slide escolhido
    slides[indice].classList.add("ativo");

    // Destaca o indicador correspondente
    indicadores[indice].classList.add("ativo");

    // Atualiza o número do slide atual
    slideAtual = indice;
}


// Avança para o próximo slide
function proximoSlide() {

    let proximo = slideAtual + 1;

    // Volta ao primeiro slide quando chega ao último
    if (proximo >= slides.length) {
        proximo = 0;
    }

    mostrarSlide(proximo);
}


// Volta para o slide anterior
function anteriorSlide() {

    let anterior = slideAtual - 1;

    // Vai para o último slide se estiver no primeiro
    if (anterior < 0) {
        anterior = slides.length - 1;
    }

    mostrarSlide(anterior);
}


// Inicia a troca automática
function iniciarCarrosselProfissional() {

    intervaloProfissional = setInterval(proximoSlide, 5000);

}


// Reinicia o tempo da troca automática
function reiniciarCarrosselProfissional() {

    clearInterval(intervaloProfissional);

    iniciarCarrosselProfissional();

}


// Evento do botão próximo
botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarCarrosselProfissional();

});


// Evento do botão anterior
botaoAnterior.addEventListener("click", () => {

    anteriorSlide();

    reiniciarCarrosselProfissional();

});


// Eventos dos indicadores
indicadores.forEach((indicador, indice) => {

    indicador.addEventListener("click", () => {

        mostrarSlide(indice);

        reiniciarCarrosselProfissional();

    });

});


// Inicia o carrossel profissional
mostrarSlide(0);

iniciarCarrosselProfissional();


/* =================================
   CARROSSEIS DA PARTE PESSOAL
================================= */

// Seleciona os dois carrosséis pessoais
const carrosseisPessoais = document.querySelectorAll(".bloco-pessoal");


// Configura cada carrossel separadamente
carrosseisPessoais.forEach((carrossel) => {

    // Seleciona as imagens e os indicadores deste carrossel
    const imagens = carrossel.querySelectorAll(".imagem-pessoal");
    const indicadores = carrossel.querySelectorAll(".indicador-pessoal");

    // Seleciona as setas deste carrossel
    const botaoAnterior = carrossel.querySelector(".seta-pessoal.anterior");
    const botaoProximo = carrossel.querySelector(".seta-pessoal.proximo");

    // Guarda a imagem que está sendo exibida
    let imagemAtual = 0;

    // Guarda o intervalo da troca automática
    let intervaloPessoal;


    // Mostra a imagem selecionada
    function mostrarImagem(indice) {

        // Esconde todas as imagens
        imagens.forEach((imagem) => {
            imagem.classList.remove("ativo");
        });

        // Desativa todas as bolinhas
        indicadores.forEach((indicador) => {
            indicador.classList.remove("ativo");
        });

        // Exibe a imagem selecionada
        imagens[indice].classList.add("ativo");

        // Ativa a bolinha correspondente
        indicadores[indice].classList.add("ativo");

        // Atualiza a imagem atual
        imagemAtual = indice;

    }


    // Avança para a próxima imagem
    function proximaImagem() {

        let proximo = imagemAtual + 1;

        // Volta para a primeira imagem ao chegar à última
        if (proximo >= imagens.length) {
            proximo = 0;
        }

        mostrarImagem(proximo);

    }


    // Volta para a imagem anterior
    function imagemAnterior() {

        let anterior = imagemAtual - 1;

        // Vai para a última imagem se estiver na primeira
        if (anterior < 0) {
            anterior = imagens.length - 1;
        }

        mostrarImagem(anterior);

    }


    // Inicia a troca automática
    function iniciarCarrosselPessoal() {

        intervaloPessoal = setInterval(proximaImagem, 5000);

    }


    // Reinicia o tempo quando alguém utiliza os controles
    function reiniciarCarrosselPessoal() {

        clearInterval(intervaloPessoal);

        iniciarCarrosselPessoal();

    }


    // Evento da seta para avançar
    botaoProximo.addEventListener("click", () => {

        proximaImagem();

        reiniciarCarrosselPessoal();

    });


    // Evento da seta para voltar
    botaoAnterior.addEventListener("click", () => {

        imagemAnterior();

        reiniciarCarrosselPessoal();

    });


    // Eventos das bolinhas
    indicadores.forEach((indicador, indice) => {

        indicador.addEventListener("click", () => {

            mostrarImagem(indice);

            reiniciarCarrosselPessoal();

        });

    });


    // Começa pela primeira imagem
    mostrarImagem(0);

    // Inicia a troca automática
    iniciarCarrosselPessoal();

});


/* =================================
   JANELA DE AVISO DOS PROJETOS
================================= */

// Seleciona a janela de aviso
const modalProjetos = document.querySelector("#modal-projetos");

// Seleciona todos os botões que abrem a janela
const botoesAbrirModal = document.querySelectorAll(".abrir-modal-projetos");

// Seleciona o botão que fecha a janela
const botaoFecharModal = document.querySelector("#fechar-projetos");


// Faz os dois botões abrirem a mesma janela
botoesAbrirModal.forEach((botao) => {

    botao.addEventListener("click", () => {

        modalProjetos.showModal();

    });

});


// Fecha a janela ao clicar no botão "Entendi!"
botaoFecharModal.addEventListener("click", () => {

    modalProjetos.close();

});


// Fecha a janela ao clicar fora dela
modalProjetos.addEventListener("click", (evento) => {

    if (evento.target === modalProjetos) {
        modalProjetos.close();
    }

});