menu.onclick = function myFunction() {
   var x = document.getElementById('menu-nav');

   if (x.className === "menu-nav") {
       x.className += " responsive";
   } else {
      x.className = "menu-nav";
   }
}