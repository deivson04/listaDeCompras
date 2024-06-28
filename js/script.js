
let adicione = document.getElementById("adc");
let zap = document.getElementById("enviar");

let lista_produtos = JSON.parse(localStorage.getItem('lista_produtos')) || [];

let atualizarLista = () => {
    let li = '';

    for (let i = 0; i < lista_produtos.length; i++) {
        li += '<li>' + lista_produtos[i] + '</li>';
        li += '<button class="btn btn-secondary btn-sm" onclick="remove(' + i + ')">Remover</button>';
    }

    lista.innerHTML = li;

};


let adicionar = () => {
    let produtoInput = document.getElementById('produto');
    let produto = produtoInput.value.trim();

    if (produto !== '') {
        showAlert(' Produto adicionado com sucesso!', 'success');

        lista_produtos.push(produto);

        localStorage.setItem('lista_produtos', JSON.stringify(lista_produtos));

        produtoInput.value = '';


        atualizarLista();

    } else {
        showAlert('digite um produto válido.', 'danger');
    }
};


let remove = (key) => {
    lista_produtos.splice(key, 1);
    localStorage.setItem('lista_produtos', JSON.stringify(lista_produtos));

    showAlert('removido com sucesso!', 'success');

    atualizarLista();
};

let enviarViaWhatsapp = () => {
    if (lista_produtos.length == 0) {
        showAlert('A lista está vazia!', 'danger');
        return;
    }

    let mensagem = 'Lista de produtos:\n' + lista_produtos.join('\n');
    let link = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(mensagem);
    window.open(link, '_blank');

};

let showAlert = (mensagem, typer) => {
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + typer;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = mensagem;

    document.body.insertBefore(alertDiv, document.body.firstChild);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
};

adicione.onclick = () => {
    adicionar();
}
zap.onclick = () => {
    enviarViaWhatsapp();
}

atualizarLista();










