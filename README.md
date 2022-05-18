# Molix
<h3> A lightweight web-powered OS </h3>
Current version: <strong>4758-dev</strong> (see <a href="#changes-in-latest-release">changes</a> in this release)
<hr>

# Browsers support:
Soon

# Install

1. Install Node.js (https://nodejs.org)
2. Install all packages: `npm i` and type `npm run start` to launch Molix server 
3. Open browser and type <a href="http://localhost:3030" target="_blank">http://localhost:3030</a>

# Features
<ul>
	<li>Fully async window manager (<code>winmngr</code>)</li>
	<li>Minimizing, closing and restoring windows</li>
	<li>Start panel</li>
	<li>Very old UI</li>
	<li>Own music player (<code>Hiplay</code>)</li>
	<li>Own file manager (<code>BikeFM</code>)
</ul>

# TODO:
<ul>
	<li>Bootable image (.iso or .img)</li>
	<li>Multi-language</li>
	<li>Find contributors</li>
	<li>Make Molix default apps (like calculator, image viewer, email app, text editor, music player, file manager, etc.)</li>
	<li>Desktop customization (like changing color of background, applying picture wallpapers, etc.)</li>
	<li>Make windows more modern</li>
	<li>Notification manager</li>
</ul>

# Changes in latest release:
<ul>
	08.05.2022:
1. Start menu is now beautiful and work
2. GUI components are complete (like button, dialogbox, progress, etc.)
3. Now you can exec by websocket (ws://localhost:7070)
4. Fixed restoring windows critical error
5. Created event journal icon
6. Created file manager (BikeFM) icon

12.05.2022:
1. Added blue button
2. Fixed Power Settings menu
3. Now buttons in Power Settings menu have colored background on hover

13.05.2022:
1. Now window content is always centered

14.05.2022: 
1. Now default OS font is Open Sans (excluding window title, it's uses DejaVu Sans)
2. Started work at BikeFM (Molix's default file manager)
3. Started work at Hiplay (Molix's default music player)
4. Added Hiplay music player icon
5. Added Hiplay music player item in start menu
6. Updated installation help in github readme
7. Updated "Features" in github repo
8. Update screenshot in github readme

15.05.2022:
1. Created API endpoint for rebooting and power off
</ul>

# Current work:
<ul>
	<li>Molix default apps</li>
	<li>Desktop customization</li>
	<li>Desktop wallpapers</li>
</ul>

# Screenshots
<p>(all screenshots captured at Firefox 99.0.1 (64-bit) in Windows 10)</p>

![image](https://user-images.githubusercontent.com/68496774/168419008-aa2ebee6-ae21-4a81-bf1d-bd837afa109c.png)
