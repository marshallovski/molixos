function $(elem) {
    return document.querySelector(elem);
}

fetch('/assets/etc/system_apps.json')
    .then(res => res.json())
    .then(res => {
        Object.entries(res).forEach(app => {
            for (let index = 1; index < app.length; index++) {
                const element = app[index];
                $('.about_items').innerHTML += `
        <div class="about_item">
            <img src="${element.icon}" alt="${element.name}'s icon" class="about_item_logo">
            <h3>
            ${element.name}
            </h3>
            <p class="subh">by <b>${element.devs}</b></p>
            <p class="subh">Installed version: ${element.version}</p>
            <p class="about_item_desc">${element.desc}</p>
        </div>
        `;
            }
        });
    });

fetch('/assets/etc/desktop/wallpapers.json')
    .then(r => r.json()).then(wallp => {
        Object.entries(wallp).forEach(wallp => {
            for (let index = 1; index < wallp.length; index++) {
                const element = wallp[index];
                document.querySelector('.wallps').innerHTML += `<img src="${element}" class="wallp" alt="${element}" onclick="fetch('/api/changeWallpaper/?bg=${element}'); window.parent.winmngr.createWindow({title: 'Molix settings', content: 'To change the wallpaper you have to log out, Molix will do this right now. Please save your work!', icon: '/assets/icons/molix_settingsIcon.svg'}); setTimeout(() => { window.parent.location.reload() }, 5000);">`;
            }
        });
    });

document.getElementById('open_about').onclick = function () {
    document.querySelector('.title').textContent = 'About Molix';
    document.querySelector('main').style.display = 'none';
    document.querySelector('.about').style.display = 'block';
}

document.getElementById('open_dtopset').onclick = function () {
    document.querySelector('.title').textContent = 'Desktop settings';
    document.querySelector('main').style.display = 'none';
    document.querySelector('.dtsettings').style.display = 'block';
    document.querySelector('.about').style.display = 'none';
}

document.getElementById('returntomain').onclick = function () {
    document.querySelector('.title').textContent = 'Select a setting';
    document.querySelector('main').style.display = 'block';
    document.querySelector('.dtsettings').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
}