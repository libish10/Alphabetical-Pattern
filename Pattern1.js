function AbcdPattern5(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 1; i <= num; i++) {
        for (j = num; j >= 0; j--) {
            if ((i + j) <= num) {
                alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
            }

        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_6").innerHTML = title;
    console.log(title);
}
function AbcdPattern6(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 0; i <= num; i++) {
        for (j = 1; j <=num ; j++) {
            if ((i + j) <= num) {
                alphabet += "<span>" + String.fromCharCode(num - j + 65) + "</span>";
            }
        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_5").innerHTML = title;
    console.log(title);
}
var heading = "<h2>Pattern</h2>";
AbcdPattern5(5, heading);
AbcdPattern6(5, heading);