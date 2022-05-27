'use strict';

const likeBtn = document.querySelector('.likeBtn');
const repeatBtn = document.querySelector('.rpbtn');
const playBtn = document.querySelector('.playbtn');
const durationText = document.getElementById('controls_duration');
const minTimeBtn = document.getElementById('seekmin');
const plusTimeBtn = document.getElementById('seekplus');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');

const music = new Audio('/assets/hiplay/tmp/music.mp3');
music.load();

likeBtn.onclick = function () {
  if (this.innerText === 'favorite_border') {
    this.innerText = 'favorite';
  } else {
    this.innerText = 'favorite_border';
  }
};

repeatBtn.onclick = function () {
  if (music.loop === false) {
    music.loop = true;
    this.style.backgroundColor = '#eee';
    this.style.color = '#000';
  } else {
    this.style.backgroundColor = 'transparent';
    this.style.color = '#eee';
    music.loop = false;
  }
};

music.ontimeupdate = function () {
  let curmins = Math.floor(music.currentTime / 60);
  let cursecs = Math.floor(music.currentTime - curmins * 60);
  let durmins = Math.floor(music.duration / 60);
  let dursecs = Math.floor(music.duration - durmins * 60);
  let slider = document.getElementById('timeslider');
  if (cursecs < 10) {
    cursecs = `0${cursecs}`;
  }

  if (dursecs < 10) {
    dursecs = `0${dursecs}`;
  }

  if (curmins < 10) {
    curmins = `0${curmins}`;
  }

  if (durmins < 10) {
    durmins = `0${durmins}`;
  }


  durationText.innerText = `${curmins}:${cursecs} | ${durmins || '00'}:${dursecs || '00'}`;
  setTimeout(function () {
    let nt = music.currentTime * (100 / music.duration);
    slider.value = nt;
  }, 1000);

};

playBtn.onclick = function () {
  if (music.paused) {
    this.innerText = 'pause';
    music.oncanplay = music.play();
  } else {
    music.pause();
    this.innerText = 'play_arrow';
  }
};

minTimeBtn.onclick = function () {
  music.currentTime -= 10;
};

plusTimeBtn.onclick = function () {
  music.currentTime += 10;
};


settingsBtn.onclick = function () {
  document.getElementById('playerMain').style.display = 'none';
  document.getElementById('settingsMenu').style.display = 'block';
  document.getElementById('closeSettingsBtn').style.display = 'block';
  this.style.display = 'none';
};

closeSettingsBtn.onclick = function () {
  document.getElementById('playerMain').style.display = 'block';
  document.getElementById('settingsMenu').style.display = 'none';
  settingsBtn.style.display = 'block';
  this.style.display = 'none';
};