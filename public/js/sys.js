const molix = {
  reportError() {
    $('id', 'molix').style.display = 'none';
    $('id', 'boot').style.display = 'block';
    $('id', 'boot').innerHTML = `<br><img src="/assets/boot-logo.png" alt="error" style="width: 350px;"><br><p class="txt-white" style="width: 350px; display: block; margin: auto;">${logging.lastError || 'not reported'}<br>${logging.lastErrorDetails}<br><br><br>reboot in 5 seconds</p>`;
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  },
  exec(cmd) {
    let ws = new WebSocket('ws://localhost:7070');
    ws.onopen = function () {
      ws.send(cmd);
    }
  },
  scrwidth: window.innerWidth,
  scrheight: window.innerHeight,
  totalModules: 0
};

function $(method, element) {
  if (method === 'id') {
    return document.getElementById(element);
  } else if (method === 'cl') {
    return document.querySelector(element);
  }
}