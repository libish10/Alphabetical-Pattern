function AbcdPattern7(num, heading) {
    var i, j, k, l;
    var title = heading;
    var alphabet = " ";
    var pTag = "";
    for (i = 0; i < num; i++) {

        for (k = (num - 1); k >= i; k--) {
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
    document.getElementById("pattern_7").innerHTML = "<pre>"+title+"</pre>";
}
function AbcdPattern8(num, heading) {
    var i, j, k, l = 0;
    var title = heading;
    var alphabet = "";
    var pTag = "";
    for (i = 0; i <num; i++) {
        if (i % 2 == 0) {
            for (k = (num - 1); k>=i; k--) {
                alphabet += "<span>" + " " + "</span>";
            }
            for (j = 0; j <= i; j++) {
                alphabet += "<span>" + String.fromCharCode(l + 65) + "</span>";
                l += 1;
            }
            pTag += "<p>" + alphabet + "</p>";
            alphabet = " ";
        }
    }
    title += pTag;
    document.getElementById("pattern_8").innerHTML = title;
}
function AbcdPattern9(num, heading) {
    var i, j, k, l;
    var title = heading;
    var alphabet = " ";
    var pTag = "";
    var m = 0;
    for (i = num; i >= 1; i--) {
        
        for (k = (num - 1); k >= i; k--) {
            alphabet += "<span>" + " " + "</span>";
        }
        for (j = 0; j < i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        for (l = 2; l <= i; l++) {
            alphabet += "<span>" + String.fromCharCode(65 + l+j-2) + "</span>";
        
    }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = " ";

    }
    title += pTag;
    document.getElementById("pattern_9").innerHTML = "<pre>"+title+"</pre>";
}

var heading = "<h2>Pattern</h2>";
AbcdPattern7(5, heading);
AbcdPattern8(9, heading);
AbcdPattern9(5, heading);