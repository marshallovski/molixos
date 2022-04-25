/**
 * @name molix
 * @description Main Molix file (don't modify this file)
 */

const molix = {
  osSector: $('id', 'molix'),
  bootSector: $('id', 'boot'),
  allModulesLoaded: false,
  moduleCount: 0,
  defaultModulesCount: 3,
  defaultBootTimeout: 500,
  reportError() {
    $('id', 'molix').style.display = 'none';  
    $('id', 'boot').style.display = 'block';
    $('id', 'boot').innerHTML = `<span class="error">Error: ${molix.logging.lastError || 'not reported'},<br>reboot in few seconds</span>`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  },
  scrwidth: window.innerWidth,
  scrheight: window.innerHeight,
  version: '4756-dev'
}

// @TODO: remove this func and replace with document.getElementById() and document.querySelector()
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