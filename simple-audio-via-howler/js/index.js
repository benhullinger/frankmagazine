var sound = new Howl({
  src: ['BDEN_eq.mp3'],
  sprite: {
    myHoverSnd: [0, 135000],  // from start to 2 minutes 15 seconds in
    DamianSnd: [32500, 76700], // from 32.5 seconds in to 2 minutes 15 seconds in
    BaileeSnd: [0, 32300]  // from start to 32.3 seconds in
  }
});


// The event code is nearly the same… just calling the markers you defined in the Howl.
function PlayBaileeSnd(){
 sound.play('BaileeSnd');
 $('#bailee').css("outline-color","red");
}

function PlayDamianSnd(){
 sound.play('DamianSnd');
 $('#damian').css("outline-color","blue");
}

$('#bailee').on('click', PlayBaileeSnd);
$('#damian').on('click', PlayDamianSnd);

$('#baileehover').hover(playEnter, playLeave);