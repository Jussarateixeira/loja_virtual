//Pegando elementos do HTML
//Seleciona todos os elementos no HTML que possuem a classe CSS 'produtos' e armazena-os em uma NodeList chamada produtos.
const produtos = document.querySelectorAll('.produtos');
//Obtém o elemento do HTML com o ID 'total' e armazena-o na variável totalElement
const totalElement = document.getElementById('total');
//Seleciona o elemento <ul> dentro do elemento com o ID 'carrinho' e armazena-o na variável carrinho.
const carrinho = document.querySelector('#carrinho ul'); 

let total = 0;

//logica do carrinho de compras
document.addEventListener('DOMContentLoaded', function() {
    //Itera sobre cada elemento na NodeList produtos usando a função forEach.
    produtos.forEach(produto => {
        //Dentro do loop, seleciona o botão de adicionar para cada produto.
        const adicionarBtn = produto.querySelector('.btn-comprar');
        //Adiciona um ouvinte de eventos para o clique no botão de adicionar.
        adicionarBtn.addEventListener('click', function() {
            //Obtém o texto do elemento com a classe 'preco' dentro do produto.
            const precoTexto = produto.querySelector('.preco').textContent;
            //Converte o texto do preço para um número de ponto flutuante, removendo o texto "Preço: R$ ".
            const preco = parseFloat(precoTexto.replace('Preço: R$ ', ''));
            //Obtém o texto alternativo da imagem do produto.
            const nome = produto.querySelector('.img-produtos').alt;
            //adicionando itens ao carrinho - Cria um novo elemento <li>. 
            const itemCarrinho = document.createElement('li');
            //Define o texto do elemento <li> com o nome do produto e o preço formatado.
            itemCarrinho.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
            //Adiciona o elemento <li> ao carrinho.
            carrinho.appendChild(itemCarrinho);
            //Atualiza o total somando o preço do produto.
            total += preco;
            //Atualiza o texto do elemento total no HTML com o novo valor total formatado.
            totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

            document.getElementById('carrinho').classList.remove('escondido');

            alert(`DESEJA ADICIONAR O ITEM NO CARRINHO?\nTotal: R$ ${total.toFixed(2)}`);
        });
    });
});

//função para confirmar compras
function confirmarCompra(){
    window.alert(`Compra no valor de R$${total} efetuada com sucesso!`);
    location.reload();
}
