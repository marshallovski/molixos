# Molix
<h3> A lightweight web-powered OS </h3>
Current version: <strong>4759-dev</strong> (see <a href="#changes-in-latest-release">changes</a> in this release)
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
	<li>
	BikeFM is now working
	</li>
	<li>
	BikeFM now detects file format
	</li>
	
	<li>
	Now BikeFM uses Noto Sans as default font (instead of DejaVu Sans)
	</li>
	<li>
	Now you can browse folders and open files in BikeFM
	</li>
	<li>
	Added "Disks usage" bookmark at "Fast access" menu in BikeFM
	</li>
	<li>
	Now BikeFM is adaptive (usable on mobile devices, tested on real smartphone)
	</li>
	
	<li>
		Making some adaptive layout for mobiles (in future, maybe I'm create Molix Mobile for mobile devices)
	</li>
	<li>
		Window title is now some smaller
	</li>
	<li>
		Fixed fallback fonts
	</li>
	<li>
		Added custom position property in window creating (<code>winmngr.createWindow({ pos: { x: 100, y: 100 } })</code>)
	</li>
	<li>
		Now error screen is more nice
	</li>
	<li>
		Fixed rebooting
	</li>
	<li>
		 Fixed poweroff
	</li>
	<li>
		Added wallpapers
	</li>
	<li>
		Now windows remember it's position and when you restoring window, it's set to it's last position
	</li>
	<li>
		Now appname in actionpanel tab is horizontally centered
	</li>
	<li>
		Hiplay: Fixed some bugs, fixed fonts and layout
	</li>
	<li>
		Hiplay: Fixed "not found" error in frontend
	</li>
</ul>

# Current work:
<ul>
	<li>Molix default apps</li>
	<li>Desktop customization</li>
	<li>Desktop wallpapers</li>
</ul>

# Screenshots
<p>(all screenshots captured at Firefox 99.0.1 (64-bit) in Windows 10)</p>

![image](https://user-images.githubusercontent.com/68496774/169658836-07646c4a-5cc2-4c79-9867-93e5fc5f63a8.png)
