// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    updateDom();
  });

  function updateDom () { 
      paragraph = document.querySelector("p#text") 
    //   debugger
      paragraph.textContent =  "This really cool!"
  };