// Pega o elemento que mostra o número na tela
const numero = document.querySelector('.contador-numero');

// Pega o botão de aumentar
const btnPositivo = document.querySelector('.botao-positivo');

// Pega o botão de diminuir
const btnNegativo = document.querySelector('.botao-negativo');

// Pega o botão de reiniciar
const btnReiniciar = document.querySelector('.botao-reiniciar');


// Cria a variável que guarda o valor do contador
let valor = 0;

// Cria uma variável para guardar o intervalo do setInterval
let intervalo;


// Quando clicar no botão positivo
btnPositivo.addEventListener("click", () => {

    // Aumenta o valor em 1
    valor++;

    // Mostra o novo valor na tela
    numero.textContent = valor;
});


// Quando apertar o botão positivo do mouse
btnPositivo.addEventListener('mousedown', () => {

    // Começa a repetir o código várias vezes
    intervalo = setInterval(() => {

        // Aumenta o valor em 1
        valor = valor + 1;

        // Atualiza o número na tela
        numero.textContent = valor;

    // Repete a cada 100 milissegundos
    }, 100);
});


// Quando soltar o botão do mouse
btnPositivo.addEventListener('mouseup', () => {

    // Para o setInterval
    clearInterval(intervalo);
});


// Quando clicar no botão negativo
btnNegativo.addEventListener("click", () => {

    // Diminui o valor em 1
    valor--;

    // Mostra o novo valor na tela
    numero.textContent = valor;
});


// Quando apertar o botão negativo do mouse
btnNegativo.addEventListener('mousedown', () => {

    // Começa a repetir o código várias vezes
    intervalo = setInterval(() => {

        // Diminui o valor em 1
        valor = valor - 1;

        // Atualiza o número na tela
        numero.textContent = valor;

    // Repete a cada 100 milissegundos
    }, 100);
});


// Quando soltar o botão do mouse
btnNegativo.addEventListener('mouseup', () => {

    // Para o setInterval
    clearInterval(intervalo);
});


// Quando clicar no botão reiniciar
btnReiniciar.addEventListener("click", () => {

    // Para o intervalo, caso esteja funcionando
    clearInterval(intervalo);

    // Volta o valor para zero
    valor = 0;

    // Mostra zero na tela
    numero.textContent = valor;
});