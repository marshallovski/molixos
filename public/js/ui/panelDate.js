setInterval(() => {
	document.querySelector('.actionpanel_calendar').innerHTML = `${new Date().toLocaleDateString()}<br>${new Date().toLocaleTimeString().slice(0, -3)}`;
}, 1000);
