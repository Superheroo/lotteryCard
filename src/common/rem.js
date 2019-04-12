(function(d, w) {
  const doc = d.documentElement;
  function rem() {
    const width = Math.min(doc.getBoundingClientRect().width, 750);
    doc.style.fontSize = width / 7.5 + 'px';
  }
  rem();
  w.addEventListener('resize', rem);
})(document, window);



window.onload = function() {
  // 阻止双击放大
  var lastTouchEnd = 0;
  document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
          event.preventDefault();
      }
  });
  document.addEventListener('touchend', function(event) {
      var now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);

  // 阻止双指放大
  document.addEventListener('gesturestart', function(event) {
      event.preventDefault();
  });
}