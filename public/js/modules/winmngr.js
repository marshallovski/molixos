'use strict'

const winmngr = {
  randomPID () {
    const array = new Uint32Array(10)
    self.crypto.getRandomValues(array)

    // eslint-disable-next-line no-unreachable-loop
    for (let i = 0; i < array.length; i++) {
      return array[i]
    }
  },
  windows: {},
  dragWindow (windowel) {
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0
    windowel.forEach(el => {
      el.onmousedown = dragMouseDown

      function dragMouseDown (e) {
        e = e || window.event
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
        document.body.style.userSelect = 'none'
      }

      function elementDrag (e) {
        e = e || window.event
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        el.style.top = (el.offsetTop - pos2) + 'px'
        el.style.left = (el.offsetLeft - pos1) + 'px'
      }

      function closeDragElement () {
        document.body.style.userSelect = 'initial'
        document.onmouseup = null
        document.onmousemove = null
      }
    })
  },

  async createWindow ({ title, content, icon, height, classes, style }) {
    if (!title || !content) {
      molix.logging.log(`winmngr error: Please provide missing arguments at winmngr.createWindow(). window values:\nwintitle = ${title || 'not provided'}, wincontent = ${content || 'not provided'}, winicon = ${icon || 'not provided, not necessarily'}`)
      return winmngr.createErrorWindow({ title: 'Error creating window', content: `Please provide missing arguments at winmngr.createWindow(). Window values:<br>wintitle = ${title || '<b>not provided</b>'}, wincontent = ${content || '<b>not provided</b>'}, winicon = ${icon || '<b>not provided</b>'}`, id: this.randomPID() })
    }

    const winElem = document.createElement('div')
    winElem.innerHTML = `<div class="window" id="${this.randomPID()}">
    <div class="window_header">  
      <img src="${icon || './assets/icons/errorIcon.png'}" class="window_icon" onerror="this.src='/assets/icons/errorIcon.png'">
      ${title}
      <div class="window_header_buttons">
        <span class="window_header_button otherbtn" onclick="$('id', '${id}').style.display = 'none'; $('id', '${id}').style.top = '-9999999999999999px'; if($('id', 'tab-${id}')) { return null; } else panel.createTab('${title}', '${icon}', '${id}')">&#8211;</span>` + `
        <span class="window_header_button closebtn" onclick="$('id', '${id}').remove(); if($('id', 'tab-${id}')) return $('id', 'tab-${id}').remove();">&times;</span>
      </div>
    </div>
   <div class="window_content ${classes || ''}" style="height: ${height || '150'}px; ${style || ''}">${content}</div>
   </div>`
    $('id', 'molix').appendChild(winElem)
    this.windows[id] = { title, content, icon, posTop: $('id', id).style.top || '0px' }
    if ($('id', `tab-${id}`)) { return null } else { panel.createTab(title, icon, id) }

    console.log(this.windows)
    molix.logging.log(`winmngr: created default window, ID: ${id || 'empty'}, window title: ${title || 'empty'}`)
  },
  async createErrorWindow ({ title, content, id, after }) {
    if (!content) {
      content = 'Error content is empty'
    }

    if (!title) {
      title = 'Error title is empty'
    }

    if (after) {
      (after)
    }

    const winElem = document.createElement('div')
    winElem.innerHTML =
      `<div class="window" id="${id || this.randomPID()}">
    <div class="window_header">
    <img src="./assets/icons/errorIcon.png" class="window_icon">
      ${title}
      <div class="window_header_buttons">
        <span class="window_header_button closebtn" onclick="$('id', '${id}').remove();">&times;</span>
      </div>
    </div>
    <div class="window_content">
    <img src="./assets/icons/errorIcon.png" alt="Error:" class="errorwindow_icon">
    <p class="errormsg">${content}</p>
    </div>
  </div>`
    $('id', 'molix').appendChild(winElem)

    molix.logging.log(`winmngr: created error window, ID: ${id || 'empty'}, window title: ${title || 'empty'}`)
  }
}

const mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // FOR DEBUG ONLY: console.log(mutation);
    if (document.querySelector('.window')) { winmngr.dragWindow(document.querySelectorAll('.window')) }
  })
})

mutationObserver.observe($('id', 'molix'), {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
})

winmngr.createWindow({
  title: 'gf',
  content: 'gfgfgf',
  id: winmngr.randomPID(),
  icon: '/assets/boot-logo.png',
  height: 300
})

winmngr.createWindow({title: 'hello!', content: 'hello again!', 'icon': '/assets/icons/infoIcon.png', id: 4565654})