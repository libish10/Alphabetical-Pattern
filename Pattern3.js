function AbcdPattern10(num, heading) {
    var i, j, k, l;
    var title = heading;
    var alphabet = " ";
    var pTag = "";
    for (i = (num-1); i >=1; i--) {

        for (k = (num-1); k >=i; k--) {
            alphabet += "<span>" + " " + "</span>";
        }
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        for (l = 1; l <= i; l++) {
            alphabet += "<span>" + String.fromCharCode(l + 65 + i) + "</span>";
        }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = " ";

    }
    for (i =0; i <num; i++) {

        for (k = (num-1 ); k >= i; k--) {
            alphabet += "<span>" + " " + "</span>";
        }
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        for (l = 1; l <= i; l++) {
            alphabet += "<span>" + String.fromCharCode(l + 65 + i) + "</span>";
        }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = " ";

    }
    title += pTag;
    document.getElementById("pattern_10").innerHTML ="<pre>"+title+"</pre>";
}
function AbcdPattern11(num, heading) {
    var i, j, k, l;
    var title = heading;
    var alphabet = " ";
    var pTag = "";
    for (i =0; i <(num-1); i++) {

        for (k = (num-1 ); k >= i; k--) {
            alphabet += "<span>" + " " + "</span>";
        }
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        for (l = 1; l <= i; l++) {
            alphabet += "<span>" + String.fromCharCode(l + 65 + i) + "</span>";
        }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = " ";

    }
    for (i = (num-1); i >=0; i--) {

        for (k = (num-1); k >=i; k--) {
            alphabet += "<span>" + " " + "</span>";
        }
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        for (l = 1; l <= i; l++) {
            alphabet += "<span>" + String.fromCharCode(l + 65 +i) + "</span>";
        }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = " ";

    }
  
    title += pTag;
    document.getElementById("pattern_11").innerHTML ="<pre>"+title+"</pre>";
}
var heading = "<h2>Pattern</h2>";
AbcdPattern10(5, heading);
AbcdPattern11(5, heading);
