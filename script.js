const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Aternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "qual pokemon o ash capturou primeiro?",
        alternativas: [
            {
                texto:"caterpi",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"kakuna",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "quando o ash se atrasou qual pokémon o ash pegou primeiro?",
        alternativas: [
            {
                texto:"pikachu",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"charmander",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "qual jogo de pokemon foi lançado primeiro?",
        alternativas: [
            {
                texto:"red e grem",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"yellow soul cristal",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "qual foi o primeiro remake de pokémon?",
        alternativas: [
            {
                texto:"pokemon fire red e leaf grem",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"soul silver heart gold",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "qual foi o ano que lansou pokemon red e grem?",
        alternativas: [
            {
                texto:"1996",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"1998",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]

let atual=0;
let perguntaAtual;
let historiafinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtua=perguntas[atual];
    caixaAlternativas.textContent=perguntaAtual.enunciado;
    mostraAlternativas();

}
function mostraAlternativas()
for (const alternativa o perguntaAtual.alternativas){
    const botaoAlternativas=document.createElement("button")
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSeleciona (alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);


}
    
}