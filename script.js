function enviar_datos_ajax(){
    var n=document.getElementById("nombre").value
    var cor=document.getElementById("email").value
    var men=document.getElementById("mensaje").value
    
    var url= "enviar.php";
    
    $.ajax(
        {
        type: "post",
        url:url,
        data:{nombre:n,email:cor,mensaje:men},
        
        success: function(datos){
            $("#resultado").html(datos);
        }
    }
        )
        
    
}