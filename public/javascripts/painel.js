var dadosCadastrais = document.querySelector('.dadoscadastrais');

var nome = document.getElementById('validationDefault01');
var sobrenome = document.getElementById('validationDefault02');
var email = document.getElementById('validationDefault03');
var cpf = document.getElementById('validationDefault04');
var endereco = document.getElementById('validationDefault05');
var numero = document.getElementById('validationDefault06');
var bairro = document.getElementById('validationDefault07');
var cidade = document.getElementById('validationDefault08');
var estado = document.getElementById('validationDefault09');
var cep = document.getElementById('validationDefault10');
//var condicoes = document.getElementById('invalidCheck2');


dadosCadastrais.onsubmit = function(evento){
    var erroEncontrado = false;

if(nome.value.length === 0){
    erroEncontrado = true;
}
if(sobrenome.value.length === 0){
    erroEncontrado = true;
}
if(email.value.length === 0){
    erroEncontrado = true;
}
if(cpf.value.length === 0){
    erroEncontrado = true;
}
if(endereco.value.length === 0){
    erroEncontrado = true;
}
if(numero.value.length === 0){
    erroEncontrado = true;
}
if(bairro.value.length === 0){
    erroEncontrado = true;
}
if(cidade.value.length === 0){
    erroEncontrado = true;
}
if(estado.value.length === 0){
    erroEncontrado = true;
}
if(cep.value.length === 0){
    erroEncontrado = true;
}
//if(condicoes.value.length === 0){
//    erroEncontrado = true;
//}
if(erroEncontrado == true){
    evento.preventDefault();
}

}
