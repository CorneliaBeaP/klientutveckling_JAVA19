$(document).ready(function(){

    //console.log("Hello");

    //$('p').hide();

    //$('#demo1').hide();

    //$('.demo').hide();

    //$('div').click(function(){
    //    $(this).hide();

    //});
    
//Caching, cachar till en variabel
    //let $myListItems = $('li');
    //$myListItems.addClass('hot');

//Chaining
    //$('h1').hide().show(500);

//utan chaining
    //$('h1').hide();
    //$('h1').show(500);

    $('#demo2').html("Metoden <b>html()</b> ändrar Text och HTML");

    let $value = $('#demo6').val();
    console.log($value);


    $('#removethis').remove();

    $('#demo8').empty();

    $('ul').prepend('<li>Start(prepend)</li>');
    $('ul').append('<li>End(append)</li>');
    $('ul').before('Before');
    $('ul').after('After');


    $('a').attr('target', '_blank');

    //Metoden toggleClass
    $('#btn1').click(function(){
    $('#demo9').toggleClass('hot');
    });

    $('#btn1').click(function(){
        if($('#btn1').text() == "Klicka här"){
            $('#btn1').text('HOT');
        }else if($('#btn1').text() == "HOT"){
            $('#btn1').text('COLD');
        }else if($('#btn1').text() == "COLD"){
            $('#btn1').text('HOT');
        }
    });


    $("#demo11").mouseenter(function(){
        $(this).html("Demo på mouseenter!");
        });
        $("#demo11").mouseout(function(){
        $(this).html("Demo på mouseout!");
    }); 

    $("#demo12").mousedown(function(){
            $(this).html("Demo på mousedown!");
            });
            $("#demo12").mouseup(function(){
            $(this).html("Demo på mouseup!");
    }); 


    $("#d1").focus(function() {
        $(this).css("background-color",
        "gold");
        });

    $("#d1").blur(function() {
        $(this).css("background-color",
        "white");
        });


$('#showpassword').change(function(){
let variabel = document.getElementById('losenord');
if(variabel.type === "password"){
    variabel.type = 'text';
}else{
    variabel.type = 'password';
}

});

$("#hide").click(function () {
    $("p").hide(300)
    });
    $("#show").click(function () {
    $("p").show(300)
    });


    $("#demo").click(function () {
        $("#p1").toggle(300);
        $(this).text(function (i, text) {
        return text == "Visa" ? "Dölj" : "Visa";
        })
        });




    });