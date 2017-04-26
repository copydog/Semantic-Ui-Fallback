//******************** fix equal width grid ********************
var number = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'
];
function loadEqualWidthGrid() {
    var el = $('.ui.equal.width.grid');
    var count = el.children().length;

    // using css to fix (1-16 range)
    if (count > 0 && count <= 16) {
        el.addClass(number[count]+' column').addClass();
    }
    // using js calculation to fix
    else {
        var width = 100/count;
        el.find('>.column').css('width', width+'%');
    }
}


loadEqualWidthGrid();
