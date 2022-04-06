/**
 * @name winmngr
 * @description Molix window manager (supports HTML code in content)
 * @function createWindow
 * @function createErrorWindow
 * @example winmngr.createWindow('hello world!', 'This is a test window, created by <code>winmngr</code>', 9999, '/assets/icons/infoIcon.png')
 */

'use strict';

const winmngr = {
  dragWindow(windowel) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    windowel.forEach(el => {
      el.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.body.style.userSelect = 'none';
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
        document.body.style.userSelect = 'initial';
        document.onmouseup = null;
        document.onmousemove = null;
      }
    });
  },
  async createWindow({ title, content, id, icon, height, classes, style }) {
    if (!title || !content || !id || !icon) {
      molix.logging.log(`winmngr error: Please provide missing arguments at winmngr.createWindow(). window values:\nwintitle = ${title ? title : 'not provided'}, wincontent = ${content ? content : 'not provided'}, winid = ${id ? id : 'not provided'}, winicon = ${icon ? icon : 'not provided'}`);
      return winmngr.createErrorWindow('Error creating window', `Please provide missing arguments at winmngr.createWindow(). Window values:<br>wintitle = ${title ? title : '<b>not provided</b>'}, wincontent = ${content ? content : '<b>not provided</b>'}, winid = ${id ? id : '<b>not provided</b>'}, winicon = ${icon ? icon : '<b>not provided</b>'}`, Math.floor(1000 + Math.random() * 9000));
    }
    $('id', 'molix').innerHTML += (
      `<div class="window" id="${id ? id : Math.floor(1000 + Math.random() * 9000)}">
    <div class="window_header">  
      <img src="${icon ? icon : './assets/icons/errorIcon.png'}" class="window_icon">
      ${title}
      <div class="window_header_buttons">
        <span class="window_header_button otherbtn">&#8211;</span>
        <span class="window_header_button closebtn">&times;</span>
      </div>
    </div>
   <div class="window_content ${classes ? classes : ''}" style="height: ${height ? `${height}px` : 'inherit'}; ${style ? style : ''}">${content}</div>
  </div>
  `);
    molix.logging.log(`winmngr: created default window, ID: ${id ? id : 'empty'}, window title: ${title ? title : 'empty'}`);
  },
  async createErrorWindow({ title, content, id }) {
    if (!content) {
      content = 'Error content is empty';
    }

    if (!title) {
      title = 'Error content is empty';
    }

    $('id', 'molix').innerHTML += (
      `<div class="window" id="${id ? id : Math.floor(1000 + Math.random() * 9000)}">
    <div class="window_header">
    <img src="./assets/icons/errorIcon.png" class="window_icon">
      ${title}
      <div class="window_header_buttons">
        <span class="window_header_button otherbtn">&#8211;</span>
        <span class="window_header_button closebtn">&times;</span>
      </div>
    </div>
    <div class="window_content">
    <img src="./assets/icons/errorIcon.png" alt="Error:" class="errorwindow_icon">
    <p class="errormsg">${content}</p>
    </div>
  </div>`
    );
    molix.logging.log(`winmngr: created error window, ID: ${id ? id : 'empty'}, window title: ${title ? title : 'empty'}`);
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

