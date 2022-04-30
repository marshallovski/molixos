# Molix
<h3>A lightweight web-powered OS written in HTML5 and Node.js</h3>
Current version: 4756-dev (see <a href="https://github.com/marshallovski/molixos/blob/main/README.md#changes-in-latest-release">changes</a> in this release)
<hr>

# Browsers support:
~~Google Chrome 60+ (internal Chrome issue with window resizing)
<br>
Mozilla Firefox 60+ (no issues, in older Firefox versions not tested yet)~~	

(new releases not tested, but **should** work in Chrome 60 and Firefox 60)

# Features
<ul>
	<li>Fully async window manager (<code>winmngr</code>)</li>
	<li>Native JavaScript (no f*cking React, jQuery or other shit)</li>
</ul>

# TODO:
<ul>
	<li>Bootable image</li>
	<li>Multi-language</li>
	<li>Find contributors</li>
	<li>Make default apps (like calculator, text editor, image viewer, etc.)</li>
	<li>Action panel</li>
	<li>Desktop customization (like changing color of background, etc.)</li>
	<li>Make windows and window buttons more modern</li>
	<li>Notification manager</li>
	<li>Closing/minimizing windows</li>
	<li>Low-level API (example: RAM usage - <code>GET /api/sys</code> -> response in JSON -> memoryUsage)</li>
</ul>

# Changes in latest release:
<ul>
	<li>Fixed window buttons (again)</li>
		<li>Some work with API</li>
	<li>Stopped using simple-window-manager</li>
		<li>Action panel</li>
			<li>Now windows can't be over action panel</li>

and so
</ul>

# Current work:
<ul>
	<li>Updating window manager (make more modern theme, closing/minimizing windows)</li>
	<li>Action panel</li>
	<li>Hardware API</li>
	<li>"Start" menu</li>
</ul>

# Screenshots
<p>(all screenshots captured at Firefox 99.0.1 (64-bit) in Windows 10)</p>
![image](https://user-images.githubusercontent.com/68496774/166097314-19ce8f13-713c-4f05-bb48-236160adb58f.png)

