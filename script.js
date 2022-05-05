let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
 {
     name: "Denis Disco 80S",
     path: "https://pub0102.101.ru:8443/stream/personal/aacp/64/1781512?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJlZjMxMDdmYTJlNGY5YjZjODljNmRmMjQzMzVmZDgzMyIsIklQIjoiMTg4LjE2Mi4xNDUuMTc5IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTAwLjAuNDg5Ni4xMjcgU2FmYXJpXC81MzcuMzYiLCJ1aWRfY2hhbm5lbCI6IjE3ODE1MTIiLCJ0eXBlX2NoYW5uZWwiOiJwZXJzb25hbCIsInR5cGVEZXZpY2UiOiJQQyIsIkJyb3dzZXIiOiJDaHJvbWUiLCJCcm93c2VyVmVyc2lvbiI6IjEwMC4wLjQ4OTYuMTI3IiwiU3lzdGVtIjoiV2luZG93cyAxMCIsImV4cCI6MTY1MTc5NTU4Nn0.vYIdSU14JVtWHFbJCwGGFSFrhJuH6oyHaNlqF03p1zc",
     img: "img/denis.jpg",
     singer: "1"
   },  

{
     name: "VESTI FM",
     path: "https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_64kbps",
     img: "img/vesti-fm.jpg",
     singer: "2"
   },
   {
     name: "Italo4you",
     path: "https://ssl-1.radiohost.pl:8018/stream",
     img: "img/1.jpg",
     singer: "3"
   },
   {
     name: "New Generation",
     path: "https://ruby.torontocast.com:1525/stream",
     img: "img/new.png",
     singer: "4"
   },
   {
     name: "Disco Classic",
     path: "https://ruby.torontocast.com:1385/stream",
     img: "img/classic.png",
     singer: "5"
   },
   {
     name: "Euro Disco",
     path: "https://ruby.torontocast.com:1565/stream",
     img: "img/euro-disco.png",
     singer: "6"
   },

{
     name: "Synthesizer Dance",
     path: "https://ruby.torontocast.com:1615/stream",
     img: "img/synt.png",
     singer: "7"
   },


{
     name: "In the Mix",
     path: "https://ruby.torontocast.com:1360/stream",
     img: "img/mix.png",
     singer: "8"
   },


{
     name: "80s Gold",
     path: "https://ruby.torontocast.com:1635/stream",
     img: "img/80s.png",
     singer: "9"
   }




];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }