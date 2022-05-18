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

async function refreshDir() {
    $('id', 'contents_files').innerHTML = '';
    const r = await fetch(`/api/readdir/?dir=${pathinput.value}`);
    const res = await r.json();
    res.content.forEach(element => {
        $('id', 'contents_files').innerHTML += `<li class="filelabel">${element}</li>`;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await refreshDir();
});

refrbtn.onclick = async () => { await refreshDir(); };
