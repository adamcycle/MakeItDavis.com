$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function() {
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 95) {
      $('#headerlogo').slideDown(150);
    } else {
      $('#headerlogo').slideUp(150);
    }
  });
});

var navstate = "closed";

function toggle() {
  if (navstate == "closed") {
    document.getElementById("mobilemenu").style.width = "200px";
    navstate = "open";
  } else {
    document.getElementById("mobilemenu").style.width = "0px";
    navstate = "closed";
  }
}

//video playlist loop
window.onload = function(e) {

  var videoSource = new Array();
  videoSource[0] = 'video/Handyman.mp4#t=5';
  videoSource[1] = 'video/Home.mp4#t=7';
  videoSource[2] = 'video/Chandelier.mp4#t=4';
  videoSource[3] = 'video/Fresh-Paint.mp4#t=5';
  videoSource[4] = 'video/Fresh-Paint.mp4#t=5';

  var poster = new Array();
  poster[0] = 'video/Handyman.jpg';
  poster[1] = 'video/Home.jpg';
  poster[2] = 'video/Chandelier.jpg';
  poster[3] = 'video/Fresh-Paint.jpg';
  poster[4] = 'video/Fresh-Paint.jpg';

  var i = 0;
  var videoCount = videoSource.length;

  function videoPlay(videoNum) {
    document.getElementById("vid").setAttribute("src", videoSource[
      videoNum], "poster", poster[videoNum]);
    document.getElementById("vid").load();
    document.getElementById("vid").play();
  }
  document.getElementById('vid').addEventListener('ended', myHandler,
    false);

  videoPlay(0);

  function myHandler() {
    i++;
    if (i == (videoCount - 1)) {
      i = 0;
      videoPlay(i);
    } else {
      videoPlay(i);
    }
  }
}

//fade in first video
var fade_in_videos = document.querySelectorAll('.fade-in-video');

for (i = 0; i < fade_in_videos.length; i++) {
  fade_in_videos[i].addEventListener("playing", function() {
    this.className += ' is-playing';
  });
}

//video opacity transition - .fader class
jQuery(function($) {
  function opa(selector, op, time) {

    var curOpa = 0,
      timer = setInterval(function() {
        if (curOpa === op.length) curOpa = 0;
        $(selector).css("opacity", op[curOpa]);
        curOpa++;
      }, time);
  }
  $(window).load(function() {
    opa(".fader", ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
      1000);
  });
});
