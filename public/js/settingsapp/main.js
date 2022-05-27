// needs fixing and completing

// fetch('/assets/etc/system_apps.json')
//     .then(r => r.json()).then(res => {
//         Object.entries(res).forEach(e => {
//             for (let index = 0; index < e[1].length; index++) {
//                 document.getElementById('about_items').innerHTML += `<div class="settingitem"><h2>${e[1][0]}</h2>${e[1][index - 1]}</div>`;
//             }

//         });
//     });

fetch('/assets/etc/desktop/wallpapers.json')
    .then(r => r.json()).then(wallp => {
        Object.entries(wallp).forEach(wallp => {
            for (let index = 0; index < wallp.length; index++) {
                const element = wallp[index];
                document.querySelector('.dtsettings').innerHTML += `<img src="${element.replace(',', '')}" class="wallp">`;

            }
        });
    });

const aboutBtn = document.getElementById('open_about');

aboutBtn.onclick = function () {
    document.querySelector('.title').textContent = 'About';
    document.querySelector('main').style.display = 'none';
    document.querySelector('.about').style.display = 'block';
}

document.getElementById('open_dtopset').onclick = function () {
    document.querySelector('.title').textContent = 'Desktop settings';
    document.querySelector('main').style.display = 'none';
    document.querySelector('.dtsettings').style.display = 'block';
    document.querySelector('.about').style.display = 'none';
}