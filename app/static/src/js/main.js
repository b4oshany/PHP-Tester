$(document).on("submit", "#commands", function(e){
    e.preventDefault();
    $.post(host+"/eval", $(this).serialize(), function(data){
       $("#results").prepend(data);
    });
});
