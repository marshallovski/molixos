function $(method, element) {
    if (method === 'id') {
        return document.getElementById(element);
    } else if (method === 'cl') {
        return document.querySelector(element);
    }
}

const pathinput = $('id', 'path');
const cfiles = $('id', 'contents_file');
const refrbtn = $('id', 'header_refreshbtn');
const opensb = $('id', 'opensbBtn');

async function refreshDir() {
    $('id', 'contents_files').innerHTML = '';
    const r = await fetch(`/api/readdir/?dir=${pathinput.value}`);
    const res = await r.json();

    if (res.error)
        return $('id', 'contents_files').textContent = res.message;

    if (res.content.length === 0)
        $('id', 'contents_files').textContent = 'Empty dir';

    if (res.content.length > 1000) // browser just stopping, for example, if you entering system32 folder in Windows (Windows is shit)
        return $('id', 'contents_files').innerHTML = `<li class="filelabel">Too many files/folders (${res.content.length} items)</li>`;

    await res.content.forEach(element => {
        $('id', 'contents_files').innerHTML += `<tr><td><p class="filelabel" ondblclick="(/[.]/.exec(\`${element}\`)) ? molix.exec('notepad ${pathinput.value}/${element}') : pathinput.value += \`/\${this.textContent}\`; refreshDir();">${element}</p></td><td>${(/[.]/.exec(element)) ? /[^.]+$/.exec(element.toUpperCase()) : 'Folder'}</td><td>filesize</td></tr>`;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await refreshDir();
});

refrbtn.onclick = async () => { await refreshDir(); };

function checkKey(e) {
    if (e.code === "Enter") {
        return refreshDir();
    }
}

document.addEventListener('keydown', checkKey);
