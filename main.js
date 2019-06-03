// creare una web app per gestire una todo-list. Utilizzate l'API con il vostro link personalizzato (v. messaggio precedente di Michele) e iniziate con la visualizzazione di tutti i todo, l' *inserimento* di un nuovo todo e la *cancellazione* di un todo esistente. Poi aggiungete la possibilità di *modificare* un todo esistente e, come *bonus*, la possibilità di aggiungere un campo "orario" aggiuntivo


$(document).ready(function(){

  var template_html = $('#template_todo').html();
  var template_function = Handlebars.compile(template_html);


   var url_base= 'http://157.230.17.132:3009/todos/';

   stampa_impegni();

   $('#bottone_crea').click(function(){
     var todo_text = $('#new_todo').val();

     $('#new_todo').val('');

     $.ajax({
       'url' :url_base,
       'method': 'POST',
       // gli passo il testo scritto in input dall'utente
       'data':{
        'text': todo_text
       },
       'success': function(data){
           stampa_impegni();

       },
       'error': function(){
         alert('qualcosa è andato storto')
       }
     });

   });

   $('#todos').on('click', 'span', function(){
     // vado a selezionare tramite l'attributo data impostato nel metodo get l'elemento selezionato
     var id_deleter = $(this).attr('data-id');


   });




  //  creo una funzione da riutilizzare in varie parti del codice

   function stampa_impegni(){
     $('#todos').empty();

     $.ajax({
       'url' :url_base,
       'method': 'GET',
       'success': function(data){
         for (var i = 0; i < data.length; i++) {
           $('#todos').append('<li><span data-id="'+data[i].id+'">x</span>' + data[i].text  + '</li>');
           // var new_todo = data[i].text;
           // $('#todos').append(template_function(new_todo));
         }
       },
       'error': function(){
         alert('qualcosa è andato storto')
       }
     });
   }


});
