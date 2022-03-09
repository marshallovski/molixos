/**
 * @name molix
 * @description Main Molix file (don't modify this file)
 * @todo Multilanguage
 */

const molix = {
  osSector: document.getElementById('molix'),
  bootSector: document.getElementById('boot'),
  allModulesLoaded: false,
  moduleCount: 0,
  defaultModulesCount: 3,
  defaultBootTimeout: 500,
  reportError: function reportError() {
    $('id', 'boot').innerHTML = `<span class="error">Error: ${molix.lastError},<br>reboot in few seconds</span>`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  },
  logEvent: function logEvent(text) { /* TODO: move logEvent to ./modules/logEvent.js and rename it (something like ) */
    molix.eventJournal += `\n[${new Date().toLocaleDateString()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]: ${text}`;
  },
  scrwidth: window.innerWidth,
  scrheight: window.innerHeight,
  lastError: ``,
  eventJournal: ``,
  stateMessage: { /* TODO: move stateMessage to another file and choose another name ("stateMessage" looks strange) */
    INTERNAL_ERROR: 'INTERNAL ERROR',
    NEW_HARDWARE_FOUND: 'New hardware found - {hardwareName}.',
    MISSINGLIB: 'The %s is tried to require <b>%s</b> which is missing or not loaded.',
    ACCESS_ERR: '"%s" is not accessible.<br>Returned error: %s.',
    APP_ERR: '%s has caused a error in %s at [memory address or window PID or window title].',
    RW_ERR: '%s has caused MEMORY_ERROR: tried to write to <b>read-only</b> setting/segment.',
    WINDOWCREATE_ERR: "Please provide missing arguments at winmngr.createWindow() function at window \"<b>{wintitle}</b>\"<br>window values:\nwintitle = {wintitle}, wincontent = {wincontent}, winid = {winid}, winicon = {winicon}"
  }
}

function $(method, element) {
  switch (method) {
    case 'id':
      return document.getElementById(element)

    case 'cl':
      return document.querySelector(element)
  }
}

// TODO: remove this from sys.js
const user = {
  getUser: function getUser() {
    return window.localStorage.getItem('molix_username');
  }
};

if (user.getUser()) {
  $('id', 'welcometext').innerText = `Welcome to Molix OS, ${user.getUser()}`;
  document.title = user.getUser() + '@molix';
} else if (!user.getUser()) {
  $('id', 'welcometext').innerText = 'Welcome to Molix OS Demo!';
  document.title = `demouser@molix`;
}
