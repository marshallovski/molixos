/**
 * @name winmngr
 * @description Molix window manager (supports HTML code in content)
 * @function createWindow
 * @function createErrorWindow
 * @example winmngr.createWindow('hello world!', 'This is a test window, created by <code>winmngr</code>', 9999, './assets/icons/infoIcon.png')
 */
const winmngr = {
  dragWindow: async function dragWindow(windowel) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    windowel.forEach(el => {
      el.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.querySelector('body').style.userSelect = 'none';
      }

      function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        document.querySelector('body').style.userSelect = 'initial';
        document.onmouseup = null;
        document.onmousemove = null;
      }
    });
  },
  createWindow: async function createWindow(wintitle, wincontent, winid, winicon, winheight, winclasses, winstyle) {
    if (!wintitle || !wincontent || !winid || !winicon) {
      molix.logEvent(`winmngr error: Please provide missing arguments at winmngr.createWindow(). window values:\nwintitle = ${wintitle ? wintitle : 'not provided'}, wincontent = ${wincontent ? wincontent : 'not provided'}, winid = ${winid ? winid : 'not provided'}, winicon = ${winicon ? winicon : 'not provided'}`);
      return winmngr.createErrorWindow('Error creating window', `Please provide missing arguments at winmngr.createWindow(). Window values:<br>wintitle = ${wintitle ? wintitle : '<b>not provided</b>'}, wincontent = ${wincontent ? wincontent : '<b>not provided</b>'}, winid = ${winid ? winid : '<b>not provided</b>'}, winicon = ${winicon ? winicon : '<b>not provided</b>'}`, Math.floor(1000 + Math.random() * 9000));
    }
    $('id', 'molix').innerHTML += (
      `<div class="window" id="${winid ? winid : Math.floor(1000 + Math.random() * 9000)}">
    <div class="window_header">  
      <img src="${winicon ? winicon : './assets/icons/errorIcon.png'}" class="window_icon">
      ${wintitle}
      <div class="window_header_buttons">
        <span class="window_header_button">-</span>
        <span class="window_header_button closebtn">&times;</span>
      </div>
    </div>
   <div class="window_content ${winclasses ? winclasses : ''}" style="height: ${winheight ? `${winheight}px` : 'inherit'}; ${winstyle ? winstyle : ''}">${wincontent}</div>
  </div>
  `);
    molix.logEvent(`winmngr: created default window, ID: ${winid}, window title: ${wintitle}`);
  },
  createErrorWindow: async function createErrorWindow(wintitle, wincontent, winid) {
    if (!wincontent) {
      wincontent = 'Error content is empty';
    }

    if (!wintitle) {
      wintitle = 'Error content is empty';
    }

    $('id', 'molix').innerHTML += (
      `<div class="window" id="${winid ? winid : Math.floor(1000 + Math.random() * 9000)}">
    <div class="window_header">
    <img src="./assets/icons/errorIcon.png" class="window_icon">
      ${wintitle}
      <div class="window_header_buttons">
        <span class="window_header_button">-</span>
        <span class="window_header_button closebtn">&times;</span>
      </div>
    </div>
    <div class="window_content">
    <img src="./assets/icons/errorIcon.png" alt="Error:" class="errorwindow_icon">
    <p class="errormsg">${wincontent}</p>
    </div>
  </div>`
    );
    molix.logEvent(`winmngr: created error window, ID: ${winid}, window title: ${wintitle}`);
  },
};

const mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // FOR DEBUG ONLY: console.log(mutation);
    winmngr.dragWindow(document.querySelectorAll('.window'));
  });
});

mutationObserver.observe(molix.osSector, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

