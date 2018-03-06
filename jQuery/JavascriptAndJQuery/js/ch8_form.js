$("#register").on("submit", function(e){
    if (e.preventDefault()){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var details =$("#register").serialize();
    $.post("register.php", details, function(data){
        $("#register").html(data);
    });
});