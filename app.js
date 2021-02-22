const char = document.querySelector('.character');

var leftInt = 400;
var topInt = 280;

function getKeyMove(e) {
    var key = e.which || e.keyCode;
    switch(key) {
        case 37 :
            left();
            break;
        case 38 :
            up();
            break;
        case 39 :
            right();
            break;
        case 40 :
            down();
            break;
    }
}

function left() {
    if (leftInt == 0) {
        //Do nothing
    } else {
        leftInt -= 40;
        char.style.left = leftInt + 'px';
    }
}
function up() {
    if (topInt == 0) {
        //Do nothing
    } else {
        topInt -= 40;
        char.style.top = topInt + 'px';
    }
}
function right() {
    if (leftInt == 800) {
        //Do nothing
    } else {
        leftInt += 40;
        char.style.left = leftInt + 'px';
    }
}
function down() {
    if (topInt == 560) {
        //DO nothing
    } else {
        topInt += 40;
        char.style.top = topInt + 'px';
    }
}