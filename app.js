

let listaDeNumerosSorteados = [];
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
let tentativas = 0;


exibirMensagemInicial();




function verificarChute() {
    
    let chute = document.querySelector('input').value;

    tentativas++;

    if( chute == numeroSecreto ){
        exibirTextoNoTela('h1', `Acertou!`);
        let mensagemTentativas = tentativas > 1 ? `Você descobriu o número secreto, com ${tentativas} tentativas!` :  
        `Você descobriu o número secreto, com ${tentativas} tentativa !`;
        exibirTextoNoTela('p', mensagemTentativas );

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        
        if( chute > numeroSecreto){
            exibirTextoNoTela('p', `O número secreto é menor do que ${chute}.` );
        }else{
            exibirTextoNoTela('p', `O número secreto é maior do que ${chute}.`);
        }

        limparCampo();
    }   
    
}

function reiniciarJogo() {
    
    numeroSecreto = gerarNumeroAleatorio( numeroMaximo );
    limparCampo();
    exibirMensagemInicial();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);

    
    
}

function exibirTextoNoTela( tag, texto ) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', {rate: 1.2} );
}

function gerarNumeroAleatorio( numeroMaximo ) {

    let numeroEscolhido =  parseInt( Math.random() * numeroMaximo + 1 ); 

    if( listaDeNumerosSorteados.length == numeroMaximo ){
        listaDeNumerosSorteados = [];
    }

    if( listaDeNumerosSorteados.includes( numeroEscolhido ) ){
        return gerarNumeroAleatorio( numeroMaximo );
    }else{
        listaDeNumerosSorteados.push( numeroEscolhido );
        return numeroEscolhido;
    }

    
    
}

function limparCampo() {

    chute = document.querySelector('input');   

    chute.value = '';
    
}

function exibirMensagemInicial() {
    exibirTextoNoTela('h1', 'Jogo do número secreto');
    exibirTextoNoTela('p', `Escolha um número 1 e ${numeroMaximo}`);
}