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
	var col7 = document.querySelector('.col-7');
	var elemKod4 = document.querySelector('.in-kod4').innerHTML;

	col7.innerHTML += '<div>' + elemKod4 + '</div>';
};


document.onclick = function() {
	var elem = window.event.srcElement;
	if (elem.className === "btn") {
		addWhiteBlock();
		Drag();

	}
	else if (elem.className === "btn2") {
		addBlueBlock();
		Drag();
	}		
	else if (elem.className === "btn3") {
		addPurpleBlock();
		Drag();

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

var Drag = function() {
document.addEventListener("click", removeElem("card", "data-del", "delete"));

function change_color(elem, color) {
	elem.parentElement.style.background = color;
}


let elements = document.querySelectorAll('.textcard');

elements.forEach(function(el) {
  let mover = false,
    x, y, posx, posy, first = true;
  el.onmousedown = function() {
    mover = true;
  };
  el.onmouseup = function() {
    mover = false;
    first = true;
  };
  el.parentNode.onmousemove = function(e) {
    el.style.cursor = "move";
    if (mover) {
      if (first) {
        x = e.offsetX;
        y = e.offsetY;
        first = false;
      }

      posx = e.pageX - x;
      posy = e.pageY - y;
      el.style.left = posx + 'px';
      el.style.top = posy + 'px';
    }
  }
});
};