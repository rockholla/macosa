var currentAudio;

document.getElementById('impress').addEventListener( "impress:stepenter", function() {
  var currentStep = document.querySelector( ".present" );

  var allAudio = currentStep.querySelectorAll('audio');
  for (var i = 0; i < allAudio.length; i++) {
    allAudio[i].onended = function () {
      var playAfter = this.getAttribute('data-play-after');
      if (playAfter) {
        document.getElementById(playAfter).play();
      } else {
        if (this.getAttribute('id') != 'title-end-audio') {
          window.impressApi.next();
        }
      }
    };
  }

  if (allAudio.length > 0) {
    currentAudio = allAudio[0];
    currentAudio.play();
  }

});

document.getElementById('impress').addEventListener("impress:stepleave", function () {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});

var controlsState = 'playing';
document.getElementById('play-pause-controls').addEventListener('click', function () {
  if (controlsState == 'playing') {
    this.style['background-position'] = '-183px 0px';
    controlsState = 'paused';
    if (currentAudio) {
      currentAudio.pause();
    }
  } else {
    this.style['background-position'] = '0px 0px';
    controlsState = 'playing';
    if (currentAudio) {
      currentAudio.play();
    }
  }
});
