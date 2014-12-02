var supportStorage = false;

if(typeof(Storage) !== undefined){
    supportStorage = true;
}

function flash_notification(message, status){
    $('body').append('<div class="alert fade in alert-'+status+' alert-dismissable">'
                     +'<button type="button" class="close" data-dismiss="alert"'
                     +' aria-hidden="true">&times;</button>'
                     +message+'</div>');
    setTimeout(function(){
        $(".alert").alert('close');
    }, 5000);
}

$("[name='register'][type='button']").click(function(){
    $("#login-register form.login").hide("slow");
    $("#login-register .modal-title").html("Register");
    $("#login-register form.register").show("slow");
})

$("[name='signin'][type='button']").click(function(){
    $("#login-register form.register").hide("slow");
    $("#login-register .modal-title").html("Sign In");
    $("#login-register form.login").show("slow");
})


$('form[name="user_invite"]').submit(function(e){
    var invites = $("input[name='user_invite']").val();
    $.post('sendto', {"user_invite": invites}, function(response){
        if(response.status == 200){
            flash_notification("Your invites has been sent to the following users/email "+invites, "success")
        }else{
            flash_notification("Your invites has not been sent to the following users/email "+invites, "error")
        }
    });
    return false;
});


function show_tab(element){
    $(element).tab("show");
}

