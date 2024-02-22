var mousemovement = document.documentElement; 
var customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

mousemovement.addEventListener("mousemove", (e) => { 
  mousemovement.style.setProperty("--x", e.clientX + "px"); 
  mousemovement.style.setProperty("--y", e.clientY + "px"); 
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});