document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');
    const totalElement = document.getElementById('total');
    const carrinho = document.querySelector('#carrinho ul');
    let total = 0;
    produtos.forEach(produto => {
        const adicionarBtn = produto.querySelector('.btn-comprar');
        adicionarBtn.addEventListener('click', function() {
            const precoTexto = produto.querySelector('.preco').textContent;
            const preco = parseFloat(precoTexto.replace('Preço: R$ ', ''));

            const nome = produto.querySelector('.img-produtos').alt;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
            carrinho.appendChild(itemCarrinho);

            total += preco;
            totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

            document.getElementById('carrinho').classList.remove('escondido');

            alert(`DESEJA ADICIONAR O ITEM NO CARRINHO?\nTotal: R$ ${total.toFixed(2)}`);
        });
    });
});
