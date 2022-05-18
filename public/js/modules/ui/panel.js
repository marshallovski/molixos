'use strict';

const panel = {
  startDT() {
    setInterval(() => {
      document.querySelector('.actionpanel_calendar').innerHTML = `${new Date().toLocaleDateString()}<br>${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    }, 1000)
  },
  handleMenu() {
    document.addEventListener('click', function (e) {
      const m = document.getElementById('menu');
      if (e.target.id !== 'opensysmenu' && e.target.id !== 'menu') {
        m.style.display = 'none';
      } else if (e.target.id === 'opensysmenu') {
        m.style.display = (m.style.display !== 'block') ? 'block' : 'none';
      }
    })
  },
  createTab(title, icon, id) {
    $('id', 'apptabs').innerHTML += `<div class="actionpanel_apptab" id="tab-${id}" onclick="if ($('id', '${id}').style.display == 'block') { return null; } else { document.getElementById('${id}').style.top = '${winmngr.windows[id].posTop}'; document.getElementById('${id}').style.display = 'block' }"><img src="${icon}" onerror="this.src = '/assets/icons/errorIcon.png'" class="apptab_icon"><span class="apptab_appname">${title}</span></div>`;
  }
}

panel.startDT();
panel.handleMenu();

$('id', 'powercontrols_closebtn').onclick = function () {
  $('cl', '.menu_powercontrols').style.display = 'none';
}

molix.totalModules++;
