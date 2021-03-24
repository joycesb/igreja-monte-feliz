// $("form").submit()

function enviar(){
    debugger
    var nome = $('#inputName').val();
    var sobrenome= $('#inputSobrenome').val();
    var email= $('#inputEmail4').val();
    var dataNascimento= $('#inputData').val();
    var estadoCivil= $('#inputEstadoCivil').val();
    var conjuge= $('#inputConjuge').val();
    var nomeMae= $('#inputNomeMae').val();
    var nomePai= $('#inputNomePai').val();
    var escolaridade= $('#inputEscolaridade').val();
    var profisssao= $('#inputProfissao').val();
    var tel= $('#txtTelefone').val();
    var cel= $('#txtCel').val();
    var bairro= $('#inputBairro').val();
    var complemento= $('#inputAddress2').val();
    var cidade= $('#inputCity').val();
    var estado= $('#inputUF').val();
    var batizado= $("[name='gridRadios']").val();
    var dataBatismo= $('#inputDataBatismo').val();
    var situacao= $('#txtCel').val();

    $.ajax({
        url : "https://monte-feliz-form-api.herokuapp.com/api/Members",
        method : "POST",
        contentType : 'application/json',
        dataType : 'json',
        data :
            `{ "nome":"${nome}"},
            { "sobrenome":"${sobrenome}"},
            { "email":"${email}"},
            { "dataNascimento":"${dataNascimento}"},
            { "estadoCivil":"${estadoCivil}"},
            { "conjuge":"${conjuge}"},
            { "nomeMae":"${nomeMae}"},
            { "nomePai":"${nomePai}"},
            { "escolaridade":"${escolaridade}"},
            { "profisssao":"${profisssao}"},
            { "telefone":"${tel}"},
            { "celular":"${cel}"},
            { "bairro":"${bairro}"},
            { "cidade":"${cidade}"},
            { "complemento":"${complemento}"},
            { "estado":"${estado}"},
            { "batizado":"${batizado}"},
            { "dataBatismo":"${dataBatismo}"},
            { "status":"${situacao}"}`,
        beforeSend : function(){
             $("#resultado").html("ENVIANDO...");
        }
    })
    .done(function(msg){
        $("#resultado").html(msg);
    })
    .fail(function(jqXHR, textStatus, msg){
        alert(msg);
    });
}
