$('selector a').on('click', function(e) {
    if (e.preventDefault()) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var queryString = "vote=" + e.target.id;
    $.get('votes.php', queryString, function(data) {
        $("#selector").html(data);
    });
}); 