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


