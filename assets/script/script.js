function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    x.style.opacity = "0";
    setTimeout(() => {
      x.style.opacity = "1";
    }, 5);
  } else {
    x.style.opacity = "0";
    setTimeout(() => {
      x.style.display = "none";
    }, 310);
  }
}


function myNavBar(){
    let navBar = document.querySelector('.navigation')
    navBar.classList.toggle('active', window.scrollY > 50)
}

window.addEventListener("scroll", myNavBar)