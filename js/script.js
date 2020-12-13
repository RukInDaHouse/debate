var callbutton = document.getElementsByClassName('callbutton');
var newblock = document.getElementsByClassName('newblock');

    callbutton[0].onclick = function() {
    newblock[0].classList.remove('invisible');
}
