$(document).ready(function() {
	setTimeout(loadPlayer, 1500);

	var w = window.innerWidth;
  	if (w > 767) {
    	$("#menu-jk").scrollToFixed();
  	} else {
    	$("#menu-jk").scrollToFixed();
  	}
});

function loadPlayer(){
	document.querySelector('lottie-player');
	$(".jm-loadingpage").fadeOut("slow");
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function check(e) {
	tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8 || tecla == 32) {
        return true;
	}
	
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function valida(f) {
	var ok = true;
	var msg = "";

	if (f.elements[0].value == "") {
	  msg = "Por favor, ingrese su nombre.";
	  ok = false;
	  f.elements[0].focus();
	} else if (!validateEmail(f.elements[1].value)) {
		msg = "Por favor, ingrese un email correcto.";
		ok = false;
		f.elements[1].focus();
	} else if (f.elements[2].value == "") {
		msg = "Por favor, ingrese su número de celular.";
		ok = false;
		f.elements[2].focus();
	} else if (f.elements[3].value == "") {
		msg = "Por favor, ingrese su mensaje.";
		ok = false;
		f.elements[3].focus();
	}
  
	if(ok == false) 
		alertError(msg);
	  
	return ok;
  }

  function alertError(msg) {
    Swal.fire({
      position: "center",
      type: "error",
      title: "Error",
      text: msg,
      showConfirmButton: false,
      timer: 2000
	});
	
	$('#swal2-title').css("display", "inline");
  }




  $('.botonF1').hover(function(){
	$('.contenedorMesa').addClass('animacionVer');
  })
  $('.contenedorMesa').mouseleave(function(){
	$('.contenedorMesa').removeClass('animacionVer');
  })



