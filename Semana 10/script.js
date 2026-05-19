
        function criarTitulo(texto) {
            return "<h1 class=''>" + texto + "</h1>";
        }

        function criarParagrafo(texto) {
            return "<p class='texto-destaque'>" + texto + "</p>";
        }

        function criarBotao(texto) {
            return "<button class='botao-acao'>" + texto + "</button>";
        }



        function renderizarPagina() {

            var htmlFinal = criarTitulo("Bem-vindo ao Site!") + 
                            criarParagrafo("Este é um exemplo simples de componentes com JS.") + 
                            criarBotao("Clique Aqui");

            var divRoot = document.querySelector(".root");

            divRoot.innerHTML = htmlFinal;
        }

        renderizarPagina();
