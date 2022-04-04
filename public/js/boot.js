//#init
// checking available webview/browser features
if (window.navigator) {
  molix.moduleCount++;
  $('id', 'nav').innerHTML = 'module "navigator" <span class="green">is available</span>';
} else {
  molix.lastError = 'Module "navigator" is not available';
  molix.reportError();
}

if (window.Audio) {
  $('id', 'audio').innerHTML = 'module "Audio" <span class="green">is available</span>';
} else {
  $('id', 'audio').innerHTML = '<span class="warn">[WARN]:</span> <b>Audio</b> doesn\'t supported, but Molix can work withnout <b>Audio</b> module';
  molix.lastError = $('id', 'audio').innerText;
}

if (window.innerWidth < 640 || window.innerHeight < 360) {
  $('id', 'screen').innerHTML = `<span class="warn">[WARN]: Your screen is too small <b>(${window.innerWidth}x${window.innerHeight})</b></span>`;
  molix.lastError = $('id', 'screen').innerText;
}

if (window.localStorage) {
  $('id', 'storage').innerHTML = 'Local storage <span class="green">is available</span>';
  molix.moduleCount++;
} else {
  molix.lastError = 'access to localStorage: <b>failed</b>';
  molix.reportError();
}

if (winmngr) {
  $('id', 'winmngr').innerHTML = 'module "winmngr" <span class="green">loaded</span>';
  molix.moduleCount++;
}

if (winmngr == undefined || !winmngr) {
  $('id', 'winmngr').innerText = 'winmngr not loaded';
  molix.lastError = '"winmngr" is missing or not loaded';
  molix.moduleCount--;
  molix.reportError();
}
//#init end

if (molix.moduleCount == molix.defaultModulesCount) {
  molix.allModulesLoaded = true;
  $('id', 'boot').innerHTML += '<span class="info">[initializing]: <b>DONE</b></span>';
  $('id', 'boot').remove();
  $('id', 'molix').style.display = 'block';
  molix.logging.log(`Boot successfull, loaded ${molix.moduleCount} modules in total, loaded all modules: ${molix.allModulesLoaded}`);
} else {
  molix.reportError();
}


