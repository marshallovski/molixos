molix.strings = {
  INTERNAL_ERROR: 'INTERNAL ERROR',
  NEW_HARDWARE_FOUND: 'New hardware found - {hardwarename}.',
  MISSINGLIB: 'The {invocator} is tried to require <b>{libname}</b> which is missing or not loaded.',
  ACCESS_ERR: '"{elem}" is not accessible.<br>Returned error: {errortext}.',
  APP_ERR: '{appname} ({pid}) has caused a error: {errortext}.',
  RW_ERR: '{appname} has caused MEMORY_ERROR: tried to write to <b>read-only</b> setting/segment.',
  WINDOWCREATE_ERR: 'Please provide missing arguments at winmngr.createWindow() function at window "<b>{wintitle}</b>"<br>window values:\nwintitle = {wintitle}, wincontent = {wincontent}, winid = {winid}, winicon = {winicon}.',
  componentTest: `
  <label for="prg">Progress:</label><progress id="prg" value="20" max="100"></progress>
  <br>
  <label for="fruits">Choose a fruit:</label>
<select id="fruits">
<option value="apple">Apple</option>
<option value="banana">Banana</option>
<option value="vodka">Vodka</option>
</select> 
<br>
<br>
  <button>Just a default button</button>
  <button class="btn-green">Green button</button>
  <br>
  <br>
  <button class="btn-red">Red (danger) button</button>
  <button class="btn-blue">Blue button</button>
  <button class="modernbtn">Modern button</button>
`,
  bikefm: '<iframe src=\'http://localhost:3030/apps/bikefm\' class="appiframe">'
}

molix.totalModules++;