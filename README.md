# Molix
<h3> A lightweight web-powered OS </h3>
Current version: <strong>hotfix_4757-dev</strong> (see <a href="#changes-in-latest-release">changes</a> in this release)
<hr>

# Browsers support:
Soon

# Install

1. Install Node.js (https://nodejs.org)
2. Installing all packages and launching: `npm i`. Open browser and type <a href="http://localhost:3030" target="_blank">http://localhost:3030</a>

# Features
<ul>
	<li>Fully async window manager (<code>winmngr</code>)</li>
	<li>Minimizing, closing and restoring windows</li>
</ul>

# TODO:
<ul>
	<li>Bootable image</li>
	<li>Multi-language</li>
	<li>Find contributors</li>
	<li>Make Molix goods (or "default apps", like calc, image viewer, email app, text editor, etc.)</li>
	<li>Desktop customization (like changing color of background, etc.)</li>
	<li>Make windows and window buttons more modern</li>
	<li>Notification manager</li>
</ul>

# Changes in latest release:
<ul>
	<li>Some changes with <code>molix.reportError()</code></li>
	<li>Improved error catcher</li>
	<li>Removed some old things from molix object</li>
 	<li>Now <code>winmngr</code> uses <code>document.createElement</code> instead of <code>innerHTML +=</code></li>
	<li>Some changes in <code>winmngr</code></li>
	<li>Closing windows is complete</li>
	<li>Change in windows - now max. window size is 1280x800px</li>
	<li>Work at winimizing and restoring windows is complete</li>
	<li>Work at action panel is complete</li>
	<li>Added app tabs</li>
	<li>Now action panel is 50% transparent</li>
	<li>Fixed minimizing windows</li>
	<li>Work at start menu is started</li>
	<li>There is some plans for Molix goods</li>
	<li>Code improvements by eslint</li>
	<li>Restoring windows is working now</li>
	<li> Created /misc API endpoint for other information (like tmpdir, userinfo, etc.)</li>
	<br>
	<strong><code>hotfix_4757-dev</code> Hotfix changes:</strong>
	<li>Fixed issue https://github.com/marshallovski/molixos/issues/7</li>
	<li>Fixed issue https://github.com/marshallovski/molixos/issues/6</li>
	<li> Removed <code>winid</code> property from <code>winmngr</code></li>
</ul>

# Current work:
<ul>
	<li>"Start" menu</li>
	<li>Molix goods (default apps)</li>
	<li>Desktop customization</li>
	<li>Desktop wallpapers</li>
</ul>

# Screenshots
<p>(all screenshots captured at Firefox 99.0.1 (64-bit) in Windows 10)</p>

![image](https://user-images.githubusercontent.com/68496774/167155223-a66d8e05-9867-4202-b15f-815f35814af4.png)

