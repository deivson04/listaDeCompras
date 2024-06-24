
let adicione = document.getElementById("adc");
let zap = document.getElementById("enviar");

let lista_produtos = JSON.parse(localStorage.getItem('lista_produtos')) || [];

let atualizarLista = () => {
     let li = '';
  
  for(let i = 0; i < lista_produtos.length; i++){
 li += '<li>' + lista_produtos[i] + '</li>';
 li += '<button class="btn btn-secondary btn-sm" onclick="remove(' + i + ')">Remover</button>';
}

lista.innerHTML = li; 

};


 let adicionar = () =>{
 let produtoInput = document.getElementById('produto');
 if(produtoInput.value.trim() !== ''){
     alert(' Produto adicionado com sucesso!');
 }else {
     alert("Digite um produto válido!")
 }
 
 let produto = produtoInput.value.trim();
 
 if (produto) {
    lista_produtos.push(produto);
    localStorage.setItem('lista_produtos',JSON.stringify(lista_produtos));
    produtoInput.value = '';
 }
    
atualizarLista();
  
};

let remove = (key) => {
    lista_produtos.splice(key,1);
    localStorage.setItem('lista_produtos',JSON.stringify(lista_produtos));
    
    atualizarLista();
};

let enviarViaWhatsapp = () => {
    if(lista_produtos.length == 0) {
    alert('A lista está vazia!');
        return;
   }
    
    let mensagem = 'Lista de produtos:\n' + lista_produtos.join('\n'); 
    let link = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(mensagem);
 window.open(link, '_blank');  
    
};

adicione.onclick = () =>{
    adicionar(); 
}
zap.onclick = () =>{
    enviarViaWhatsapp();
}

atualizarLista();



    
  





