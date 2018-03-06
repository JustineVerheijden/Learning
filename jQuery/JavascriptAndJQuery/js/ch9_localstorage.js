
/*if (window.localStorage) {

    var txtUsername = document.getElementById('name');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = localStorage.getItem('username');
    txtAnswer.value = localStorage.getItem("answer");

    txtUsername.addEventListener('input',function(){
        localStorage.setItem('username',txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input',function(){
        localStorage.setItem('answer',txtAnswer.value);
    },false);

}*/
if (window.sessionStorage) {

    var txtUsername = document.getElementById('name');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username');
    txtAnswer.value = sessionStorage.getItem("answer");

    txtUsername.addEventListener('input',function(){
        sessionStorage.setItem('username',txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input',function(){
        sessionStorage.setItem('answer',txtAnswer.value);
    },false);

}