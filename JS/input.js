/*
$('.name') . click (function(){
    $('.hell').show()
});

$('#file') . change (function(){
    $('#submit').removeAttr('disabled');
});


$('.blue') . dblclick (function(){
    $('.information').hide()
});

$('.red') . hover (function(){
    $('.information').hide()
});*/
//how to create keyup and keydown function 
$('#input_text').keyup(function(){
    var text=$('#input_text').val(text);
    alert(text)
});


