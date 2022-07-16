var state = "paused";
var currentAudio = $("#audio-1");
var audio = $('audio');
audio.on("ended", function () {
  console.log(currentAudio);
  if ($(this)[0] == $("#audio-1")[0]) {
    console.log('1');
    currentAudio = $("#audio-2");
    currentAudio.trigger("play");
  } else if ($(this)[0] == $("#audio-2")[0]) {
    console.log('2');
    currentAudio = $("#audio-3");
    currentAudio.trigger("play");
  } else if ($(this)[0] == $("#audio-3")[0]) {
    console.log('3');
    currentAudio = $("#audio-1");
    currentAudio.trigger("pause");
  }
});
audio.on("pause", function () {
  $(".player").
  find(".fa").
  removeClass("fa-pause").
  addClass("fa-play");
  state = "paused";
  $(".player").removeClass("playing");
});
audio.on("play", function () {
  $(".player").
  find(".fa").
  removeClass("fa-play").
  addClass("fa-pause");
  $(".player").addClass("playing");
  state = "playing";
});
$(".player").click(function () {
  if (state == "paused") {
    currentAudio.trigger("play");
  } else if (state == "playing") {
    currentAudio.trigger("pause");
  }
});