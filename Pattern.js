function AbcdPattern(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 1; i <= num; i++) {
        for (j = 0; j < i; j++) {
            alphabet += "<span>" + String.fromCharCode(j + 65) + "</span>";
        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_1").innerHTML = title;
}
function AbcdPattern1(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 0; i < num; i++) {
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(i + 65) + "</span>";
        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_2").innerHTML = title;
}
function AbcdPattern2(num, heading) {
    var num;
    var i, j;
    var k = 0;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 0; i < num; i++) {
        for (j = 0; j <= i; j++) {
            alphabet += "<span>" + String.fromCharCode(k + 65) + "</span>";
            k = k + 1;
        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_3").innerHTML = title;
}
function AbcdPattern3(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 1; i <=num; i++) {
        for (j = 0; j < num; j++) {
             if((i+j)<(num+1)) {
                alphabet += "<span>" + String.fromCharCode(j+ 65) + "</span>";
            }
        }
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_4").innerHTML = title;
}
function AbcdPattern4(num, heading) {
    var num;
    var i, j;
    var title = heading;
    var pTag = "";
    var alphabet = "";
    for (i = 1; i <=num; i++) {
        for (j = 0; j < num; j++) {
            if(j<i) {
                alphabet += "<span>" + String.fromCharCode(j+ 65) + "</span>";
            }
        }

        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    for (i = 1; i <=num; i++) {
        for (j = 0; j < num; j++) {
            if((i+j)<(num)) {
                alphabet += "<span>" + String.fromCharCode(j+ 65) + "</span>";
            }
        }
        
        pTag += "<p>" + alphabet + "</p>";
        alphabet = "";
    }
    title += pTag;
    document.getElementById("pattern_12").innerHTML = title;
    console.log(title);
}
var heading = "<h2>Pattern</h2>";
AbcdPattern(5, heading);
AbcdPattern1(5, heading);
AbcdPattern2(5, heading);
AbcdPattern3(5, heading);
AbcdPattern4(5, heading);

