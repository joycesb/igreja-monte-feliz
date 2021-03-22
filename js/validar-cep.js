function limpa_formulário_cep() {

    document.getElementById('inputAddress').value=("");
    document.getElementById('inputBairro').value=("");
    document.getElementById('inputCity').value=("");
    document.getElementById('inputUF').value=("");
}
function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('inputAddress').value=(conteudo.logradouro);
    document.getElementById('inputBairro').value=(conteudo.bairro);
    document.getElementById('inputCity').value=(conteudo.localidade);
    document.getElementById('inputUF').value=(conteudo.uf);

} 
else {

    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function mascaraCep(){
    var cep = document.getElementById('inputCEP').value;

     if(cep.length==5){
      document.getElementById('inputCEP').value = cep +'-';
 }
}

function pesquisacep(valor) {


var cep = valor.replace(/\D/g, '');


if (cep != "") {


    var validacep = /^[0-9]{8}$/;


    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('inputAddress').value="...";
        document.getElementById('inputBairro').value="...";
        document.getElementById('inputCity').value="...";
        document.getElementById('inputUF').value="...";



        var script = document.createElement('script');


        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';


        document.body.appendChild(script);

    } 
    else {

        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
}
else {

    limpa_formulário_cep();
}
}