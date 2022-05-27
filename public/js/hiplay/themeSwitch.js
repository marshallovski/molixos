let currentTheme = window.localStorage.getItem('theme');

if (!currentTheme) {
	window.localStorage.setItem('theme', 'dark');
}

if (currentTheme === 'dark') {
	document.body.classList.add('theme-dark');
} else if (currentTheme === 'light') {
	document.body.classList.add('theme-light');
	document.querySelector('header').classList.add('header-light');
	document.querySelector('.header_item').classList.add('header_item-light');
}