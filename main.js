// creare una web app per gestire una todo-list. Utilizzate l'API con il vostro link personalizzato (v. messaggio precedente di Michele) e iniziate con la visualizzazione di tutti i todo, l' *inserimento* di un nuovo todo e la *cancellazione* di un todo esistente. Poi aggiungete la possibilità di *modificare* un todo esistente e, come *bonus*, la possibilità di aggiungere un campo "orario" aggiuntivo


$(document).ready(function(){
   var url_base= 'http://157.230.17.132:3009/todos/';



   $.ajax({
     'url' :url_base,
     'method': 'GET',
     'success': function(data){
       for (var i = 0; i < data.length; i++) {
         $('#todos').append('<li>' + data[i].text  + '</li>');
       }
     },
     'error': function(){
       alert('qualcosa è andato storto')
     }
   });



   $.ajax({
     'url' :url_base,
     'method': 'POST',
     'data':{
       'text': todo_text
     },
     'success': function(data){
       
     },
     'error': function(){
       alert('qualcosa è andato storto')
     }
   });


   $('#new_todo_button').click(function())

});
