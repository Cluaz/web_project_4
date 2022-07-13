// Vamos descobrir o formulário no DOM
let formElement = // Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugara nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
    // Esta linha impede o navegador 
    // de enviar o formulário da forma padrão.
    evt.preventDefault();
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM
    let nameInput = // Use querySelector()
    let jobInput = // Use querySelector()

    // Pegue os valores de cada campo do valor de propriedade correspondente

    // Selecione elementos onde os valores de campo serão inseridos

    // Insira novos valores usando textContent
    // propriedade do método querySelector()
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);