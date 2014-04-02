/**
 * [Detect scrollbar width](http://davidwalsh.name/detect-scrollbar-width)
 */

module.exports = function(){

  var div = document.createElement("div");
  var width = 0;
  
  div.style.width = 
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);

  width = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return width;

};
