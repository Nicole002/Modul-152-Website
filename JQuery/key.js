function keyCode(event) {
    var x = event.keyCode;
    var player = document.getElementById("keyplay");

    switch (x) {
        case 49:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/numberOne.mp3")
            player.play();
            break;
        case 50:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/numberTwo.mp3")
            player.play();
            break;
        case 51:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/numberThree.mp3")
            player.play();
            break;
        case 38:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/moveUp.mp3")
            player.play();
            break;
        case 40:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/moveDown.mp3")
            player.play();
            break;
        case 39:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/right.mp3")
            player.play();
            break;
        case 37:
            player.setAttribute("src", "Audio/LA_152_7750_DOM_JS_SOUND_Files/left.mp3")
            player.play();
            break;
        default:
            alert("You pressed unkonwn key!");
            break;

    }
}