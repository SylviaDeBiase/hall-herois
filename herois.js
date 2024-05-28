let max = 8000;
let min = 500;
let heroi = [["Nome do Herói","Pontos de Experiência"],["Mr. FuzzyLens", 12967]];
let sorteio =1;

imprimirMatriz(); //Imprime a matriz dos Heróis cadastrados

// Janela sorteio de XP
function xpPopup() {
    document.getElementById('atribuiXpModal').style.display = "block";
}

// *** sorteia e atribui a quantidade de pontos escolhido no pop
function atribuiXp(pontos) {
    sorteio = parseInt(Math.floor(Math.random() * (heroi.length-1)) + 1);
    let pontosAtuais=heroi[sorteio][1];
    pontosAtuais=pontosAtuais+pontos;
    heroi[sorteio][1]=pontosAtuais;
    imprimirMatriz();
    avisoPontos(pontos);
}

// *** Pop-up de aviso de quantos pontos foram atribuídos, para quem e nível atingido
function avisoPontos(pontos){
    closePopup()
    document.getElementById('modalAvisoText').innerText = "O herói "+ heroi[sorteio][0] + " acaba de ganhar " + pontos + " pontos de experiência, agora ele tem " + heroi[sorteio][1] + " pontos ";
    document.getElementById('avisoXpModal').style.display = "block";
    let tabelaContainer = document.getElementById('container');
    tabelaContainer.innerHTML = heroi[sorteio][0] + " ganhou experiência! O Herói está no nível de " + nivel();
}
// fim acrescimo de XP

//Define o Nível do Herói
function nivel() {
  
    let nivel = " ";
    let xp = heroi[sorteio][1];
    switch (true) {
        case (xp > 1000 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp > 2000 && xp <= 5000):
            nivel = ("Prata");
            break;
        case (xp > 5000 && xp <= 7000):
            nivel =("Ouro");
            break;
        case (xp > 7.000 && xp <= 8.000):
            nivel =("Platina");
            break;
        case (xp > 8000 && xp <= 9000):
            nivel =("Ascendente");
            break;
        case (xp > 9000 && xp <= 10000):
            nivel =("Imortal");
            break;
        case (xp > 10000):
            nivel =("Radiante");
            break;           
        default:
            nivel =("Ferro");
    }
    return nivel;
}

//Janela de cadastro de Heroi
function cadastraHeroiPopup() {
    document.getElementById('cadastraHeroiModal').style.display = "block";
}
// *** Função para atualizar a tabela
function adicionarValores(event) {
    event.preventDefault();
    
    let nomeHeroi = document.getElementById('nomeHeroi').value;
    let valor = Math.floor(Math.random() * (max - min + 1)) + min;

    heroi.push([nomeHeroi, valor]);
    
    document.getElementById('nomeHeroi').value = '';
    imprimirMatriz();
    closePopup()
}
document.getElementById('form-adicionarHeroi').addEventListener('submit', adicionarValores);
// Final cadastro de personagem

// Função para imprimir a matriz na tela principal
function imprimirMatriz() {
    let tabelaContainer = document.getElementById('tabela-container');
    tabelaContainer.innerHTML = '';
    let tabela = document.createElement('table');

    for (let i = 0; i < heroi.length; i++) {
        let linha = document.createElement('tr');

        for (let j = 0; j < heroi[i].length; j++) {
            let celula = document.createElement('td');
            celula.textContent = heroi[i][j];
            linha.appendChild(celula);
        }
        tabela.appendChild(linha);
    }
    tabelaContainer.appendChild(tabela);
}

// Fecha o modal
function closePopup() {
    document.getElementById('cadastraHeroiModal').style.display = "none";
    document.getElementById('atribuiXpModal').style.display = "none";
    document.getElementById('avisoXpModal').style.display = "none";
}

// Feche o modal se o usuário clicar fora dele
window.onclick = function(event) {
    var modals = ['modal', 'cadastraHeroiModal', 'atribuiXpModal'];
    for (var i = 0; i < modals.length; i++) {
        var modal = document.getElementById(modals[i]);
        if (event.target == modal) {
            modal.style.display = "none";
            break;
        }
    }
}
