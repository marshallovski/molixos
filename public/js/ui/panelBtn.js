document.addEventListener("click", function(e) {
  let m = document.getElementById('menu');
  if (e.target.id != 'opensysmenu' && e.target.id != 'menu') {
    m.style.display = 'none';
  } else if (e.target.id == 'opensysmenu') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});