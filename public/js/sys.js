/**
 * @name molix
 * @description Molix client-side file
 */
'use strict';

const molix = {
  reportError() {
    $('id', 'molix').style.display = 'none';
    $('id', 'boot').style.display = 'block';
    $('id', 'boot').innerHTML = `<span class="error">Error: ${molix.logging.lastError || 'not reported'}, error details: ${molix.logging.lastErrorDetails}<br>reboot in few seconds</span>`;
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  },
  scrwidth: window.innerWidth,
  scrheight: window.innerHeight
};

function $(method, element) {
  if (method === 'id') {
    return document.getElementById(element);
  } else if (method === 'cl') {
    return document.querySelector(element);
  }
}