
$('#delete').on('click', function() {
    $('#delete-item').remove();
})

$('.micheckbox' ).on( 'click', function() {
    if( $(this).is(':checked') ){
        // Hacer algo si el checkbox ha sido seleccionado
        $('#remplace').attr('href','../user.html')
        console.log('user html')
        // alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
    } else {

        // Hacer algo si el checkbox ha sido deseleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
    }
});
