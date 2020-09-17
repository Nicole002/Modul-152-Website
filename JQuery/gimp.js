$(document).ready(function () {

    var count = 1;
    $('#gimp').click(function () {
        count++;
        if (count == 1) {
            document.getElementById("bg").style.backgroundColor = "transparent";
        }
        if (count == 2) {
            document.getElementById("bg").style.backgroundColor = "lightblue";
            count = 0;
        }

    });
});