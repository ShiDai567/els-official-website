var bg_music_on_obj = document.getElementById("bg_music_on")
var bg_music_off_obj = document.getElementById("bg_music_off")
//bg_music_on_obj.style.display = "inline"
//bg_music_off_obj.style.display = "none"

bg_music_on_obj.style.display = "none"
bg_music_off_obj.style.display = "inline"
function img_rotate() {
    var img_on = document.getElementById('bg_music_on');
    current = (current + 1) % 360;
    img_on.style.transform = 'rotate(' + current + 'deg)';
    setTimeout(img_rotate, 25);
}

function bg_music_on() {
    bg_music.play();
    bg_music_off_obj.style.display = "inline";
    bg_music_on_obj.style.display = "none";
    console.log("music off");
}
function bg_music_off() {
    bg_music.pause();
    bg_music_off_obj.style.display = "none";
    bg_music_on_obj.style.display = "inline";
    console.log("music on");
}
var current = 0;

