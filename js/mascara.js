function mascara(i,t){

    var v = i.value;

    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    if(t == "data"){
       i.setAttribute("maxlength", "10");
       if (v.length == 2 || v.length == 5) i.value += "/";
    }

    if(t == "cpf"){
       i.setAttribute("maxlength", "14");
       if (v.length == 3 || v.length == 7) i.value += ".";
       if (v.length == 11) i.value += "-";
    }

   //  if(t == "cep"){
   //     i.setAttribute("maxlength", "9");
   //     if (v.length == 5) i.value += "-";
   //  }
 }

 function mascaraCel(){

    var celular= document.getElementById('txtCel').value;
    if(celular.length==1){
     document.getElementById('txtCel').value ='(' + celular;
      }
    else if (celular.length==3){
     document.getElementById('txtCel').value = celular +')';
    }
    else if (celular.length==9){
     document.getElementById('txtCel').value = celular +'-';
    }
 }

 function mascaraTelefone(){

    var telefone= document.getElementById('txtTelefone').value;
    if(telefone.length==1){
     document.getElementById('txtTelefone').value ='(' + telefone;
      }
    else if (telefone.length==3){
     document.getElementById('txtTelefone').value = telefone +')';
    }

    else if (telefone.length==8){
     document.getElementById('txtTelefone').value = telefone +'-';
    }
 }

 function checarEmail(){

    var email= document.getElementById('inputEmail4').value;
    if(email==""||email.indexOf('@')==-1||email.indexOf('.')==-1){

     alert("Por favor Insira um E-mail valido");

 }
 }