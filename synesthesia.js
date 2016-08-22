var colorMap = {
    'a' : '#ffcc00',
    'b' : '#e6eeff',
    'c' : '#ecc6c6',
    'd' : '#86592d',
    'e' : '#ffccff',
    'f' : '#ffeb99',
    'g' : '#b37700',
    'h' : '#003300',
    'i' : '#ffffcc',
    'j' : '#fff599',
    'k' : '#1a0033',
    'l' : '#336600',
    'm' : '#2b2d1f',
    'n' : '#331a00',
    'o' : '#162829',
    'p' : '#804d00',
    'q' : '#1a0033',
    'r' : '#4d2e00',
    's' : '#caceff',
    't' : '#003300',
    'u' : '#e4ac01',
    'v' : '#cb9801',
    'w' : '#fec51b',
    'x' : '#262626',
    'y' : '#ffcc66',
    'z' : '#000000'
};

$(document).on('keyup', function(e){
    var letter = String.fromCharCode(e.which).toLowerCase();
    $('#swatch').css('background-color', colorMap[letter]);
});