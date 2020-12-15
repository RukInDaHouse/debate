var card = document.getElementById('card');

    card.onmousedown = function(e) {

      var coords = getCoords(card);
      var shiftX = e.pageX - coords.left;
      var shiftY = e.pageY - coords.top;

      card.style.position = 'absolute';
      document.body.appendChild(card);
      moveAt(e);

      card.style.zIndex = 1000;

      function moveAt(e) {
        card.style.left = e.pageX - shiftX + 'px';
        card.style.top = e.pageY - shiftY + 'px';
      }

      document.onmousemove = function(e) {
        moveAt(e);
      };

      card.onmouseup = function() {
        document.onmousemove = null;
        card.onmouseup = null;
      };

    }

    card.ondragstart = function() {
      return false;
    };


    function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
