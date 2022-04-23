# Molix
<h3>A lightweight web-powered OS written in HTML5 and Node.js</h3>
Current version: 4755-dev (see <a href="https://github.com/marshallovski/molixos/blob/main/README.md#changes-in-latest-release">changes</a> in this release)
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
	<li>Fixed <a href="https://github.com/marshallovski/molixos/issues/4">Issue #4</a></li>
	<li>Fixed <a href="https://github.com/marshallovski/molixos/issues/3">Issue #3</a>
	<li>Attempt to use <code>simple-window-manager</code> (see it on <a href="https://github.com/davidfig/window-manager">GitHub</a>)</li>
	<li>... and many small improvements</li>
</ul>

# Current work:
<ul>
	<li>Bootable image</li>
	<li>Updating window manager (make more modern theme, closing/minimizing windows)</li>
	<li>Action panel</li>
	<li>Low-level API</li>
</ul>
<br>
<p>All modifications in open-source components will be marked as <code>@MOD</code></p>

# Screenshots
<p>(all screenshots captured at Firefox Dev Edition 99.0b2 in Debian 11 LXQt)</p>

![изображение](https://user-images.githubusercontent.com/68496774/162422312-95d5d4a1-5515-4d82-b82b-3734d3fbe19d.png)
