function change_color(elem, color) {
elem.parentElement.style.background = color;
}

var addAudit = function() {
	var col3 = document.querySelector('.col-3');
	var elemKod2 = document.querySelector('.in-kod2').innerHTML;

	col3.innerHTML += '<div>' + elemKod2 + '</div>';
};
var addAudit2 = function() {
	var col2 = document.querySelector('.col-2');
	var elemKod3 = document.querySelector('.in-kod3').innerHTML;

	col2.innerHTML += '<div>' + elemKod3 + '</div>';
};

var addAudit3 = function() {
	var col1 = document.querySelector('.col-1');
	var elemKod2 = document.querySelector('.in-kod2').innerHTML;

	col1.innerHTML += '<div>' + elemKod2 + '</div>';
};



var addAudit5 = function() {
	var col7 = document.querySelector('.col-7');
	var elemKod5 = document.querySelector('.in-kod5').innerHTML;

	col7.innerHTML += '<div>' + elemKod5 + '</div>';
};

var addAudit6 = function() {
	var col8 = document.querySelector('.col-8');
	var elemKod6 = document.querySelector('.in-kod6').innerHTML;

	col8.innerHTML += '<div>' + elemKod6 + '</div>';
};

var addAudit7 = function() {
	var col9 = document.querySelector('.col-9');
	var elemKod7 = document.querySelector('.in-kod7').innerHTML;

	col9.innerHTML += '<div>' + elemKod7 + '</div>';
};

document.onclick = function() {
	var elem = window.event.srcElement;
	if (elem.className === "btn") {
		addAudit();
	}
	else if (elem.className === "btn2") {
		addAudit2();
	}		
	else if (elem.className === "btn3") {
		addAudit3();
	}
	else if (elem.className === "btn4") {
		addAudit4();
	}		
	else if (elem.className === "btn5") {
		addAudit5();
	}
	else if (elem.className === "btn6") {
		addAudit6();
	}	
	else if (elem.className === "btn7") {
		addAudit7();
	}			
};

