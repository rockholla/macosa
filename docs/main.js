document.getElementById('impress').addEventListener( "impress:stepenter", function() {
  var currentStep = document.querySelector( ".present" );
  if (currentStep.id == 'how-to-5') {
    console.log(document.getElementById('audible-prompt'));
    currentStep.getElementsByTagName('audio')[0].play();
  }
});