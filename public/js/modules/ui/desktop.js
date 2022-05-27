const json = fetch('/assets/etc/desktop/desktop_config.json')
    .then(r => r.json()).then(res => {
        console.log('Parsed desktop config:', res);

        $('cl', 'body').style.setProperty("--defbg", res.desktopbg);
    });

// $('id', 'molix').oncontextmenu = function (event) {
//     $('cl', '.desktop_contextmenu').style.top = `${event.clientY}px`;
//     $('cl', '.desktop_contextmenu').style.left = `${event.clientX}px`;
//     $('cl', '.desktop_contextmenu').style.display = 'block';
//     event.preventDefault();
//     return false;
// }

// window.onkeydown = function (e){
//     if (e.button === 3) {
//         $('cl', '.desktop_contextmenu').style.display = 'none';
//     }
//     console.log(e)
// }

molix.totalModules++;