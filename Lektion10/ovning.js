let shoppingArray = JSON.parse(localStorage.getItem('shoppingArray'));
if(shoppingArray.length>0){
    for(i = 0; i<shoppingArray.length; i++){
        $('#mylist').append('<li class="list-group-item""><input type="button" id="deletebtn" value="Radera" class="btn btn-danger mr-5 p-2">' + shoppingArray[i] +'</li>' );
    }
}


$('#btn').on('click', addItem);
$('#inputfield').on('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        $('#btn').click();
    }
});


function addItem(){
    let $value = $('#inputfield').val();
    $('#mylist').append('<li  class="list-group-item"><input type="button" id="deletebtn" value="Radera" class="btn btn-danger mr-5 p-2">' + $value + '</li>');
    shoppingArray.push($value);
    localStorage.setItem('shoppingArray', JSON.stringify(shoppingArray));
    $('#inputfield').val('');

}


$('.btn-danger').click(function(){
    let li = this.parentNode;
    let ul = li.parentNode;
    let itemname = li.innerHTML;
    shoppingArray.splice(shoppingArray.indexOf(itemname.substring(83)), 1);
    ul.removeChild(li);
    localStorage.setItem('shoppingArray', JSON.stringify(shoppingArray));

});
