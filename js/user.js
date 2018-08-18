$(document).ready(function() {
    // llamando a los id/etiquetas 
    var $usuario = $('#user');
    var $correo = $('#correo');
    var $checked = $('input[type="checkbox"]');
    var $boton = $('input[type="submit"]');
    var next = $('#next');
    // var expresion = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]+)\.)+([a-zA-Z0-9]{2,4})+$/;
    var validateEmail = false;
    var validateUser = false;
    var validchecked = false;
    // Asociando eventos a los inputs
    $usuario.on('input', function(event) {
      if ($usuario.val() !== '') {
        validateUser = true;
        console.log('esta');
        activeButton();
      } else {
        validateUser = false;
        desactiveButton();
      }
    });
  
    $correo.on('input', function(event) {
      // console.log($(this).val());
       var expresion = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]+)\.)+([a-zA-Z0-9]{2,4})+$/;
      // console.log(expresion.test($(this).val()));
      if (expresion.test($(this).val())) {
        validateEmail = true;
        activeButton();
      } else {
        validateEmail = false;
        desactiveButton();
      }
    }); 
    $checked.on('click', function(event) {
      console.log(event.target.checked);
      if (event.target.checked === true) {
        validchecked = true;
        activeButton();
        // console.log('hola')
      } else {
        validchecked = false;
        desactiveButton();
      } 
    });
    /* ------------ HABILITANDO/DESABILITANDO BOTONES----------*/
    function activeButton() {
      console.log(validateEmail);
      if (validateEmail && validateUser && validchecked) {
        $boton.attr('disabled', false);
        $boton.addClass('purple-next');
      }
    }
    function desactiveButton() {
      $boton.attr('disabled', true);
    }
    next.on('click', function() {
      window.location.href = '../views/vencier.html';
    });
  });
  