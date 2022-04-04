/**
 * @name molix
 * @description Main Molix file (don't modify this file)
 */

const molix = {
  osSector: document.getElementById('molix'),
  bootSector: document.getElementById('boot'),
  allModulesLoaded: false,
  moduleCount: 0,
  defaultModulesCount: 3,
  defaultBootTimeout: 500,
  reportError() {
    $('id', 'boot').innerHTML = `<span class="error">Error: ${molix.lastError},<br>reboot in few seconds</span>`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  },
  scrwidth: window.innerWidth,
  scrheight: window.innerHeight,
  version: '4753_dev'
}

function $(method, element) {
  switch (method) {
    case 'id':
      return document.getElementById(element)
      break;
    case 'cl':
      return document.querySelector(element)
      break;
  }
}