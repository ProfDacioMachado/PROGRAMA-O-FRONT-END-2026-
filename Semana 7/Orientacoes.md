# Continuação da Atividade - Bichinho Virtual 

###  Baixem os arquivos do projeto.  
Para aqueles que não realizaram a 1˚ aula do projeto ou perderam seus arquivos, podem encontrar uma cópia do projeto do professro no repositorio da disciplina em __/Semana 7/atividade/__.   

Façam uma cópia de sua atividade ou do repositório do prof para finalizar a atvidade.  

#### Verifiquem os arquivos 
- Imagens geradas pela IA
    - Normal (inicio)
    - PUTO (Bravo)
    - MORTO (X)
    - COMENDO 
    - ALIMENTADO (FELIZ AMAVEL)
- HTML (Página com _NO MINIMO_ duas tags <img> )

- Alimentando nossa Criatura. 
-------------------------------------------------------------

De fato, precisamos ainda construir a funcão de alimentar nossa criatura, para que ela pare de morrer! 

Podemos fazer isso implementando a função alimentar.

#### 🍓 Função Alimentar

A função `alimentar()` é chamada quando o usuário clica no botão/imagem de comida.
---
Notem que precesimos garantir que em nosso __*HTML*__ o estjea com o atributo `onclick`realizando a chamada da função `alimentar()`

```HTML 
    <img 
        id="btnImage" src="btn_frut.png" onclick="alimentar()"
      />
```
--- 

Assim,  podemos implementar da seguinte forma a *função* `alimentar()` :

```javascript
function alimentar() {

    img.src = imagens.clicado;
    contador = 0;

    console.log("Comendo");

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        img.src = imagens.feliz;

        timeoutBack = setTimeout(() => {
            img.src = imagens.normal;
        }, 2000);

    }, 1000);
}
```
#### Resultado esperado

Sua criatura agora:

* Fica com fome com o tempo
* Muda de estado automaticamente
* Pode ser alimentada pelo usuário ao clicar na imagem da comida 
* "Sobrevive" se bem cuidada 
* Ressucita se for alimentada depois de morta 

---

### Desafio 

Se quiser melhorar ainda mais:
* Impedir alimentar após morte


---

## 🌍 Próxima Etapa - Criando o Ambiente da Criatura

---

Agora que nossa criatura está viva, ou morta, ou com fome, ou feliz,  vamos criar o **mundo onde ela vive**.

### Já que esse texto foi gerado por uma IA, nada melhor que gerar o  cenário com IA, CERTO ? 

Utilizando a **mesma IA** e de *preferencia continuando o mesmo chat* que você usou para criar a criatura, solicite a geração de uma imagem com o seguinte objetivo:

* Um **planeta ou ambiente fictício**
* Estilo semelhante ao da criatura (para manter consistência visual)
* **IMPORTANTE:** o **_centro da imagem deve estar livre_**, para que a criatura seja exibida por cima

 __Exemplo de prompt__:

```
Crie um cenário de um planeta fictício, com estilo fofo e simples, cores suaves, com elementos ao redor (montanhas, plantas, etc), mas deixando o centro da imagem vazio para posicionar um personagem. Fundo harmonioso e leve.
```

---

###  Colocando no seu Fundo 

Após gerar a imagem, salve-a no seu projeto (ex: `bg_d.png`).

Agora vamos aplicá-la como **fundo do site** usando __CSS__ e o aplicando na tag `<body>` através do atributo `style=" "`:

```html
<body style="
    background-image: url('background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
">
```

---

##### Melhorando pois tá feio pra molestia 

Essas propriedades garantem que:

* `background-size: cover;` → a imagem ocupa toda a tela
* `background-position: center;` → mantém o foco no centro
* `no-repeat` → evita repetição da imagem

__aplica ai__ 
---

#### Organização visual

Para que a criatura fique bem posicionada:

* Para isso podemos contar com o auxilo do tal do `[DaisyUI](https://daisyui.com/)` e utilizar as classes e componentes visuais dele.  

Exemplo simples:

```html
<div class="flex flex-col items-center w-full px-4">

    <img 
      id="mainImage"
      src="cria_norm.png"
      alt="Imagem principal"
      class="w-full max-w-md h-auto"
    />

    
    <div class="mt-12 flex justify-center w-full">

      <img 
        id="btnImage"
        src="btn_frut.png"
        alt="Botão"
        class="w-1/3 max-w-[180px] h-auto active:scale-95 transition"
        onclick="alimentar()"
      />

    </div>
```

__aplica ai__ 
---

###### Energumeno, não funcionou mesmo né, tu não importou o `[DaisyUI](https://daisyui.com/docs/cdn/)` para o pojeto né... 
```html
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> 
```
---
#### Aproveita qeu já abriu o `[DaisyUI](https://daisyui.com/components/avatar/)`

Cria uma interface bonitinha para nossa aplicação vai. Adicione componentes de UI que tornem ela bonita. 

```html
<body class="bg-pink-50 min-h-screen flex flex-col">
 
  <div class="w-full flex items-center justify-start p-4 gap-4">

    <div class="avatar">
      <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="cria_eat.png" />
      </div>
    </div>

    <input 
      type="text" 
      placeholder="Nome da criatura..." 
      class="input input-secondary"
    />

  </div>
```

---
#### Resultado esperado, e não alcançado. 

Ao final desta etapa:

* Sua página terá um **cenário completo**
* A criatura estará **centralizada**
* O fundo será **responsivo e adaptável**
* A experiência ficará mais próxima de um **jogo/interação visual**
* Temos itens de intreface como um avatar e um campo para dar um nome a criatura

---

### 🚀 Atividade 

* Criar versão **noturna** do cenário 🌙

---


#### 1. Gere a versão noturna do cenário

Utilize a mesma IA para criar uma nova imagem baseada no cenário atual, porém em versão noturna.

Exemplo de prompt:

```
Crie a versão noturna do mesmo cenário, com céu escuro, estrelas, iluminação suave e mantendo o centro da imagem livre.
```

Salve a imagem como, por exemplo: `background_noite.png`

---

#### 2. Defina os dois fundos no JavaScript

Adicione as variáveis:

```javascript
const fundoDia = "background.png";
const fundoNoite = "background_noite.png";
let horas = 0;
```

---

#### 3. Crie uma função para alternar o fundo

```javascript
function atualizarFundo() {
    if (horas) clearInterval(horas);

    horas = setInterval(() => {
    horas++;
    
    if (horas >= 12) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
    if(horas >=24) horas =0;

    }, 100);
}

```

---

###### Não chamou né ? 
Chama a função
```javascript
controle();
atualizarFundo();
```

---


#### 🚀 Desafio bônus

* Fazer transição suave entre dia e noite (CSS transition)
* Adicionar estrelas animadas
* Crie um botão com o `[DaisyUI](https://daisyui.com/components/toggle/)` para alternar entre dia e noite por ele.
* Seja criativo e dedicado, vale nota. 

---

## Já sabe né, sob no GIT.. 




* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 

*se chegou até aqui, adicione botão escondido na pagina com uma foto do Ferlini (Vulgo Gostozinho) na atividade que for entregue git e ganhe um ponto extra.*