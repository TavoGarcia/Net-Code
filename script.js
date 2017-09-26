function enviar_datos_ajax(){
    var n=document.getElementById("nombre").value
    var cor=document.getElementById("email").value
    var men=document.getElementById("mensaje").value

    var url= "enviar.php";
    var expresion = /\w+@\w+\.+[a-z]/; //ER para validar un correo
    var expresion2 = /^[a-zA-Z\s]*$/; //ER que admite solo letras y espacios
    var expresion3 = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/; //Expresión regular con acentos y omite caracteres como <> {} etc.

    if (n === "" || cor === "" || men === "") {
      div = document.getElementById('flotante1');
      div.style.display = '';
        $("#flotante1").delay(5000).fadeOut('slow');
      return false;
    }
    else if (!expresion.test(cor)){
      div = document.getElementById('flotante2');
      div.style.display = '';
      $("#flotante2").delay(5000).fadeOut('slow');
      return false;
    }
    else if (!expresion2.test(n)){
      div = document.getElementById('flotante3');
      div.style.display = '';
      $("#flotante3").delay(5000).fadeOut('slow');
      return false;
    }
    else if (!expresion3.test(men)){
      div = document.getElementById('flotante4');
      div.style.display = '';
      $("#flotante4").delay(5000).fadeOut('slow');
      return false;
    }

    else {
      $.ajax(
          {
          type: "post",
          url:url,
          data:{nombre:n,email:cor,mensaje:men},

          success: function(datos){
              $("#resultado").html(datos);
              $("#resultado").delay(5000).fadeOut('slow');
          }
      }
          )
    }


}
