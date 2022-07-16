// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [

{
        name: "Denis Disco 80S",
        source: "https://pub0102.101.ru:8443/stream/personal/aacp/64/1781512?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwNjBhYzBkMDMzZDExZjg0NTFhM2NiNjlmOTA1NTlkYyIsIklQIjoiMTg4LjE2Mi4xNDIuMTk4IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTAzLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cLzEwMS5ydVwvIiwidWlkX2NoYW5uZWwiOiIxNzgxNTEyIiwidHlwZV9jaGFubmVsIjoicGVyc29uYWwiLCJ0eXBlRGV2aWNlIjoiUEMiLCJCcm93c2VyIjoiQ2hyb21lIiwiQnJvd3NlclZlcnNpb24iOiIxMDMuMC4wLjAiLCJTeXN0ZW0iOiJXaW5kb3dzIDEwIiwiZXhwIjoxNjU3NTg0Mzg3fQ.BeKQXembGRdmwlOYGJyWyZJnKDgjqU7LHt6gVHtcaMo",
        cover: "./assets/images/italo_disco_dance.png"
    },


    {
        name: "New Generation",
        source: "https://ruby.torontocast.com:1525/stream",
        cover: "./assets/images/RMI2-New.png"
    },
    {
        name: "Disco Classic",
        source: "https://ruby.torontocast.com:1385/stream",
        cover: "./assets/images/RMI1-Classic.png"
    },
    {
        name: "Euro Disco",
        source: "https://ruby.torontocast.com:1565/stream",
        cover: "./assets/images/RMI3-Euro-Disco.png"
    },
    {
        name: "In The Mix",
        source: "https://ruby.torontocast.com:1365/stream",
        cover: "./assets/images/RMI4-Mix.png"
    },
    {
        name: "Synthesizer Dance",
        source: "https://ruby.torontocast.com:1615/stream",
        cover: "./assets/images/RMI5-Synth.png"
    },

{
        name: "80s Gold",
        source: "https://ruby.torontocast.com:1635/stream",
        cover: "./assets/images/RMI6.png"
    },
{
        name: "Italo4you",
        source: "https://ssl-1.radiohost.pl:8018/stream",
        cover: "./assets/images/italo4you.png"
    },



{
        name: "Vesti FM",
        source: "https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_128kbps",
        cover: "./assets/images/vesti_fm.jpg"
    }





];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()