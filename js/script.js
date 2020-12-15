var addWhiteBlock = function() {
	var col3 = document.querySelector('.col-3');
	var elemKod2 = document.querySelector('.in-kod2').innerHTML;

	col3.innerHTML += '<div>' + elemKod2 + '</div>';
};

var addBlueBlock = function() {
	var col3 = document.querySelector('.col-3');
	var elemKod3 = document.querySelector('.in-kod3').innerHTML;

	col3.innerHTML += '<div>' + elemKod3 + '</div>';
};

var addPurpleBlock = function() {
	var col6 = document.querySelector('.col-8');
	var elemKod4 = document.querySelector('.in-kod4').innerHTML;

	col6.innerHTML += '<div>' + elemKod4 + '</div>';
};


document.onclick = function() {
	var elem = window.event.srcElement;
	if (elem.className === "btn") {
		addWhiteBlock();
	}
	else if (elem.className === "btn2") {
		addBlueBlock();
	}		
	else if (elem.className === "btn3") {
		addPurpleBlock();
	}		
};

function removeElem(delElem, attribute, attributeName) {
  if (!(delElem && attribute && attributeName)) return;
  return function(e) {
    let target = e.target;
    if (!(target.hasAttribute(attribute) ?
        (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
    let elem = target;
    while (target != this) {
      if (target.classList.contains(delElem)) {
        target.remove();
        return;
      }
      target = target.parentNode;
    }
    return;
  };
}


document.addEventListener("click", removeElem("card", "data-del", "delete"));

function change_color(elem, color) {
	elem.parentElement.style.background = color;
}