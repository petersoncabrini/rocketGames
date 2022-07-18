//alert('ok')

//var dadosCadastrais = document.querySelector('.dadoscadastrais');
//
//var nome = document.getElementById('validationDefault01');
//var sobrenome = document.getElementById('validationDefault02');
//var email = document.getElementById('validationDefault03');
//var cpf = document.getElementById('validationDefault04');
//var endereco = document.getElementById('validationDefault05');
//var numero = document.getElementById('validationDefault06');
//var bairro = document.getElementById('validationDefault07');
//var cidade = document.getElementById('validationDefault08');
//var estado = document.getElementById('validationDefault09');
//var cep = document.getElementById('validationDefault10');

var form = document.querySelector('.dadoscadastrais', 'admin', 'bloco2', '.form');


// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();




//dadosCadastrais.onsubmit = function(evento){
//    var erroEncontrado = false;
//
//
//
//if(nome.value.length === 0){
//    erroEncontrado = true;
//    var erroNome = nome.parentElement.querySelector('.invalid-feedback');
//    erroNome.innerText = 'Seu nome é obrigatório';
//    console.log('nome obrigatorio');
//}
//if(sobrenome.value.length === 0){
//    erroEncontrado = true;
//    var erroSobrenome = nome.parentElement.querySelector('.invalid-feedback');
//    erroSobrenome.innerText = 'Seu Sobrenome é obrigatório';
//    console.log('sobrenome obrigatorio');
//}
//if(email.value.length === 0){
//    erroEncontrado = true;
//}
//if(cpf.value.length === 0){
//    erroEncontrado = true;
//}
//if(endereco.value.length === 0){
//    erroEncontrado = true;
//}
//if(numero.value.length === 0){
//    erroEncontrado = true;
//}
//if(bairro.value.length === 0){
//    erroEncontrado = true;
//}
//if(cidade.value.length === 0){
//    erroEncontrado = true;
//}
//if(estado.value.length === 0){
//    erroEncontrado = true;
//}
//if(cep.value.length === 0){
//    erroEncontrado = true;
//}
////if(condicoes.value.length === 0){
////    erroEncontrado = true;
////}
//if(erroEncontrado == true){
//    evento.preventDefault();
//}
//
//}

